import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'sprites');

const SPRITES = [
  { name: 'rogue',       hash: 'hgiU2hA' },
  { name: 'archer',      hash: 'OrNGRgy' },
  { name: 'wizard',      hash: 'QAtKJFt' },
  { name: 'priest',      hash: 'MPcn792' },
  { name: 'warrior',     hash: 'It4sclp' },
  { name: 'knight',      hash: 'snm8oKO' },
  { name: 'paladin',     hash: 'caT4rO5' },
  { name: 'assassin',    hash: 'Xy1Lqha' },
  { name: 'necromancer', hash: 'pmOEcsZ' },
  { name: 'huntress',    hash: 'tylzyyE' },
  { name: 'mystic',      hash: 'bksjGPk' },
  { name: 'trickster',   hash: 'E66uyda' },
  { name: 'sorcerer',    hash: 'dzsmUSA' },
  { name: 'ninja',       hash: 'WS5AQZ7' },
  { name: 'samurai',     hash: 'be8agu7' },
  { name: 'bard',        hash: 'h5Os4xa' },
  { name: 'summoner',    hash: '4QnFwS9' },
  { name: 'kensei',      hash: 'L48PGQT' },
  { name: 'druid',       hash: '6miC182' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.realmeye.com/',
      },
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlink(dest, () => {});
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { name, hash } of SPRITES) {
    const url = `https://www.realmeye.com/s/a/img/wiki/i/${hash}.png`;
    const dest = path.join(OUT_DIR, `${name}.png`);
    process.stdout.write(`Downloading ${name}... `);
    try {
      await download(url, dest);
      const size = fs.statSync(dest).size;
      console.log(`OK (${size} bytes)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  console.log('\nDone! Check public/sprites/');
}

main();
