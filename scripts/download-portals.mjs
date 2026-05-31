import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'portals');

const PORTALS = [
  // Tier 1
  { slug: 'pirate-cave',                   hash: 'OqzVQuc' },
  { slug: 'forest-maze',                   hash: 'm0AO506' },
  { slug: 'spider-den',                    hash: 'up93OlG' },
  { slug: 'forbidden-jungle',              hash: 'beQHm21' },
  { slug: 'the-hive',                      hash: '6WiS9zQ' },
  { slug: 'snake-pit',                     hash: 'Mhtm0aR' },
  { slug: 'sprite-world',                  hash: 'K0dJRrF' },
  { slug: 'cave-of-a-thousand-treasures',  hash: '6lgodhZ' },
  { slug: 'ancient-ruins',                 hash: '4gtP9OQ' },
  { slug: 'magic-woods',                   hash: 'nmLtcBD' },
  { slug: 'beachzone',                     hash: 'Ns31EKU' },
  // Tier 2
  { slug: 'candyland',                     hash: 'BKoSv6j' },
  { slug: 'undead-lair',                   hash: 'pR8Dgth' },
  { slug: 'puppet-masters-theatre',        hash: '6diBou4' },
  { slug: 'toxic-sewers',                  hash: '4Iv5apz' },
  { slug: 'cursed-library',                hash: '9nQ7nSz' },
  { slug: 'mad-lab',                       hash: 'x6dyxMp' },
  { slug: 'abyss-of-demons',               hash: 'wId2zPS' },
  { slug: 'manor-of-the-immortals',        hash: 'paEB8Qu' },
  { slug: 'haunted-cemetery',              hash: 'VB6hMsm' },
  { slug: 'davy-jones-locker',             hash: 'Hqmoe5U' },
  { slug: 'crawling-depths',               hash: 'V1rfmTa' },
  { slug: 'the-tavern',                    hash: 'DwtjA17' },
  { slug: 'moonlight-village',             hash: 'CHqjDCE' },
  // Tier 3
  { slug: 'the-machine',                   hash: 'Yhd1MCq' },
  { slug: 'inner-workings',                hash: 'v2Hm1wt' },
  { slug: 'ocean-trench',                  hash: '9GR3Ypw' },
  { slug: 'woodland-labyrinth',            hash: 'jyKYlZg' },
  { slug: 'deadwater-docks',               hash: 'baXW11C' },
  { slug: 'puppet-masters-encore',         hash: 'UhdCm8R' },
  { slug: 'cnidarian-reef',                hash: 'pXFqErd' },
  { slug: 'parasite-chambers',             hash: 'O43mDnf' },
  { slug: 'sulfurous-wetlands',            hash: '88fMxeA' },
  { slug: 'mountain-temple',               hash: 'fGgckZI' },
  { slug: 'lair-of-draconis',              hash: 'QjX8g5O' },
  { slug: 'tomb-of-the-ancients',          hash: 'E6a3nHx' },
  { slug: 'third-dimension',               hash: 'Z5CG76m' },
  { slug: 'lair-of-shaitan',               hash: 'px7FwlI' },
  { slug: 'secluded-thicket',              hash: 'IeOHusO' },
  { slug: 'high-tech-terror',              hash: '2SwppYx' },
  { slug: 'ice-citadel',                   hash: 'WDJobOf' },
  { slug: 'kogbold-steamworks',            hash: 'dohicSR' },
  // Tier 4
  { slug: 'the-nest',                      hash: 'FgpEOel' },
  { slug: 'cultist-hideout',               hash: 'on1ykYB' },
  { slug: 'fungal-cavern',                 hash: 'CLzxdEM' },
  { slug: 'crystal-cavern',                hash: 'Cd6RD9G' },
  { slug: 'spectral-penitentiary',         hash: 'o9yNqBT' },
  { slug: 'lost-halls',                    hash: 'DwuQOQQ' },
  { slug: 'the-void',                      hash: 'ijlxjJM' },
  { slug: 'the-shatters',                  hash: 'yA4tlry' },
  { slug: 'oryx-sanctuary',                hash: 'JGnMCv2' },
  { slug: 'heroic-undead-lair',            hash: 'z4UFKSh' },
  { slug: 'infernal-abyss',               hash: 'waeR46M' },
  { slug: 'plagued-nest',                  hash: 'l71FWP1' },
  { slug: 'advanced-kogbold',              hash: 'k8pLiJV' },
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

  for (const { slug, hash } of PORTALS) {
    const dest = path.join(OUT_DIR, `${slug}.png`);
    if (fs.existsSync(dest)) {
      console.log(`Skipping ${slug} (already exists)`);
      continue;
    }
    const url = `https://www.realmeye.com/s/a/img/wiki/i/${hash}.png`;
    process.stdout.write(`Downloading ${slug}... `);
    try {
      await download(url, dest);
      const size = fs.statSync(dest).size;
      console.log(`OK (${size} bytes)`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
    }
  }

  console.log('\nDone! Check public/portals/');
}

main();
