/**
 * Static preview server for a landing folder.
 *
 * The landings use absolute asset paths (/assets/...), so opening index.html straight from disk
 * loads no CSS or images. Serve the folder as a site root instead:
 *
 *   node scripts/serve.js bovio              → http://localhost:8899
 *   node scripts/serve.js unboxity 3000
 *
 * No dependencies — plain Node.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const port = Number(process.argv[3]) || 8899;

if (!folder) {
  console.error('Usage: node scripts/serve.js <landing-folder> [port]');
  process.exit(1);
}

const root = path.resolve(__dirname, '..', folder);
if (!fs.existsSync(root)) {
  console.error(`No such folder: ${root}`);
  process.exit(1);
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

http
  .createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]);
    if (rel.endsWith('/')) rel += 'index.html';

    // Keep the request inside the landing folder.
    const file = path.join(root, path.normalize(rel).replace(/^(\.\.[/\\])+/, ''));
    if (!file.startsWith(root)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    fs.readFile(file, (err, body) => {
      if (err) {
        // Mirror Cloudflare Pages: unknown paths fall through to 404.html.
        fs.readFile(path.join(root, '404.html'), (e, page) => {
          res.writeHead(404, { 'Content-Type': MIME['.html'] }).end(e ? 'Not found' : page);
        });
        return;
      }
      res.writeHead(200, {
        'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': 'no-store', // always serve the file you just edited
      });
      res.end(body);
    });
  })
  .listen(port, () => console.log(`${folder} → http://localhost:${port}`));
