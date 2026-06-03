/**
 * Downloads all RealmEye sprite assets used in dungeons.js and components.
 * Run once: node scripts/download-sprites.mjs
 *
 * Outputs:
 *   public/items/<hash>.png   — dungeon loot item sprites
 *   public/icons/<hash>.png   — fixed UI sprites (tombstones, exalt stats, bag icon)
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DUNGEON_FILE = path.join(ROOT, 'src', 'data', 'dungeons.js');

const BASE_URL = 'https://www.realmeye.com/s/a/img/wiki/i/';
const ITEMS_DIR = path.join(ROOT, 'public', 'items');
const ICONS_DIR = path.join(ROOT, 'public', 'icons');

// Fixed sprites used in components (not from dungeon item data)
const FIXED_ICONS = [
  'gKMdCOG', // tombstone full (difficulty + fame icon)
  '4tJF9j9', // tombstone half
  'shULFwv', // white bag icon
  'E7fAk0D', // exalt: Life
  'KtbJvSr', // exalt: Mana
  'mGdE04P', // exalt: Attack
  'tBkJPkc', // exalt: Defense
  'Y6jFh6e', // exalt: Speed
  'bek1jrl', // exalt: Dexterity
  '0waaxFx', // exalt: Vitality
  'dy9u9k4', // exalt: Wisdom
  '0QgqbHI', // exalt portal: Oryx Sanctuary
];

function extractHashes(source) {
  const hashes = new Set();
  const pattern = /(?:hash|shinyHash):\s*'([A-Za-z0-9]+)'/g;
  let m;
  while ((m = pattern.exec(source)) !== null) {
    hashes.add(m[1]);
  }
  return [...hashes];
}

function download(hash, destDir) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destDir, `${hash}.png`);
    if (fs.existsSync(dest)) {
      process.stdout.write('.');
      return resolve({ hash, skipped: true });
    }
    const url = BASE_URL + hash + '.png';
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode} for ${hash}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        process.stdout.write('+');
        resolve({ hash, skipped: false });
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function downloadBatch(hashes, destDir, label) {
  console.log(`\n[${label}] ${hashes.length} sprites — legend: + downloaded  . skipped`);
  const CONCURRENCY = 8;
  let ok = 0, skip = 0, fail = 0;
  for (let i = 0; i < hashes.length; i += CONCURRENCY) {
    const batch = hashes.slice(i, i + CONCURRENCY);
    const results = await Promise.allSettled(batch.map(h => download(h, destDir)));
    for (const r of results) {
      if (r.status === 'fulfilled') {
        r.value.skipped ? skip++ : ok++;
      } else {
        console.error(`\nFAIL: ${r.reason.message}`);
        fail++;
      }
    }
  }
  console.log(`\n  done — ${ok} downloaded, ${skip} skipped, ${fail} failed`);
}

async function main() {
  const source = fs.readFileSync(DUNGEON_FILE, 'utf8');
  const itemHashes = extractHashes(source);
  console.log(`Found ${itemHashes.length} unique item/shiny hashes in dungeons.js`);
  console.log(`Fixed icon sprites: ${FIXED_ICONS.length}`);

  await downloadBatch(FIXED_ICONS, ICONS_DIR, 'icons');
  await downloadBatch(itemHashes, ITEMS_DIR, 'items');

  console.log('\nAll done. Next step: update src/ to use /items/ and /icons/ paths.');
}

main().catch(e => { console.error(e); process.exit(1); });
