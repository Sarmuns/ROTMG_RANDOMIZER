export const DUNGEONS = [
  // ── Tier 1 — Beginner ───────────────────────────────────
  { name: 'Pirate Cave',                slug: 'pirate-cave',               hash: 'OqzVQuc', tier: 1, color: '#2B8CE8', bg: '#041020' },
  { name: 'Forest Maze',                slug: 'forest-maze',               hash: 'm0AO506', tier: 1, color: '#27AE60', bg: '#041408' },
  { name: 'Spider Den',                 slug: 'spider-den',                hash: 'up93OlG', tier: 1, color: '#A0522D', bg: '#180a04' },
  { name: 'Forbidden Jungle',           slug: 'forbidden-jungle',          hash: 'beQHm21', tier: 1, color: '#2E8B57', bg: '#041408' },
  { name: 'The Hive',                   slug: 'the-hive',                  hash: '6WiS9zQ', tier: 1, color: '#F5A623', bg: '#1a1004' },
  { name: 'Snake Pit',                  slug: 'snake-pit',                 hash: 'Mhtm0aR', tier: 1, color: '#5CB85C', bg: '#081408' },
  { name: 'Sprite World',               slug: 'sprite-world',              hash: 'K0dJRrF', tier: 1, color: '#9B59B6', bg: '#140820' },
  { name: 'Cave of a Thousand Treasures', slug: 'cave-of-a-thousand-treasures', hash: '6lgodhZ', tier: 1, color: '#FFD700', bg: '#181000' },
  { name: 'Ancient Ruins',              slug: 'ancient-ruins',             hash: '4gtP9OQ', tier: 1, color: '#95A5A6', bg: '#101214' },
  { name: 'Magic Woods',                slug: 'magic-woods',               hash: 'nmLtcBD', tier: 1, color: '#7DCEA0', bg: '#081410' },
  { name: 'Beachzone',                  slug: 'beachzone',                 hash: 'Ns31EKU', tier: 1, color: '#F0C060', bg: '#181400' },

  // ── Tier 2 — Intermediate ───────────────────────────────
  { name: 'Candyland Hunting Grounds',  slug: 'candyland',                 hash: 'BKoSv6j', tier: 2, color: '#FF69B4', bg: '#1a0818' },
  { name: 'Undead Lair',                slug: 'undead-lair',               hash: 'pR8Dgth', tier: 2, color: '#7F8C8D', bg: '#0e1418' },
  { name: "Puppet Master's Theatre",    slug: 'puppet-masters-theatre',    hash: '6diBou4', tier: 2, color: '#E91E63', bg: '#1a0818' },
  { name: 'Toxic Sewers',               slug: 'toxic-sewers',              hash: '4Iv5apz', tier: 2, color: '#8BC34A', bg: '#0e1a04' },
  { name: 'Cursed Library',             slug: 'cursed-library',            hash: '9nQ7nSz', tier: 2, color: '#B8860B', bg: '#140e00' },
  { name: 'Mad Lab',                    slug: 'mad-lab',                   hash: 'x6dyxMp', tier: 2, color: '#00BCD4', bg: '#00151a' },
  { name: 'Abyss of Demons',            slug: 'abyss-of-demons',           hash: 'wId2zPS', tier: 2, color: '#E74C3C', bg: '#1a0808' },
  { name: 'Manor of the Immortals',     slug: 'manor-of-the-immortals',    hash: 'paEB8Qu', tier: 2, color: '#BDC3C7', bg: '#141414' },
  { name: 'Haunted Cemetery',           slug: 'haunted-cemetery',          hash: 'VB6hMsm', tier: 2, color: '#90A4AE', bg: '#0e1014' },
  { name: "Davy Jones' Locker",         slug: 'davy-jones-locker',         hash: 'Hqmoe5U', tier: 2, color: '#1976D2', bg: '#040e1a' },
  { name: 'The Crawling Depths',        slug: 'crawling-depths',           hash: 'V1rfmTa', tier: 2, color: '#6D4C41', bg: '#100804' },
  { name: 'The Tavern',                 slug: 'the-tavern',                hash: 'DwtjA17', tier: 2, color: '#D4A017', bg: '#181000' },
  {
    name: 'Moonlight Village', slug: 'moonlight-village', hash: 'CHqjDCE', tier: 4, color: '#90CAF9', bg: '#080e18', exalt: true,
    whites: [
      {
        name: "Sage's Wakibiki", hash: '9HWUZWj',
        desc: "A worn plate from the Sage's armor. Its outwardly poor condition belies a strange, revitalizing effect still flowing within.",
        effect: '+20 DEF, +15 VIT, +15 WIS | On ability use: summons Friendly Spirit that slows enemies (150–200 dmg/s for 6s)',
      },
      {
        name: 'Ethereal Happi', hash: 'jvkUp5G',
        desc: 'A festival coat woven from thin, spiritual threads. It allows the user to skirt the spirit realm in search of their destination.',
        effect: '+15 DEF, +15 SPD | Summons Spirit that Curses enemies (150–200 dmg/s, 6s) | Focus: -25 SPD while shooting',
      },
      {
        name: 'Flowering Kimono', hash: 'Uqpyd1h',
        desc: 'A beautiful set of ornate ceremonial robes, filled with the energy of benevolent spirits from long ago.',
        effect: '+120 MP, +10 DEF, +7 SPD, +12 WIS | Spirit heals allies + attacks enemies (150 dmg/s) | Expires in pink blast healing 40 HP',
      },
      {
        name: 'Rain Maker', hash: 'WCoe58G',
        desc: 'A sodden artifact held by Genji to stir nearby moisture into a torrent of localized rain. Only the Sage can extract its full potential.',
        effect: '+100 MP, +6 DEX | Drains 68 MP/sec while active | 500–550 armor-piercing dmg/hit 4.5 tiles ahead at cursor',
      },
      {
        name: 'Taiko Drums', hash: 'pXEtNxl',
        desc: 'The drum whose every beat carries the energy and rhythm of Kaguya. A mortal sounding this mystical instrument bears both order and disarray.',
        effect: 'MP: 100 | +6 DEF, +6 DEX | Inspired to party (4.5 tiles, 6.5s) | Crescendo: Berserk + Blitz Rhythm / Adagio: 40 HP/s heal (shift to swap)',
      },
      {
        name: 'Elegant Parasol', hash: 'sitNKQs',
        desc: 'The ornate umbrella carried by the gracious Miko. It never goes out of fashion, regardless of the season.',
        effect: 'MP: 150 | +8 ATK, +8 VIT | Trail of Seasons: 14 paralyzing armor-pierce shots | Blossoming Power: dash + 600 dmg AoE (4 dashes max)',
      },
      {
        name: 'Makakoyumi', hash: 'DbmAr9L', shinyHash: 'Z0fI4iq',
        desc: 'A bow believed to have only been fired in dissent against the heavens. In retribution, its wielders are cursed with shackles of divine light.',
        effect: '800 dmg piercing shot (33% RoF) + lightning bolts 20–40 armor-pierce (200% RoF) | Inflicts Slowed while shooting',
      },
      {
        name: 'Tezutsu Hanabi', hash: '6IUePZI',
        desc: 'These fireworks are a mere fraction of Umi\'s spectacular stockpile. Locals believed they held the power to ward off evil spirits, whilst bringing peace and prosperity.',
        effect: 'MP: 100 | +50 HP, +5 VIT | Light Show: orbiting spirit attacks enemies (150–200 dmg) | Fireworks Stockpile: strengthens nearby spirits',
      },
      {
        name: 'Kagenohikari', hash: '2YYiVTu',
        desc: 'An ethereal lantern charged with the hopes and memories of bygone souls. Its light seeks to guide and protect those still dwelling within the mortal plane.',
        effect: '+100 HP, +100 MP, +5 VIT, +5 WIS | -10% MP ability cost | Summons random Spirit: heal (pink) / slow (blue) / curse (yellow) at level 2',
      },
      {
        name: 'Concentrated Soul Fire', hash: 'KSeqLQJ',
        desc: 'Pure soul energy that burns bright in the fires of the forge.',
        effect: 'Forge material — upgrades 3 UT weapons (Wand of the Bulwark, Spirit Dagger, Spirit Staff) with entirely new functions',
      },
    ],
  },

  // ── Tier 3 — Advanced ───────────────────────────────────
  { name: 'The Machine',                slug: 'the-machine',               hash: 'Yhd1MCq', tier: 3, color: '#546E7A', bg: '#080e10' },
  { name: 'The Inner Workings',         slug: 'inner-workings',            hash: 'v2Hm1wt', tier: 3, color: '#455A64', bg: '#060c0e' },
  { name: 'Ocean Trench',               slug: 'ocean-trench',              hash: '9GR3Ypw', tier: 3, color: '#1565C0', bg: '#040e1a' },
  { name: 'Woodland Labyrinth',         slug: 'woodland-labyrinth',        hash: 'jyKYlZg', tier: 3, color: '#558B2F', bg: '#081404' },
  { name: 'Deadwater Docks',            slug: 'deadwater-docks',           hash: 'baXW11C', tier: 3, color: '#546E7A', bg: '#080e10' },
  { name: "Puppet Master's Encore",     slug: 'puppet-masters-encore',     hash: 'UhdCm8R', tier: 3, color: '#AD1457', bg: '#180410' },
  { name: 'Cnidarian Reef',             slug: 'cnidarian-reef',            hash: 'pXFqErd', tier: 3, color: '#00ACC1', bg: '#001418' },
  { name: 'Parasite Chambers',          slug: 'parasite-chambers',         hash: 'O43mDnf', tier: 3, color: '#9E9D24', bg: '#101000' },
  { name: 'Sulfurous Wetlands',         slug: 'sulfurous-wetlands',        hash: '88fMxeA', tier: 3, color: '#F9A825', bg: '#181000' },
  { name: 'Mountain Temple',            slug: 'mountain-temple',           hash: 'fGgckZI', tier: 3, color: '#8D6E63', bg: '#100c0a' },
  { name: 'Lair of Draconis',           slug: 'lair-of-draconis',          hash: 'QjX8g5O', tier: 3, color: '#FF7043', bg: '#1a0a04' },
  { name: 'Tomb of the Ancients',       slug: 'tomb-of-the-ancients',      hash: 'E6a3nHx', tier: 3, color: '#F39C12', bg: '#1a0e00' },
  { name: 'The Third Dimension',        slug: 'third-dimension',           hash: 'Z5CG76m', tier: 3, color: '#7B1FA2', bg: '#0e0414' },
  { name: 'Lair of Shaitan',            slug: 'lair-of-shaitan',           hash: 'px7FwlI', tier: 3, color: '#B71C1C', bg: '#1a0404' },
  {
    name: 'Secluded Thicket', slug: 'secluded-thicket', hash: 'IeOHusO', tier: 3, color: '#388E3C', bg: '#041408',
    whites: [
      {
        name: "Tezcacoatl's Tail", hash: 'IFRn3wz', shinyHash: 'QDVWnxf',
        desc: 'Adult male basilisks are apex predators. At full maturity their tails gain the unique ability to release piercing acid from the tip.',
        effect: '200–235 dmg (×2) | 33% RoF | Armor Pierce | 3rd highest damage-per-shot among all staves',
      },
      {
        name: 'Sealed Crystal Skull', hash: 'gRjcZBA', shinyHash: 'TxGHPxy',
        desc: 'An undamaged version of a well known archaeological artifact, radiating a potent dark energy. This rare find is coveted by many explorers.',
        effect: 'MP: 100 | +50 HP, +4 DEX, +4 VIT | Summons Sealed Crystal undead (5s): 3×195–280 dmg armor-pierce, 2% lifesteal',
      },
      {
        name: 'Reikoku', hash: 'mxwPFnh',
        desc: 'First summer storm cloud / Inflicting a thousand cuts / Brilliance, then ash.',
        effect: '80–90 dmg (×2, 0° arc) | Pierce + Armor Pierce | Part of Raijin Disciple Set',
      },
      {
        name: 'Daybreak Chakram', hash: 'tl3pWVQ',
        desc: 'Circle of sunlight / Empowers a fragile bloom / And scours the world.',
        effect: 'Hold: Armored (+10 DEF), drains 20 MP/s | Release MP: 95 | 3×400–600 dmg (DEF scales), armor-pierce, pass cover | Part of Raijin Disciple Set',
      },
      {
        name: 'Hirejou Tenne', hash: '8emGR5B',
        desc: 'Scarf held to the breeze / Commanding a storm\'s vengeance / Hoping for silence.',
        effect: '+9 DEF, +8 ATK, +8 DEX | Reactive proc: +5 DEF for 6s when using ability with Reikoku equipped (10s CD)',
      },
      {
        name: 'Heavenly Magatama', hash: 'N9FPVjO',
        desc: 'Spiraling treasure / Prayer beads for the downpour / Coiled in grateful hands.',
        effect: '+80 HP, +6 DEF, +5 VIT | Part of Raijin Disciple Set — solid defensive ring for rushing',
      },
    ],
  },
  { name: 'High Tech Terror',           slug: 'high-tech-terror',          hash: '2SwppYx', tier: 3, color: '#00BFA5', bg: '#001814' },
  { name: 'Ice Citadel',                slug: 'ice-citadel',               hash: 'WDJobOf', tier: 3, color: '#80DEEA', bg: '#081418', exalt: true },
  {
    name: 'Kogbold Steamworks', slug: 'kogbold-steamworks', hash: 'dohicSR', tier: 4, color: '#FF8F00', bg: '#1a1000', exalt: true,
    whites: [
      {
        name: 'Precision Cog', hash: 'VHJV63D',
        desc: 'A machined gear crafted down to immaculate levels of specificity.',
        effect: 'Enchanting artifact — 50% chance of consumption | Boosts ATK, Tradeoff, and Kogbold-specific awakened mods',
      },
      {
        name: 'Overclocking Amulet', hash: 'O15RAvc', shinyHash: 'y92PV4j',
        desc: 'Placing this trinket into an appropriate slot found on Steamworks machines activates their overclock, drastically increasing output.',
        effect: '-8 DEF, +8 ATK, +8 DEX | Highest unconditional DPS ring — trades all survivability for pure offense',
      },
      {
        name: 'Steam Pipe', hash: 'LFkrGDa', shinyHash: 'zF81nD5',
        desc: 'Fashioned from the boiler of a steam generator, this staff projects its scalding vapors towards a target, cooking them alive.',
        effect: '+25 MP | 2 piercing water shots + 2 armor-piercing fire shots (65–85 dmg each), all decelerating | Silent on fire',
      },
      {
        name: 'Chain Dagger', hash: 'eZzC5ci', shinyHash: 'PiR9IOW',
        desc: 'Of all the tools found on Kogbold excavation bots, none is more versatile than the KI225 Chain Cutter. Useful for cutting through stone to flesh.',
        effect: '110–130 dmg | 80% RoF | Inflicts Bleeding (4.5s, 50 bleed/tick) | Proc: +DEX boost while shooting',
      },
      {
        name: 'Laser Pointer', hash: 'UpZbVW1', shinyHash: '4vY28w4',
        desc: 'Early prototype versions of the KI470 Laser pointing device came with no inbuilt limiter on their power output.',
        effect: 'Primary: 95–130 dmg, 150% RoF, armor-pierce | Secondary: 50–75 dmg, piercing | Dominates close-range vs high-DEF enemies',
      },
      {
        name: 'Kogbold Cower Shield', hash: 'hrjO0h8',
        desc: 'A large sheet of plating intended as a blast shield. When confronted with intruders, the more cowardly Kogbolds use them to protect themselves while fleeing.',
        effect: 'MP: 120 | +5 SPD, +5 VIT | 70% dmg reduction 5s | +15/+20 DEF to self+allies | 5 armor-pierce shots on use',
      },
      {
        name: 'Scepter of Rust', hash: '89fuCh7', shinyHash: 'KowXxLw',
        desc: 'This electrical rod is used to remove rust through electrolysis. When used on living creatures, the shock causes muscles to tense and circuits to go haywire.',
        effect: 'MP: 75 | +7 WIS | 300 dmg | Inflicts Weak (4s) on up to 3 enemies | Shockblast: 90 dmg to 3 nearby targets per cast',
      },
      {
        name: 'Brain Cube', hash: 'WTPtfYd', shinyHash: 'f187Bgj',
        desc: 'The oldest forms of automatic computing built by the Kogbolds were a far cry from the self-improving artificial intelligence of the modern Core designs.',
        effect: 'MP: 135 | +50 MP, +6 DEX | Summons undead: 4 expanding explosions (340→255 dmg each), armor-pierce, 10% lifesteal',
      },
      {
        name: 'Kogbold Enhancement Core', hash: 'AHGKQwy', shinyHash: 'isUOrSE',
        desc: 'A well machined object said to give the Kogbolds their strength.',
        effect: 'Forge material — upgrades 7 UT weapons into enhanced versions (Doom Bow, Void Blade, Socket Blade, and more)',
      },
    ],
  },

  // ── Tier 4 — Endgame ────────────────────────────────────
  {
    name: 'The Nest', slug: 'the-nest', hash: 'FgpEOel', tier: 3, color: '#FFC107', bg: '#1a1004', exalt: true,
    whites: [
      {
        name: "Queen's Stinger", hash: 'Bjlfsca', shinyHash: '2HFzK0O',
        desc: "The blade of this dagger was once the enormous Killer Bee Queen's stinger. It remains exceptionally sharp, cutting through even the heaviest armor.",
        effect: '150–170 dmg | 105% RoF | Pierce + Armor Pierce — best anti-armor dagger in the game',
      },
      {
        name: 'Hivemaster Helm', hash: 'rlxhfqA', shinyHash: 'ZJYUIky',
        desc: 'A nefarious helm combining pheromones and Killer Honey to captivate Killer Bees into servitude.',
        effect: 'MP: 80 | +6 DEF, +6 SPD | Berserk to party (4-tile radius) + 3 combat bees (120 dmg) | Red bee inflicts Curse',
      },
      {
        name: "Beekeeper's Flamethrower", hash: 'f1YZVsv', shinyHash: 'rzbu1sw',
        desc: 'Equipped with a mechanical combustion technology few may understand, this weapon projects flames boasting temperatures capable of melting targets.',
        effect: '85–125 dmg (×3) | Armor Pierce + Pass Cover | Slow shots — similar to Lumiaire but for Warriors',
      },
      {
        name: 'Hivemind Mace', hash: 'bFzLQ4N',
        desc: 'The guiding power of the realm\'s pollinating drones. Even when stolen from their proper queen, it can still briefly influence their minds to service.',
        effect: 'MP: 130 | +4 DEF, +4 DEX | 3×240–310 dmg piercing shots | Slow speed (6.5 tiles/s), passes cover | Summons orbiting bee projectiles',
      },
      {
        name: 'Combcutter Kunai', hash: 'XhWdsUn',
        desc: "Shaped from the stingers of mutant beehemoths, these blades are sealed away until the very moment of combat and brandished by the finest of shinobee.",
        effect: '+60 MP, -10 SPD | Hold: +4 ATK, Damaging, fires 60–80 dmg kunai | Release: 800–1200 dmg piercing kunai | Scales with VIT',
      },
      {
        name: "Swarmlord's Sigil", hash: 'lLk3JSU', shinyHash: 'lyKnmLE',
        desc: 'Fashioned by the Beekeeper, this pendant allows the wearer to command the forces of the nest, directing swarms of bees to attack enemies.',
        effect: '+4 DEX, +4 ATK | MP: 110 | Bee Form (full meter): +30 DEX, +25 ATK, -50% weapon range for 7.6s | Equivalent to 3.5 Overclocking Amulets',
      },
      {
        name: 'Blue Beehemoth Armor', hash: 'cV2muQj',
        desc: 'Chitin armor fashioned from the exoskeleton of a blue Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.',
        effect: '+18 DEF, +5 SPD, +5 WIS | Living Hive proc: releases bees when hit for 40+ dmg (2s CD)',
      },
      {
        name: 'Red Beehemoth Armor', hash: 'InPgMzU',
        desc: 'Chitin armor fashioned from the exoskeleton of a red Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.',
        effect: '+18 DEF, +5 SPD, +8 VIT | Living Hive proc: releases bees when hit for 40+ dmg (2s CD)',
      },
      {
        name: 'Yellow Beehemoth Armor', hash: 'lZCU4nx',
        desc: 'Chitin armor fashioned from the exoskeleton of a yellow Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.',
        effect: '+18 DEF, +5 SPD, +3 DEX | Living Hive proc: releases bees when hit for 40+ dmg (2s CD)',
      },
    ],
  },
  {
    name: 'Cultist Hideout', slug: 'cultist-hideout', hash: 'on1ykYB', tier: 3, color: '#D32F2F', bg: '#1a0808', exalt: true,
    whites: [
      {
        name: 'Burial Blades', hash: 'wH72iVT', shinyHash: 'GZzvz1B',
        desc: 'Jagged obsidian and smooth malachite blades inscribed with runes. A eulogy for Phaedra and Valus, lost trying to seal a great evil.',
        effect: '75–125 dmg (×2) | Pierce + Armor Pierce | Converging shots',
      },
      {
        name: 'Staff of Unholy Sacrifice', hash: 'LVY6EyC', shinyHash: '9sXBLSh',
        desc: 'A commanding staff used by vile cult leaders. Its power manifested through countless sacrifices to the demon Molek.',
        effect: '155–185 dmg (×4, 13° arc) | 55% RoF | Piercing | 8 tiles range',
      },
      {
        name: 'Skull of Corrupted Souls', hash: 'wXEiGHE', shinyHash: '0o3K1A1',
        desc: 'The cursed skull of a corrupted mind. Good intentions can go horribly wrong.',
        effect: 'MP: 100 | +66 HP, +6 VIT | Summons undead (5s): armor-piercing Curse shots with 5% lifesteal',
      },
      {
        name: 'Ritual Robe', hash: 'ymPfzOk', shinyHash: 'InD2j6N',
        desc: 'A thin hood with a faded golden lace worn for sacrificial ceremonies. It has an aura of evil around it.',
        effect: '+12 DEF, +5 ATK, +20 WIS, +50 MP | Best WIS bonus in game — exceptional with WIS-scaling abilities',
      },
      {
        name: 'Bloodshed Ring', hash: '1485mxJ',
        desc: 'A seemingly shattered ring that keeps itself together with an unknown magnetic force. It only stays together on the finger of a true killer.',
        effect: '+110 HP, +6 DEF, +8 WIS | Balanced defensive/WIS ring — ideal for Sorcerer, Necromancer, and Paladin',
      },
      {
        name: 'Vial of Pure Darkness', hash: 'j0RaAEh',
        desc: 'An oddly heavy vial found within the undergrounds of the Lost Halls. It is said to contain the embodiment of Evil itself.',
        effect: 'Consumable — use after defeating Marble Colossus to open The Void portal | Grants +1 DEF Exaltation to all players in the dungeon',
      },
    ],
  },
  {
    name: 'Fungal Cavern', slug: 'fungal-cavern', hash: 'CLzxdEM', tier: 3, color: '#66BB6A', bg: '#081408', exalt: true,
    whites: [
      {
        name: 'Quartz Cutter', hash: 'deiqLkX',
        desc: 'Though its composition is merely a sharp crystal embedded in a rock, this naturally formed blade glistens with light.',
        effect: '80–95 dmg (×3) | 80% RoF | Wavy piercing shots | Part of Crystal Kunoichi Set',
      },
      {
        name: 'Crystalline Kunai', hash: '6MqqxEs',
        desc: 'These kunai were chiseled as an experimental weapon by the mineral monsters lurking far beneath the realm\'s surface.',
        effect: 'MP: 100 | +4 VIT | Hold: +15 ATK, Speedy | Release: 3×400–500 dmg armor-pierce shots | Reactive: fires kunai on being hit',
      },
      {
        name: 'Luminous Armor', hash: 'J1iS7QS',
        desc: 'A devastating fracture tarnished its raw defensive abilities, but the Crystal Entity\'s dubious blessing still aids the wearer.',
        effect: '+200 HP, +5 SPD, +5 VIT | Zero DEF — trade all defense for massive HP and mobility',
      },
      {
        name: 'Radiant Heart', hash: 'hxd7YhX',
        desc: 'What serves as the life support for all artificial creatures constructed by the Crystal Entity is also capable of bestowing strength to organic life.',
        effect: '+100 HP, +5 ATK | Part of Crystal Kunoichi Set — trades 4 DEF of Ring of the Pyramid for +1 ATK',
      },
      {
        name: 'Ring of Decades', hash: 'YfL2dh5', shinyHash: 'CFk0JiB',
        desc: 'Cut from a fallen star, a deep purple emanating an unearthly glow, hinting at the power fused within.',
        effect: '+160 HP | Premier HP ring — widely valued for survivability',
      },
      {
        name: 'Crystallized Worm Spellblade', hash: 'gm0isXX',
        desc: 'The worms of the Crystal Caverns survive indefinitely so long as their heads remain intact. Affixing this worm\'s head onto a staff prevents it from regenerating...',
        effect: '2 piercing head shots (40 dmg each) + 2 tail shots (75–95 dmg) | 100% RoF | Beats T14 Staff when all shots connect',
      },
      {
        name: 'Crystal Shield', hash: '1ue3Xiu',
        desc: 'An ornately decorated buckler made from crystalline stone. Too frail to swing, but it can grow and mantle its wielder in heavy crystal armor.',
        effect: '+10 DEF, +40 HP, -10 SPD | Hold: Armored (40 MP/s) | Release: 5×250–350 dmg | Procs: retaliatory shot + 10 HP heal on 30+ dmg',
      },
      {
        name: 'Sporous Spray Spell', hash: '72IXlhM', shinyHash: '4uW0Dag',
        desc: 'An ancient druidic spell that invokes earth spirits into furnishing the soil with a noxious, deadly skullshroom colony.',
        effect: 'MP: 110 | Summons Deadly Mushroom (4.8s): 800 dmg every 1.2s in 3-tile radius (WIS scales) | Multiple mushrooms stack',
      },
      {
        name: 'Tome of the Mushroom Tribes', hash: 'YShpFqv', shinyHash: 'jez0ARb',
        desc: 'A long-lost druid\'s tome that catalogs medicinal mushrooms. Many pocket spaces contain spore samples, which can be made fully grown through incantations.',
        effect: 'MP: 130 | +6 DEX, +6 SPD | Creates stationary healing mushroom: 90 HP/s to up to 15 players within 6 tiles (6s duration)',
      },
      {
        name: 'Cave Dweller Trap', hash: 'J0lgclR', shinyHash: 'EiYJfvq',
      },
    ],
  },
  {
    name: 'Crystal Cavern', slug: 'crystal-cavern', hash: 'Cd6RD9G', tier: 3, color: '#42A5F5', bg: '#040e1a', exalt: true,
    whites: [
      {
        name: 'Quartz Cutter', hash: 'deiqLkX',
        desc: 'Though its composition is merely a sharp crystal embedded in a rock, this naturally formed blade glistens with light.',
        effect: '80–95 dmg (×3) | 80% RoF | Wavy piercing shots | Part of Crystal Kunoichi Set',
      },
      {
        name: 'Crystalline Kunai', hash: '6MqqxEs',
        desc: 'These kunai were chiseled as an experimental weapon by the mineral monsters lurking far beneath the realm\'s surface.',
        effect: 'MP: 100 | +4 VIT | Hold: +15 ATK, Speedy | Release: 3×400–500 dmg armor-pierce shots | Reactive: fires kunai on being hit',
      },
      {
        name: 'Luminous Armor', hash: 'J1iS7QS',
        desc: 'A devastating fracture tarnished its raw defensive abilities, but the Crystal Entity\'s dubious blessing still aids the wearer.',
        effect: '+200 HP, +5 SPD, +5 VIT | Zero DEF — trade all defense for massive HP and mobility',
      },
      {
        name: 'Radiant Heart', hash: 'hxd7YhX',
        desc: 'What serves as the life support for all artificial creatures constructed by the Crystal Entity is also capable of bestowing strength to organic life.',
        effect: '+100 HP, +5 ATK | Part of Crystal Kunoichi Set — trades 4 DEF of Ring of the Pyramid for +1 ATK',
      },
      {
        name: 'Ring of Decades', hash: 'YfL2dh5', shinyHash: 'CFk0JiB',
        desc: 'Cut from a fallen star, a deep purple emanating an unearthly glow, hinting at the power fused within.',
        effect: '+160 HP | Premier HP ring — widely valued for survivability',
      },
      {
        name: 'Irradiance Sheath', hash: 'RgNhnD1',
        desc: 'Believed to be some kind of artificial organ, this sheath embeds the weapon in a solid crystal coating before violently fracturing into shrapnel when drawn.',
        effect: '+40 HP, +5 ATK | MP: 130 | 4×500 dmg wavy piercing shots | Dash (3 max): 1200 trail dmg + stacking ATK% bonus per dash',
      },
      {
        name: 'Fractal Blades', hash: 'xh99uQc', shinyHash: 'SsqaghD',
      },
      {
        name: 'Cloak of Refraction', hash: 'P4v3VhO', shinyHash: 'ym3CSRa',
      },
      {
        name: 'Echoes Prism', hash: 'Wh0Uqt5',
        desc: 'A fragmented prism constantly mending its cracks and refracturing. When agitated, it ejects volatile shards until each fragment spirals back into equilibrium.',
        effect: '+40 HP, +4 DEF, +4 DEX | MP: 110 | Summons Echo Shards (3 max, 15s): armor-piercing shots + decoys enemies',
      },
      {
        name: 'Fractured Gemstone Wakizashi', hash: 'd6dBKvS', shinyHash: '3Oo8WA0',
      },
      {
        name: 'Star of Enlightenment', hash: '98qG4Er', shinyHash: 'UneFotS',
      },
      {
        name: 'Crystallised Mist', hash: 'TeN17x2',
        desc: 'This strange trinket creates a cloud of crystalline particles rendering anyone inside invisible.',
        effect: '+60 HP, +6 DEF, +8 SPD | Reactive: 8s invisibility on taking 50+ dmg (40s CD) | Ideal for rushing classes',
      },
      {
        name: 'Crystalline Sigil', hash: '3vhAavw',
        desc: 'An incredibly complex and durable crystalline structure appears on this pendant where a druid might expect the representation of an animal.',
        effect: 'MP: 105 | +5 DEF, +5 VIT | Golem Form (full meter): +30 ATK, +45 DEF, 20 HP/s heal | 680–720 dmg piercing shots',
      },
    ],
  },
  {
    name: 'Spectral Penitentiary', slug: 'spectral-penitentiary', hash: 'o9yNqBT', tier: 4, color: '#7E57C2', bg: '#0a0818', exalt: true,
    whites: [
      {
        name: 'Tools of the Tarnished', hash: 'bDXgEeK', shinyHash: 'jHP6T83',
        desc: "Two of Groundskeeper Gretch's most coveted tools, tainted by a powerful curse that draws out the life essence of its user to maintain their finesse.",
        effect: 'DEX scales with VIT | Sickle: 65–75 dmg, 150% RoF, pierce | Hammer: 290–340 dmg, 33% RoF, armor-pierce',
      },
      {
        name: 'Wretched Rags', hash: '6xvCEdy', shinyHash: 'TTDj1ac',
        desc: 'A tattered piece of cloth crudely fashioned into a robe, barely capable of covering its wearer. What it lacks in physical durability is made up with a thick barrier of mana.',
        effect: '+10 DEF, +5 DEX, +10 WIS | -50% HP, +100% HP equal to MP | Converts max MP into max HP — best for high-MP classes',
      },
      {
        name: 'Sinister Syringes', hash: '9FMCBfU',
        desc: 'A chilling metal container filled with miscellaneous medical instruments coated in poison.',
        effect: '+5 DEX, +10 VIT | Sharps: 20–30 dmg + Bleeding (80 dmg/s, 3s), armor-pierce | Stitches: heals 12 HP/shot when below 90% HP',
      },
      {
        name: 'Cackling Straitjacket', hash: 'TrBD6RC', shinyHash: 'SAXsQ4d',
        desc: 'A tightly-woven garment used to restrain the mentally insane. The echoed laughs of its past users can be faintly heard while wearing it.',
        effect: '+20 ATK, -5 DEX, +15 DEF, -5 SPD | Generalized Insanity: 1% chance on shoot for random stat boost, HP/MP boost, Healing, or Hexed',
      },
      {
        name: 'Command Cornea', hash: '8rmwaES',
        desc: 'The incredibly thick cornea taken from the eye of Overseer Oculon. It bears an immense hunger for magical energy, and will devour its user\'s entire mana pool in the blink of an eye.',
        effect: 'MP: 200 | +5 DEF, +10 WIS | 1000 impact + 1000 DoT over 3s in 5.5-tile radius | Curses enemies | Scales heavily with MP investment',
      },
      {
        name: 'Ocular Entrapment', hash: '3gEiYPi', shinyHash: 'KkF5x9W',
        desc: 'A questionably sentient artifact smuggled from the Penitentiary\'s administration branch. Repeatedly irritating the summoned entity causes it to spew corrosive tears.',
        effect: 'MP: 80 | +5 DEX, +5 WIS | Throws eye (10s): 1200 dmg + Slowed 3s when repeatedly targeted (2s CD)',
      },
      {
        name: 'Overwhelming Axehead', hash: 'n85clBd',
        desc: 'An extremely heavy axehead salvaged from Griefkeeper Zole\'s bulky choice of weaponry. Throwing it takes tremendous effort, but it obliterates everything in its path.',
        effect: 'MP: 150 | +5 ATK, +5 VIT | Giant projectile (7 hitboxes): 325–525 dmg, pierce, armor-pierce, pass cover | -50 MP to self for 5s',
      },
      {
        name: 'Motivational Megaphone', hash: 'tPfgva5', shinyHash: '20Fctvu',
        desc: 'A faintly magical device used by Griefkeeper Zole to amplify his voice throughout the Penitentiary. Speaking into it warps any encouragement into toxic insults.',
        effect: 'MP: 100 | +5 ATK, +5 VIT | 800 dmg AoE at cursor | Berserk to allies (4 tiles, 4s) | Self: Healing 3s when hitting enemy',
      },
      {
        name: 'Damnation', hash: 'YCLDKsZ', shinyHash: 'XkW0Sb5',
        desc: 'An uncannily heavy iron ball and chain utilized by Murcian himself, burdened by the weight of countless souls that met their fate at the hands of the warden.',
        effect: '-60 HP, +10 DEF, -6 SPD | Boomeranging 1000–1200 dmg shot | Above 99% HP: VIT Down | Below 66% HP: Armored + +10 ATK',
      },
    ],
  },
  {
    name: 'Lost Halls', slug: 'lost-halls', hash: 'DwuQOQQ', tier: 4, color: '#9C27B0', bg: '#140a1a', exalt: true,
    whites: [
      {
        name: 'Sword of the Colossus', hash: '6TuUqFM', shinyHash: '3fMJH01',
        desc: 'A sword with an impossibly sharp edge. It has been designed with holy magic to slash like no other blade.',
        effect: '280–295 dmg | Curving shot — requires standing on target for consistent hits | Top-tier sword',
      },
      {
        name: 'Marble Seal', hash: 'Hq1NeMV', shinyHash: 'oo8EkVm',
        desc: "A seal made from the Marble Colossus' head. The power of a pure and mighty paladin still remains within.",
        effect: 'MP: 135 | +5 DEF | Summons Eye of Marble: Armored + Damaging to nearby allies for 4.5s (3-tile radius)',
      },
      {
        name: 'Breastplate of New Life', hash: 'Qp0KQbU', shinyHash: 'hJ3GHuW',
        desc: 'A fine sheet of marble charged with the same energy that powers the Marble Colossus. What it lacks in durability, it makes up for with a life-breathing aura.',
        effect: '+160 HP, +14 DEF | High HP heavy armor — ideal for endgame dungeons',
      },
      {
        name: 'Magical Lodestone', hash: 'TUmg1Vk',
        desc: 'The source of power for the Marble Colossus, found within his core. Intended to give life to golems, but benefits the living as well.',
        effect: '+30 HP, +6 ATK, +6 DEF, +6 SPD, +6 DEX | Tied 3rd best DPS ring in the game',
      },
      {
        name: 'Carved Golem Remains', hash: 'i9BwK10',
        desc: 'A makeshift dagger hastily crafted from the debris of a fallen golem. It may be blunt, but it is also very lightweight.',
        effect: '155–170 dmg | 105% RoF | Extended range over standard daggers | Part of Lost Golem Set',
      },
      {
        name: 'Brain of the Golem', hash: 'fTPcj1C',
        desc: 'A fragment of a brain from a lesser golem. Its strength indicates it came from a Golem of Anger.',
        effect: 'MP: 65 | Long-duration decoy (7s) that explodes dealing Dazed 2s to nearby enemies',
      },
      {
        name: 'Golem Garments', hash: 'f53gvJM',
        desc: 'Formed of the tissue surrounding a golem core.',
        effect: '+15 DEF, +8 ATK, +7 VIT | Offensive ST robe — high ATK at cost of DEF',
      },
      {
        name: 'Rusty Cuffs', hash: 'AfwHPCC',
        desc: 'Used to bind aggressive golems. Considering they are no longer attached, they do not appear to have been very effective.',
        effect: '+70 HP, +5 DEF, +5 SPD | Balanced survivability ring with broad class utility',
      },
    ],
  },
  {
    name: 'The Void', slug: 'the-void', hash: 'ijlxjJM', tier: 4, color: '#7B1FA2', bg: '#0a0414', exalt: true,
    whites: [
      {
        name: 'Bow of the Void', hash: '4l5NPeH', shinyHash: 'oxDKEp3',
        desc: 'Every shot that hits a target frees the soul of a forgotten hero. Every shot that misses is trapped for eternity.',
        effect: '180–255 dmg | Piercing, wavy trajectory | 105% RoF | Shorter range than tiered bows',
      },
      {
        name: 'Quiver of Shadows', hash: '3ItMVWT', shinyHash: 'ILAI4Xn',
        desc: 'A mysterious quiver formed of pure evil and dark matter. Its ethereal existence creates a small implosion when drawn.',
        effect: 'MP: 80 | +6 DEF, -2 SPD | 6×400–500 dmg | Pierce + Armor Pierce + Pass Cover',
      },
      {
        name: 'Armor of Nil', hash: 'l7uFrzx', shinyHash: 'gvGEvK5',
        desc: 'This armor does not deflect projectiles like most materials known to man. It absorbs and engulfs them, sending them to a new plane of reality.',
        effect: '+30 DEF, -5 SPD | Reactive proc: Planar Absorption — 15% damage reduction for 5s on hit (10s CD)',
      },
      {
        name: 'Sourcestone', hash: 'L5sYl5P',
        desc: '"Unknown." — A crystallized fragment of void energy, pulsing with life and arcane power.',
        effect: '+110 HP, +110 MP, +6 SPD | Proc: +60 HP on ability use / +60 MP on taking damage (8s CD)',
      },
      {
        name: 'Omnipotence Ring', hash: 'ObMdsMS', shinyHash: 'vZJaKct',
        desc: 'An unfathomable amount of strength pulses through this ring. Only the most righteous mortals can touch it and live.',
        effect: '+90 HP, +90 MP, +4 ATK, +5 DEF, +5 SPD, +4 DEX, +6 VIT, +6 WIS | Premier all-rounder endgame ring',
      },
    ],
  },
  {
    name: 'The Shatters', slug: 'the-shatters', hash: 'yA4tlry', tier: 4, color: '#E0E0E0', bg: '#141418', exalt: true,
    whites: [
      {
        name: 'Valor', hash: 'bLCPbmU', shinyHash: 'awHS94a',
        desc: 'Exceedingly large and challenging to handle, this titanic blade embodies the stoic might of its true owner.',
        effect: '480–555 dmg | +5 SPD | Piercing | Reactive: -10 ATK for 1s while shooting',
      },
      {
        name: "Vanguard's Visage", hash: 'WVxIOvi', shinyHash: 'ebb9wRZ',
        desc: 'A dreadfully heavy barbute, prominently featuring inward curving horns. Such a trait has been considered taboo for eons, further marking the age of this design.',
        effect: 'MP: 100 | +9 DEF, +4 ATK, +4 VIT | Berserk to party (3s) + 24 sword shots × 150 dmg armor-pierce at cursor',
      },
      {
        name: "Sentinel's Sidearm", hash: '8MAEM43', shinyHash: 'MRTr0XS',
        desc: 'Use of magical weapons is typically reserved for the king\'s mage units. For a swordsman to receive such a fine piece of craft was considered a great honor.',
        effect: 'MP: 100 | +5 ATK, +5 DEX | 3 tracking swords × 1500 dmg | Exposes + armor-pierce + pierce — fires toward nearest enemy',
      },
      {
        name: 'Bracer of the Guardian', hash: 'r1IZ5AY', shinyHash: 'ULnTeIr',
        desc: 'A colossal gauntlet of masterful composition. Its sheer size is disproportionate for most warriors, only able to be worn on one\'s forearm as a bracer.',
        effect: '+90 HP, +80 MP, +9 DEF, +4 ATK | Near-direct upgrade to Ring of the Pyramid',
      },
      {
        name: 'Vest of Abandoned Shadows', hash: 'VEsxfR3', shinyHash: 'z8ibBCs',
        desc: 'Formerly a nobleman\'s uniform, now workshopped by the court magician into a gloomy coat befitting of his accursed company.',
        effect: '+50 HP, +15 DEF, +15 VIT | Reactive: Armored for 4s while shooting in combat (10s CD)',
      },
      {
        name: 'Dusky Catalyst', hash: 'RapQgYB',
        desc: 'An untempered casting wand brought forth to tap into distant powers, but an imbalance rendered it too unreliable for most to dare use.',
        effect: '100–186 dmg | 150% RoF | Piercing, wavy | -5% ability cost | Reactive: -10 WIS for 1s while shooting in combat',
      },
      {
        name: 'Primal Arcana', hash: 'tXII6S1', shinyHash: 'umlx4D0',
        desc: 'This deeply profaned magitech haunts those who bear it with distant, unending screams. One\'s conscience must be far beyond reason to use its tremendous powers.',
        effect: 'MP: 105 | +8 DEX | 2 armor-piercing Curse shots per 0.2s + 33% third shot | 2400–3200 total dmg | Best passive DPS orb',
      },
      {
        name: 'Polarity Poison', hash: 'h1s0g17',
        desc: 'A perfectly concentrated blend of elemental forces, primed to diverge into an explosive result if the seal is ever broken.',
        effect: 'MP: 120 | +8 WIS | Primary bomb: 1250 DoT over 10s | 13 secondary bombs: 450 impact + Slowed 3s in X pattern',
      },
      {
        name: 'The Twilight Gemstone', hash: 'TYdYHrv', shinyHash: 'AmAwhWX',
        desc: 'A peculiar stone, tremendously heavy for its size and seemingly not of this world. Its very presence in the realm raises a great deal more questions than answers.',
        effect: '+110 MP, +8 DEF, +5 SPD, +5 WIS | Reduces ability MP cost by 20% | Best MP-reduction ring in the game',
      },
      {
        name: 'Mantle of the Monarchy', hash: '55XhhEw',
        desc: 'The lavish robes of the kingdom\'s royalty, outfitted with pauldrons on both shoulders for a more distinguished appearance.',
        effect: '+60 HP, +60 MP, +12 DEF, +20 VIT | Reactive: heals 120 HP + Healing (40 HP/s, 3s) when hit below 80% HP (15s CD)',
      },
      {
        name: 'Warmonger', hash: 'ghOiIDU', shinyHash: 'aA70rBQ',
        desc: "Rarely brandished and in pristine condition, the old monarchy deemed this exquisite recurve too dignified for all but royalty.",
        effect: '95–110 dmg (×2) | 120% RoF | Pierce + Pass Cover | Reactive: -5 DEX for 1s while shooting',
      },
      {
        name: 'Peacekeeper', hash: 'YULX0lC', shinyHash: 'weC8Ywu',
        desc: 'A veritable artifact from the forgotten splendor of a kingdom none wish to remember. This unwelcome sight is now only a sobering reminder of a mistake without regret.',
        effect: 'MP: 135 | +30 HP, +5 DEX | Summons 3 Royal Guards: Knight (slash), Raider (orbit shots), Archer (500–600 dmg)',
      },
      {
        name: 'Noble Mandolin', hash: '5MVXq59', shinyHash: 'EAFIUFE',
        desc: 'Endless melodies from this fine instrument once filled the halls of the castle. Even the most upbeat tune sounds somber when it is played.',
        effect: 'MP: 110 | +30 HP, +5 DEF | 8 slow shots (400–500 dmg) that circle back | Self: -50% shot speed, +10 ATK | AoE dmg to party within 5 tiles',
      },
      {
        name: 'The Forgotten Crown', hash: 'IeKMdLv', shinyHash: 'RHbW7HU',
        desc: 'An eerie reminder of what lays in the depths of the Shatters.',
        effect: '+110 HP, +6 ATK, +6 DEX | 3rd best DPS ring — excellent choice for almost every class',
      },
      {
        name: 'The Forgotten Ring', hash: '53N3d4N',
        desc: 'Part of a sacramental rite, the memory of which has faded with those who observed its divine grace.',
        effect: '+160 HP | Reskin of Ring of Decades — drops from Shatters dungeon objectives',
      },
      {
        name: 'Chrysalis of Eternity', hash: 'hrmQLfs',
        desc: 'As the nameless monarch sat malcontent upon the throne, his ambitions and impiety became one, and with this came enlightenment.',
        effect: '+120 HP, +7 ATK, +7 DEX | Upgrade to Forgotten Crown — 2nd best DPS ring | 9% XP bonus (highest in game)',
      },
      {
        name: 'Corruption Tether', hash: 'WzJqBbb',
        desc: 'This transmogrified crook bolsters the ability to peer into pocket dimensions and cling to the essence within.',
        effect: '175–210 dmg | Single shot | Outperforms T14 Staff vs 49+ DEF enemies | Part of Twilight Archmage Set',
      },
      {
        name: 'Ancient Eminence', hash: 'w1rJnK9',
        desc: 'A cryptic scroll from the castle archives. Only with supreme occult power may one harness the equalized power of the immortal elements, a technique long attributed to legend.',
        effect: 'MP: 90 | +20 MP, +5 VIT | 16 armor-piercing shots × 85–145 dmg | With Defiled Equilibrium: summons Inferno + Blizzard spirits',
      },
      {
        name: 'Twilight Shroud', hash: 'sDrDmCT',
        desc: 'On simple observation, this robe appears unremarkably standard for the dressings of the court magician. Perhaps this attribute is all too emblematic of the kingdom\'s folly.',
        effect: '+60 HP, +50 MP, +10 DEF, +5 SPD | Reactive: +100 MP when shooting below 50% MP (5s CD) | Part of Twilight Archmage Set',
      },
      {
        name: 'Defiled Equilibrium', hash: 'dIOdLFM',
        desc: 'An unsettling glow looms beneath the partitioned gem\'s surface, ever-changing yet always in immaculate balance.',
        effect: '+60 HP, +20 MP, +5 DEF, +5 SPD | With Ancient Eminence: summons Blizzard (Slowed) + Inferno spirits on cast | Twilight Archmage Set',
      },
      {
        name: "Archangel's Judgement", hash: 'ALASUEd',
        desc: 'The eldest of Daeva warriors crafted this sacred weapon to smite all that dare oppose the forces of the light.',
        effect: '60–75 dmg (×4, 5° arc) | 85% RoF | Projectiles linger at max range | Part of Daeva Trickster Set',
      },
      {
        name: 'Daevite Progenitor', hash: '2qQxN1R',
        desc: 'A glorious artifact, bestowed upon mortals from Daeva warriors. This prism can forge countless fighters from the pure lights of the heavens.',
        effect: 'MP: 120 | 80 dmg × 3 shots, decoy (4s, 8-tile dash) | Set bonuses boost dmg/range/duration | Part of Daeva Trickster Set',
      },
      {
        name: "Seraphim's Guard", hash: '2hKZRHq',
        desc: 'These garments have been meticulously crafted over the millennia to serve the Daeva, helping them ward off the ever burning forces of darkness.',
        effect: '+50 MP, +16 DEF, +7 VIT, +7 WIS | Part of Daeva Trickster Set — best used as set component for synergy',
      },
      {
        name: 'Flames of Genesis', hash: 'SLUIzXg',
        desc: 'A mere flame from the legendary forgefire used by Daeva master crafters, this trinket grants awe-inspiring powers to those deemed worthy.',
        effect: '+80 HP, +8 VIT | Reactive: ring of 12 fire shots (350–450 dmg + Paralyze 3s) when shooting in combat (3s CD) | Daeva Trickster Set',
      },
      {
        name: "Fallen One's Blade", hash: '16T4Pfs',
        desc: 'This cryptic blade has been forged from belligerent energies of the great beyond. Wielding it twists mortal comprehension of right and wrong.',
        effect: '125–150 dmg (×2) | Converging wavy shots | Outperforms T12 sword up to 33–36 DEF | Part of Corrupted Paladin Set',
      },
      {
        name: 'Abyssal Insignia', hash: '5zZXG4E',
        desc: 'A mystifying sigil from an otherworldly domain. The power sealed within causes it to faintly pull at its surroundings, attempting to draw them into the void.',
        effect: 'MP: 140 | +40 HP, +5 VIT | Summons void rift (5s): 150–200 armor-pierce dmg + Curse every 0.4s | Part of Corrupted Paladin Set',
      },
      {
        name: 'Vortex Plating', hash: 'FCLWvYi',
        desc: 'The individual plates of this armor shift constantly in and out of realms under the Void\'s influence. Those who wear this cursed armor become entranced in protective and destructive forces.',
        effect: '+40 HP, +16 DEF, +5 VIT | Reactive: 12 nova shots (200–400 dmg, pierce, pass cover) on ability use (4.8s CD) | Corrupted Paladin Set',
      },
      {
        name: 'Eye of the Void', hash: '6QKqxuw',
        desc: 'Though lacking physical form, this trinket grants a sense of sight that allows beings from the realm of shadow to peer into worlds bathed in light.',
        effect: '+80 HP, +8 DEF | Part of Corrupted Paladin Set — solid survivability ring',
      },
    ],
  },
  {
    name: "Oryx's Sanctuary", slug: 'oryx-sanctuary', hash: 'JGnMCv2', tier: 4, color: '#FFD700', bg: '#1a1400', exalt: true,
    whites: [
      {
        name: 'Superior', hash: 'y0Svuxi', shinyHash: '1aXTrtr',
        desc: "This aptly named staff is the manifestation of Chancellor Dammah's assertions of grandeur. It is no less potent as a legitimate weapon.",
        effect: '55–90 dmg (×4) | 4 swerving shots at 15 tiles/sec | Power Level 241 — top-tier staff',
      },
      {
        name: 'Genesis Spell', hash: '7ZsEjTv', shinyHash: 'tniRv1G',
        desc: "Dammah's powers of summoning portals stem from this profane spell. Most use it to call attacks from primitive dimensions of untapped energy.",
        effect: 'MP: 120 | Summons 4 portals (4s): 350 dmg auto-zap nearest enemy per portal every 0.4s | 14,000 total potential dmg',
      },
      {
        name: 'Diplomatic Robe', hash: 'hHyzrLB',
        desc: 'The diplomacy of Chancellor Dammah goes as far as his limited patience. The true purpose of this robe is its deeply woven enchantment to bolster arcane powers.',
        effect: '+11 DEF, +50 HP, +10 ATK | Reactive: on ability use, portal spawns dealing 125 dmg/0.4s for 4s (8s CD)',
      },
      {
        name: "Chancellor's Cranium", hash: 'qJWkf3N', shinyHash: 'QIAOCOb',
        desc: "The warped mind of Oryx's appointed chancellor. This cursed object thrives in the presence of demented energies.",
        effect: '+120 HP, +6 DEF, +3 DEX | Reactive: on taking 50+ dmg, spawns following cranium (150 dmg/0.2s for 5s, 3750 max) (5s CD)',
      },
      {
        name: 'Avarice', hash: 'vHD1WOk', shinyHash: 'M0sEdZf',
        desc: "The pride of Treasurer Gemsbok, this gilded knife has backstabbed countless traders in shady dealings.",
        effect: '190–215 dmg | 105% RoF | Alternating left/right wavy shots | Outperforms T14 dagger',
      },
      {
        name: "Gambler's Fate", hash: 'ZQTDWH3', shinyHash: 'cEaYkm5',
        desc: "A coin pilfered from the endless vault of Gemsbok's hoarded wealth. Only the most daring would stake their lives on the equal odds of a coin flip.",
        effect: 'MP: 90 | +4 ATK, +4 DEX | Deploys coin decoy at cursor (50% chance each second to persist or vanish)',
      },
      {
        name: 'Turncoat Cape', hash: 'V3W2Yw5',
        desc: "This covering is assigned to Oryx's negotiators to conceal weaponry and get away with stolen fortunes.",
        effect: '+18 DEF, +10 SPD | Reactive: 3s invisibility on taking 30+ dmg (5s CD)',
      },
      {
        name: "Collector's Monocle", hash: '4xNYkcz', shinyHash: 'LWfULPd',
        desc: 'Treasurer Gemsbok had this monocle custom made to enhance his perception in stealth strikes.',
        effect: '+140 HP, +8 DEX | Reactive: +12 DEX for 5s while shooting invisible (1s CD) — total +20 DEX for stealthy classes',
      },
      {
        name: 'Lumiaire', hash: 'XTQGS8H', shinyHash: 'NtiWFAg',
        desc: 'This ceremonial mace controls the forces of light and darkness. Archbishop Leucoryx uses it for distinguished offerings in the name of his god.',
        effect: '80–100 dmg (×2) | 150% RoF | 5 tiles/sec (very slow shots) | Exceptional sustained DPS',
      },
      {
        name: 'Chaotic Scripture', hash: 'JG0yY9F', shinyHash: '7hDgvrm',
        desc: 'The sacred writings of Leucoryx and his disciples, compiled as a tribute to Oryx to lend false credence to the teachings of his twisted followers.',
        effect: 'MP: 150 | +60 HP, +6 VIT | 90 HP heal + 2500 dmg nova at cursor (armor-pierce) | Best offensive tome — worst healing tome',
      },
      {
        name: 'Vesture of Duality', hash: 'QjfsjIn',
        desc: 'This cursed robe overwhelms the wearer with conflicting thoughts of good and evil, shattering the will of the weak-minded.',
        effect: '+12 DEF, +5 SPD, +5 ATK, +40 MP | Reactive: +15 ATK and -6 DEF for 5s on ability use | Highest robe DPS when proc is active',
      },
      {
        name: 'Divine Coronation', hash: 'CrLH7X3', shinyHash: 'amIAQbW',
        desc: 'A majestic crown of the venerated, bestowed upon Archbishop Leucoryx to solidify his position in Oryx\'s legion.',
        effect: '+110 HP, +55 MP, +8 DEX, +5 DEF | Strong all-purpose ring — direct upgrade to Ring of the Pyramid',
      },
      {
        name: 'Enforcer', hash: 'VZ4mOgG', shinyHash: 'B67VzTO',
        desc: 'Chief Beisa designed and forged this sawtoothed blade himself to be granted admission as a gladiator. Its shattering strikes are amplified by his own slashing techniques.',
        effect: '105–145 dmg (×2, 12° arc) | Extended range | Outperforms Kusanagi up to 100 DEF',
      },
      {
        name: 'Ballistic Star', hash: 'l0PduTP', shinyHash: 'g0BAtTP',
        desc: "To dominate the battlefield, Beisa's assault units possess this star model to remain vigorous in combat before controlling zones.",
        effect: 'MP: 110 | 4 parametric stars (2 layers, Stun 3s + armor-pierce) | Heals self 4s on use | Total 2800–3600 dmg',
      },
      {
        name: "Centaur's Shielding", hash: 'VWggonC', shinyHash: 'XPlglHP',
        desc: 'Specially weighted plates layered inside this armor channel greater force into every motion of the body for destructive blows.',
        effect: '+13 DEF, +5 ATK, +7 DEX | Reactive: +12 ATK for 4.5s when shooting while Healing is active (6s CD)',
      },
      {
        name: 'Battalion Banner', hash: 'BtTLj4a', shinyHash: 'QcIEAnD',
        desc: "The battle standard of Beisa's forces, a sign of triumph for Oryx and calamity for those he faces.",
        effect: '+90 HP, +4 SPD, +4 DEX | On use: banner (4s) deals 400–600 dmg/s in 6 tiles + Damaging to allies (3 tiles)',
      },
      {
        name: 'Divinity', hash: 'iqtgZAF', shinyHash: 'odJUyFZ',
        desc: "The chosen blade of Oryx the Mad God, charged with an unrelenting energy to subdue all that lies before it.",
        effect: '275–325 dmg | Piercing | Celestial Strength: armor-piercing beams 600–800 dmg (2.25-tile radius) every 1s',
      },
      {
        name: "Oryx's Escutcheon", hash: 'oyL9xSt', shinyHash: 'b7giMKK',
        desc: "An enormous shield decorated with the crest of Oryx, an infamous symbol of oppression dreaded by all who have faced it.",
        effect: '+7 SPD, +10 DEF | MP: 100 | 3 sequential Exalted Beams: 1000–1200 dmg + 2s Stun (armor-pierce) | Extended range vs other shields',
      },
      {
        name: 'Gladiator Guard', hash: 'QRe1YSk',
        desc: 'Although refurbished, this breastplate is the very same Oryx received as a gift from the royal family in celebration of his gladiatorial prowess.',
        effect: '+7 SPD, +5 ATK, +5 DEX, +20 DEF | Offense + speed combination — outperforms Mercy\'s Bane',
      },
      {
        name: "Exalted God's Horn", hash: 'qQXV0jj', shinyHash: 'rMlXNZj',
        desc: "A horn claimed from Oryx's iconic helmet. To hold this in one's hand is a monumental insult to the Mad God's ego.",
        effect: '+140 HP, +5 DEF | Mad God\'s Hubris: +10 DEX while shooting above 90% HP',
      },
    ],
  },
  { name: 'Heroic Undead Lair',         slug: 'heroic-undead-lair',        hash: 'z4UFKSh', tier: 3, color: '#B0BEC5', bg: '#0e1014' },
  { name: 'Infernal Abyss of Demons',   slug: 'infernal-abyss',            hash: 'waeR46M', tier: 3, color: '#FF5252', bg: '#1a0404' },
  {
    name: 'Plagued Nest', slug: 'plagued-nest', hash: 'l71FWP1', tier: 4, color: '#FFCA28', bg: '#1a1204', exalt: true,
    whites: [
      {
        name: "Queen's Stinger", hash: 'Bjlfsca', shinyHash: '2HFzK0O',
        desc: "The blade of this dagger was once the enormous Killer Bee Queen's stinger. It remains exceptionally sharp, cutting through even the heaviest armor.",
        effect: '150–170 dmg | 105% RoF | Pierce + Armor Pierce — best anti-armor dagger in the game',
      },
      {
        name: 'Combcutter Kunai', hash: 'XhWdsUn',
        desc: "Shaped from the stingers of mutant beehemoths, these blades are sealed away until the very moment of combat and brandished by the finest of shinobee.",
        effect: '+60 MP, -10 SPD | Hold: +4 ATK, Damaging, fires 60–80 dmg kunai | Release: 800–1200 dmg piercing kunai | Scales with VIT',
      },
      {
        name: "Swarmlord's Sigil", hash: 'lLk3JSU', shinyHash: 'lyKnmLE',
        desc: 'Fashioned by the Beekeeper, this pendant allows the wearer to command the forces of the nest, directing swarms of bees to attack enemies.',
        effect: '+4 DEX, +4 ATK | MP: 110 | Bee Form (full meter): +30 DEX, +25 ATK, -50% weapon range for 7.6s | Equivalent to 3.5 Overclocking Amulets',
      },
      {
        name: 'Green Beehemoth Quiver', hash: 'hTphc7t', shinyHash: 'IuqjM6h',
      },
      {
        name: 'Hivemaster Helm', hash: 'rlxhfqA', shinyHash: 'ZJYUIky',
        desc: 'A nefarious helm combining pheromones and Killer Honey to captivate Killer Bees into servitude.',
        effect: 'MP: 80 | +6 DEF, +6 SPD | Berserk to party (4-tile radius) + 3 combat bees (120 dmg) | Red bee inflicts Curse',
      },
      {
        name: 'Hivemind Mace', hash: 'bFzLQ4N',
        desc: 'The guiding power of the realm\'s pollinating drones. Even when stolen from their proper queen, it can still briefly influence their minds to service.',
        effect: 'MP: 130 | +4 DEF, +4 DEX | 3×240–310 dmg piercing shots | Slow speed (6.5 tiles/s), passes cover | Summons orbiting bee projectiles',
      },
      {
        name: "Beekeeper's Flamethrower", hash: 'f1YZVsv', shinyHash: 'rzbu1sw',
        desc: 'Equipped with a mechanical combustion technology few may understand, this weapon projects flames boasting temperatures capable of melting targets.',
        effect: '85–125 dmg (×3) | Armor Pierce + Pass Cover | Slow shots — similar to Lumiaire but for Warriors',
      },
    ],
  },
  {
    name: 'Advanced Kogbold Steamworks', slug: 'advanced-kogbold', hash: 'k8pLiJV', tier: 4, color: '#FFB300', bg: '#1a1000', exalt: true,
    whites: [
      {
        name: 'Precision Cog', hash: 'VHJV63D',
        desc: 'A machined gear crafted down to immaculate levels of specificity.',
        effect: 'Enchanting artifact — 50% chance of consumption | Boosts ATK, Tradeoff, and Kogbold-specific awakened mods',
      },
      {
        name: 'Overclocking Amulet', hash: 'O15RAvc', shinyHash: 'y92PV4j',
        desc: 'Placing this trinket into an appropriate slot found on Steamworks machines activates their overclock, drastically increasing output.',
        effect: '-8 DEF, +8 ATK, +8 DEX | Highest unconditional DPS ring — trades all survivability for pure offense',
      },
      {
        name: 'Steam Pipe', hash: 'LFkrGDa', shinyHash: 'zF81nD5',
        desc: 'Fashioned from the boiler of a steam generator, this staff projects its scalding vapors towards a target, cooking them alive.',
        effect: '+25 MP | 2 piercing water shots + 2 armor-piercing fire shots (65–85 dmg each), all decelerating | Silent on fire',
      },
      {
        name: 'Chain Dagger', hash: 'eZzC5ci', shinyHash: 'PiR9IOW',
        desc: 'Of all the tools found on Kogbold excavation bots, none is more versatile than the KI225 Chain Cutter. Useful for cutting through stone to flesh.',
        effect: '110–130 dmg | 80% RoF | Inflicts Bleeding (4.5s, 50 bleed/tick) | Proc: +DEX boost while shooting',
      },
      {
        name: 'Laser Pointer', hash: 'UpZbVW1', shinyHash: '4vY28w4',
        desc: 'Early prototype versions of the KI470 Laser pointing device came with no inbuilt limiter on their power output.',
        effect: 'Primary: 95–130 dmg, 150% RoF, armor-pierce | Secondary: 50–75 dmg, piercing | Dominates close-range vs high-DEF enemies',
      },
      {
        name: 'Kogbold Cower Shield', hash: 'hrjO0h8',
        desc: 'A large sheet of plating intended as a blast shield. When confronted with intruders, the more cowardly Kogbolds use them to protect themselves while fleeing.',
        effect: 'MP: 120 | +5 SPD, +5 VIT | 70% dmg reduction 5s | +15/+20 DEF to self+allies | 5 armor-pierce shots on use',
      },
      {
        name: 'Scepter of Rust', hash: '89fuCh7', shinyHash: 'KowXxLw',
        desc: 'This electrical rod is used to remove rust through electrolysis. When used on living creatures, the shock causes muscles to tense and circuits to go haywire.',
        effect: 'MP: 75 | +7 WIS | 300 dmg | Inflicts Weak (4s) on up to 3 enemies | Shockblast: 90 dmg to 3 nearby targets per cast',
      },
      {
        name: 'Brain Cube', hash: 'WTPtfYd', shinyHash: 'f187Bgj',
        desc: 'The oldest forms of automatic computing built by the Kogbolds were a far cry from the self-improving artificial intelligence of the modern Core designs.',
        effect: 'MP: 135 | +50 MP, +6 DEX | Summons undead: 4 expanding explosions (340→255 dmg each), armor-pierce, 10% lifesteal',
      },
      {
        name: 'Kogbold Multitool', hash: 'Ot9Xoe5', shinyHash: 'J0Tul3O',
      },
      {
        name: 'Kogbold Enhancement Core', hash: 'AHGKQwy', shinyHash: 'isUOrSE',
        desc: 'A well machined object said to give the Kogbolds their strength.',
        effect: 'Forge material — upgrades 7 UT weapons into enhanced versions (Doom Bow, Void Blade, Socket Blade, and more)',
      },
    ],
  },
];

export const TIER_META = {
  1: { label: 'Beginner',     color: '#4CAF50' },
  2: { label: 'Intermediate', color: '#FFC107' },
  3: { label: 'Advanced',     color: '#FF9800' },
  4: { label: 'Endgame',      color: '#E91E63' },
};
