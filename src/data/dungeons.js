export const DUNGEONS = [
  // ── Tier 1 — Beginner ───────────────────────────────────
  {
    name: 'Pirate Cave', slug: 'pirate-cave', hash: 'OqzVQuc', tier: 1, color: '#2B8CE8', bg: '#041020',
    whites: [
      { name: 'Corsair Ring', hash: 'VLrU7Kd', shinyHash: '2L5XfNE', desc: "A lavish golden ring adorned with a prized ruby from Dreadstump's spoils.", effect: '+20 HP, +2 DEF | Awakened: +80 HP, +8 ATK/DEF for 8s when shooting below 25% HP' },
    ],
  },
  {
    name: 'Forest Maze', slug: 'forest-maze', hash: 'm0AO506', tier: 1, color: '#27AE60', bg: '#041408',
    whites: [
      { name: 'Bramble Bow', hash: 'e9kBTMN', shinyHash: 'MFRy2Hs', desc: 'A prickly bow with unshaven thorns jutting out from the grip, making it unwieldy to fire.', effect: '3×30–45 dmg (10° arc) | 120% RoF | Piercing + Wavy' },
      { name: 'Cocoon Quiver', hash: 'Jo9vFt6', shinyHash: 'ZE0vwGw', desc: "A silky case of arrows woven by Mama Megamoth's larvae for use by her woodland warriors.", effect: 'MP: 60 | 2×150–250 dmg | Paralyzes 2s | Piercing' },
    ],
  },
  {
    name: 'Spider Den', slug: 'spider-den', hash: 'up93OlG', tier: 1, color: '#A0522D', bg: '#180a04',
    whites: [
      { name: 'Poison Fang Dagger', hash: 'DjsPr2i', shinyHash: 'VlQca4G', desc: 'A dagger fashioned from the fang of an enormous spider.', effect: '75–115 dmg | 140% RoF | Awakened: Venom Coating inflicts Bleeding 4s (12 dmg/s)' },
      { name: 'Spider Shuriken', hash: 'xWn8uJo', shinyHash: 'SvqrlYb', desc: "An arachnid star which slings silk to tangle predators while granting the speed and stamina of Arachna's most agile young.", effect: 'MP: 60 | Hold: Speedy | Release: 200–300 dmg at cursor | Inflicts Slowed 3s' },
      { name: "Spider's Eye Ring", hash: 'wqOKIuU', shinyHash: 'POnAv9a', desc: 'A ring crafted from the faceted eye of an enormous spider.', effect: '+5 VIT, +5 DEF | On taking damage: Slows enemies within 4.5 tiles for 3s (10s CD)' },
    ],
  },
  {
    name: 'Forbidden Jungle', slug: 'forbidden-jungle', hash: 'beQHm21', tier: 1, color: '#2E8B57', bg: '#041408',
    whites: [
      { name: 'Staff of the Crystal Serpent', hash: 'E3rQtUJ', shinyHash: 'lMNGqXL', desc: 'An ancient staff used both for sacrifice and communion with the gods.', effect: '2×70–85 dmg | 110% RoF | 9 tiles range' },
      { name: 'Cracked Crystal Skull', hash: 'E4DjT7x', shinyHash: 'uP8w2vo', desc: 'A relic uncovered from the depths of the jungle. It exudes a deep darkness.', effect: 'MP: 95 | +50 HP | Summons undead (5s): 155–225 dmg, armor-pierce, 2% lifesteal' },
      { name: 'Robe of the Tlatoani', hash: 'qFkrLhP', shinyHash: 'Fgb7GhI', desc: 'A ceremonial robe once worn by the Tlatoani.', effect: '+90 MP, +8 WIS | Zero DEF | Best early-game WIS robe for Necromancer/Sorcerer' },
      { name: 'Crystal Bone Ring', hash: 'Z1rWlNH', shinyHash: 'HqxLCaV', desc: 'A ring made from a splinter of crystallized sacrificial bone.', effect: '+4 DEX, +4 WIS | 10% chance to restore 5 MP on shoot (0.4s CD)' },
    ],
  },
  {
    name: 'The Hive', slug: 'the-hive', hash: '6WiS9zQ', tier: 1, color: '#F5A623', bg: '#1a1004',
    whites: [
      { name: 'Honey Scepter', hash: 'yk4q1Jx', shinyHash: 'JAR6GUI', desc: 'Stolen from the Queen Bee herself, this scepter possesses the power to destroy evil.', effect: 'MP: 70 | 100 dmg (+4/WIS>50) | 9-tile cone, 6 targets | Shockblast: 25 dmg ×4' },
      { name: 'Orb of Sweet Demise', hash: 'nuRdcXC', shinyHash: 'yteLed7', desc: 'A magical honeycomb that was once crucial in repelling an assault from the Hornet Rebellion.', effect: 'MP: 90 | Stasis (3 tiles, 3s) + Slowed (WIS-scaling) | Unique dual-CC orb' },
    ],
  },
  {
    name: 'Snake Pit', slug: 'snake-pit', hash: 'Mhtm0aR', tier: 1, color: '#5CB85C', bg: '#081408',
    whites: [
      { name: 'Wand of the Bulwark', hash: 'FVbME6f', shinyHash: 'puy570I', desc: 'This strange weapon was used by ancient battle mages to deter invaders. The secret to its construction has long been lost.', effect: '500–600 dmg | 33% RoF | Parametric orbiting shots — piercing, passes cover' },
      { name: 'Snake Charmer Pungi', hash: '2QpfLCz', shinyHash: 'hL2lVyW', desc: 'A ceremonial pungi that contains the spirits of fifteen snakes, guiding the righteous through their many paths ahead.', effect: 'MP: 100 | +7 SPD | Party: +4 DEF for 5s | Self: Speedy 4s' },
      { name: 'Snakeskin Armor', hash: 'g1QQ6Ee', shinyHash: '7GLOigg', desc: 'A tight fitting garment of snake skin that is both functional and stylish.', effect: '+15 DEF, +4 DEX, +4 SPD | Balanced offensive leather armor' },
      { name: 'Snake Eye Ring', hash: 'lvPfj4Z', shinyHash: 'DqARc1L', desc: 'A ring made from the eye of the Snake Queen.', effect: '+50 HP, +5 ATK, +5 DEF, +5 SPD | On ability use: Speedy 2s (5s CD)' },
    ],
  },
  {
    name: 'Sprite World', slug: 'sprite-world', hash: 'K0dJRrF', tier: 1, color: '#9B59B6', bg: '#140820',
    whites: [
      { name: 'Sprite Wand', hash: 'MkhMJy0', shinyHash: 'LEhkyfk', desc: 'A wand created from the wood of Sprite trees. Seems to be poorly calibrated, though.', effect: '10–290 dmg | Wavy shots | Wild damage variance — low floor, high ceiling' },
      { name: 'Staff of Extreme Prejudice', hash: 'AyOQRFj', shinyHash: 'tU55Ret', desc: 'Once the most powerful staff in existence; a crack in its frame has rendered it incapable of focusing fire. It remains uniquely deadly.', effect: '10 radial shots (36° gaps) | 95–110 dmg | 40% RoF | All shots must connect for maximum DPS' },
      { name: 'Cloak of the Planewalker', hash: 'Xqt2Cbq', shinyHash: 'XP382Dj', desc: 'An enchanted cloak crafted by an ancient guild of timeshifter thieves.', effect: 'MP: 90 | +15 SPD, +6 DEX | Teleports to cursor + 3s invisibility (cancellable after 1s)' },
      { name: 'Mace of the Celestial Forest', hash: '6KSXzTZ', shinyHash: 'jYChT2a', desc: "Limon's power of nature restoration are infused into this mace for her children to wield, traversing the realm and planting seeds of new life.", effect: 'MP: 105 | +5 DEX | Summons random sprite tree (4 variants, 12s, 40–650 dmg)' },
    ],
  },
  {
    name: 'Cave of a Thousand Treasures', slug: 'cave-of-a-thousand-treasures', hash: '6lgodhZ', tier: 1, color: '#FFD700', bg: '#181000',
    whites: [
      { name: 'Jewel Eye Katana', hash: '8q0efTp', shinyHash: 'rZSxJF7', desc: 'The gem fixed into its hilt could be any jewel, but since its original creator had used a ruby, smiths would traditionally use them when crafting a new blade.', effect: '110–175 dmg | Piercing | Only the ✦ Shiny variant drops as a white bag from this dungeon' },
    ],
  },
  { name: 'Ancient Ruins',              slug: 'ancient-ruins',             hash: '4gtP9OQ', tier: 1, color: '#95A5A6', bg: '#101214' },
  {
    name: 'Magic Woods', slug: 'magic-woods', hash: 'nmLtcBD', tier: 1, color: '#7DCEA0', bg: '#081410',
    whites: [
      { name: 'Spirit Staff', hash: '6GDdhQb', shinyHash: 'BLFYmp3', desc: 'The souls of legendary heroes live on in this vibrant elderwood staff. It represents the ancient druidic pact to protect the domains of Fey across the Realm.', effect: '65–90 dmg | 105% RoF | Outperforms T12 Staff up to 6 DEF' },
      { name: 'Enchantment Orb', hash: 'rxdnMsw', shinyHash: 'bf0YV9k', desc: 'The crystalline glass in this orb seals away an ancient flora said to rejuvenate the spirit and unleash one\'s force of will against those who threaten the wild.', effect: 'MP: 120 | Self: Berserk 2s | Enemies within 2 tiles: Cursed 3s' },
      { name: 'Woodland Robe', hash: 'XaN7pD8', shinyHash: 'MpiJcbQ', desc: 'The evergreen plant fibers woven into this robe pulse with an unusual vibrance. This garment lifts your steps and emboldens your mind.', effect: '+12 DEF, +5 SPD, +5 DEX, +5 WIS | 3% on taking damage: spawn fairy (100 dmg/0.8s for 6.4s)' },
      { name: 'Fairy Ring', hash: 'Qd37W41', shinyHash: '27C4pfV', desc: 'The magical drop of resin fixed atop this ring is a precious keepsake of the Fey. Those who possess it are protected by an old pact formed by the keepers of the forest.', effect: '+60 HP, +5 SPD, +5 DEX, +5 VIT | 3% on shoot below 80% HP: healing fairy (15 HP/s for 8s)' },
      { name: 'Shield of Flowing Clarity', hash: 'VEfU78C', shinyHash: 'ePK9KMd', desc: 'This shimmering shield allows knights to enhance their concentration on targets, giving them more time to think about their next move in battle.', effect: 'MP: 80 | +17 DEF | 5×150–330 dmg | Slows 4s | Piercing + Pass Cover' },
    ],
  },
  { name: 'Beachzone',                  slug: 'beachzone',                 hash: 'Ns31EKU', tier: 1, color: '#F0C060', bg: '#181400' },

  // ── Tier 2 — Intermediate ───────────────────────────────
  {
    name: 'Candyland Hunting Grounds', slug: 'candyland', hash: 'BKoSv6j', tier: 2, color: '#FF69B4', bg: '#1a0818',
    whites: [
      { name: 'Candy-Coated Armor', hash: 'p9jh9r4', shinyHash: 'P9kki2l', desc: 'Reinforced with magical hard candy from the candy forest. Sticky but strong.', effect: '+30 DEF, -5 DEX | Tied highest DEF heavy armor in the game' },
      { name: 'Bubblegum Bucket', hash: 'vRwsuLU', desc: 'No one would dare question your dominance of the Hunting Grounds while wearing the remains of a decapitated gumball machine.', effect: 'MP: 85 | +10 DEF, +10 SPD, +10 VIT | Self: Speedy 12s + Healing 4s' },
      { name: 'Candy Ring', hash: '7azhBBW', shinyHash: 'KTxDzFL', desc: 'A high-fructose ring that will give you pep, but hurt your concentration.', effect: '+10 SPD, +10 VIT, -100 MP, -10 WIS | Primarily used as high-value pet food' },
    ],
  },
  {
    name: 'Undead Lair', slug: 'undead-lair', hash: 'pR8Dgth', tier: 2, color: '#7F8C8D', bg: '#0e1418',
    whites: [
      { name: 'Doom Bow', hash: '3GjgWJy', shinyHash: 'HwN2J4b', desc: 'No mortal can fire this dreaded bow without resting in between shots. It requires tremendous skill to wield.', effect: '500–600 dmg | 33% RoF | Piercing | Highest single-shot bow damage in the game' },
      { name: 'Spectral Sword', hash: 'qEH9QJi', shinyHash: 'YymwPKB', desc: 'This ghastly blade has the power to emit waves of energy that dance like wraiths in the dark.', effect: '2×100–125 dmg | +4 VIT | Circular shot motion' },
      { name: 'Wandering Souls Spell', hash: 'oggehEg', shinyHash: 'qRkHFvh', desc: 'Shaping raw magic into spirit-like forms, phantasmal projectiles homing in on the target with precision.', effect: '+3 DEF, +3 SPD | 6 homing piercing shots | 345–500 dmg each | 20% chance to summon Wandering Soul' },
      { name: 'Spectral Arrowhead', hash: 'd5vmAnb' },
      { name: 'Ring of Skeletal Specters', hash: 'N2dLIwb', shinyHash: 'gxRxpjm', desc: 'A ghastly ring that calls upon the eager hands of an impossible undead creature.', effect: '+80 HP, +3 ATK, +7 WIS | On taking 20+ dmg: spawns hands (150 dmg, 6 tiles) + Slows 0.8s' },
    ],
  },
  {
    name: "Puppet Master's Theatre", slug: 'puppet-masters-theatre', hash: '6diBou4', tier: 2, color: '#E91E63', bg: '#1a0818',
    whites: [
      { name: 'Marionette Ravager', hash: 'OXOBud7', shinyHash: 'DA8z1Fk' },
      { name: 'Prism of Dancing Swords', hash: 'wc3KXpa', shinyHash: 'MeCYd10' },
      { name: 'Harlequin Armor', hash: 'Wn4vs1y', shinyHash: 'MfQuSwa' },
    ],
  },
  {
    name: 'Toxic Sewers', slug: 'toxic-sewers', hash: '4Iv5apz', tier: 2, color: '#8BC34A', bg: '#0e1a04',
    whites: [
      { name: 'Void Blade', hash: 'tJprB54', shinyHash: 'uGemi3U' },
      { name: 'Murky Toxin', hash: 'YTRasiP', shinyHash: 'T0M6tbB' },
    ],
  },
  {
    name: 'Cursed Library', slug: 'cursed-library', hash: '9nQ7nSz', tier: 2, color: '#B8860B', bg: '#140e00',
    whites: [
      { name: 'Necronomicon', hash: '2QeHp0u', shinyHash: 'MBFZl5N' },
      { name: "Scholar's Seal", hash: 'YLj6XLl', shinyHash: 'V63yTX7' },
      { name: 'Wand of Hidden Knowledge', hash: 'yVh0pj9', shinyHash: 'nfeM1eH' },
      { name: 'Corruption Cutter', hash: 'WiuoSvn', shinyHash: 'RDbS6De' },
    ],
  },
  {
    name: 'Mad Lab', slug: 'mad-lab', hash: 'x6dyxMp', tier: 2, color: '#00BCD4', bg: '#00151a',
    whites: [
      { name: 'Scepter of Fulmination', hash: '4S9VsG7', shinyHash: 'ptW12wM' },
      { name: 'Robe of the Mad Scientist', hash: 'SwTLhZA', shinyHash: 'dvcFxJ8' },
      { name: 'Conducting Wand', hash: 'No94h3g', shinyHash: 'WFhzHfx' },
      { name: 'Experimental Ring', hash: 'CwMs1nv', shinyHash: '1CeRtCE' },
    ],
  },
  {
    name: 'Abyss of Demons', slug: 'abyss-of-demons', hash: 'wId2zPS', tier: 2, color: '#E74C3C', bg: '#1a0808',
    whites: [
      { name: 'Demon Blade', hash: 'UcQg1tr', shinyHash: 'wJVXIxO', desc: 'A swift and hungry blade that is never satisfied with just one kill.', effect: '2×150–175 dmg (25° arc) | Ranks among top swords when both shots connect' },
      { name: "Berserker's Breastplate", hash: '3wfhQpf', shinyHash: 'CKYbX3e', desc: 'This armor is donned by the Brutes of the Abyss, focusing narrowly on pure offensive power.', effect: '+20 DEF, +4 ATK | Reactive: ATK boost scaling with HP loss (+3/+6/+9 ATK at 90/70/50% HP)' },
      { name: 'Volcanic Sheath', hash: 'b66TXPg', shinyHash: '73swD8N', desc: 'Archdemon Malphas took a conspicuous liking to this outsider\'s sheath, smuggled in by a newly demonic soul.', effect: 'WIS-scaling dash (400 dmg, 4 tiles) | 1200 trail dmg | 3 dashes, 2s CD | +5 WIS' },
    ],
  },
  {
    name: 'Manor of the Immortals', slug: 'manor-of-the-immortals', hash: 'paEB8Qu', tier: 2, color: '#BDC3C7', bg: '#141414',
    whites: [
      { name: 'Bone Dagger', hash: 'yuTbXQG', shinyHash: 'tD7Eny9' },
      { name: 'Kyuuketsuki Hitogoroshi', hash: 'uYe1flJ', shinyHash: 'sBKYnez' },
      { name: "St. Abraham's Wand", hash: 'F3Kmaeg', shinyHash: 'bbl473e' },
      { name: 'Tome of Purification', hash: 'XpQhE6D', shinyHash: '2zAfSH1' },
      { name: 'Chasuble of Holy Light', hash: '5SkE5bJ', shinyHash: 'cTU6Fvk' },
      { name: 'Ring of Divine Faith', hash: 'WoacCEI', shinyHash: '0MqWQvl' },
    ],
  },
  {
    name: 'Haunted Cemetery', slug: 'haunted-cemetery', hash: 'VB6hMsm', tier: 2, color: '#90A4AE', bg: '#0e1014',
    whites: [
      { name: 'Amulet of Dispersion', hash: 'fOZY56P', shinyHash: 'Nu9e66X' },
      { name: 'Plague Poison', hash: 'HM0JDSk', shinyHash: 'sgz0woL' },
      { name: "Soul's Guidance", hash: 'dBfapRh', shinyHash: 'eb9I5Jq' },
      { name: "Resurrected Warrior's Armor", hash: 'lbaYp6l', shinyHash: 'YSqy7bZ' },
    ],
  },
  {
    name: "Davy Jones' Locker", slug: 'davy-jones-locker', hash: 'Hqmoe5U', tier: 2, color: '#1976D2', bg: '#040e1a',
    whites: [
      { name: 'Spirit Dagger', hash: 'VKZyp0S', shinyHash: 'eB74Ws3' },
      { name: 'Ghostly Prism', hash: 'u21w5cE', shinyHash: 'KgxKuP3' },
      { name: 'Spectral Cloth Armor', hash: 'uJhfN6g', shinyHash: 'hOB0iT5' },
      { name: "Captain's Ring", hash: 'GaW3dSH', shinyHash: 'NA2SKx5' },
      { name: 'Quartermaster Scabbard', hash: 'IyEy6lE', shinyHash: 'TU8mQzC' },
    ],
  },
  {
    name: 'The Crawling Depths', slug: 'crawling-depths', hash: 'V1rfmTa', tier: 2, color: '#6D4C41', bg: '#100804',
    whites: [
      { name: 'Doku No Ken', hash: '41CRVHl', shinyHash: 'zJK23IS' },
      { name: 'Spider Silk Bow', hash: 'LDXA6F8', shinyHash: '7qMBc8o' },
      { name: 'Mace of the Depths', hash: 'XPMdiKq', shinyHash: 'EZb1yjk' },
      { name: 'Silken Sigil', hash: '1hTYeL9' },
    ],
  },
  {
    name: 'The Tavern', slug: 'the-tavern', hash: 'DwtjA17', tier: 2, color: '#D4A017', bg: '#181000',
    whites: [
      { name: 'The Right Hook', hash: 'VZcwjjQ', shinyHash: '5Mdajti' },
      { name: 'Double Vision Darts', hash: 'zJ0A5q4', shinyHash: 'CYAesGF' },
      { name: 'Cask Corslet', hash: '0gKF6SB', shinyHash: 'hC2JHYU' },
      { name: 'Tipsy Topper', hash: 'Af8QY5N', shinyHash: 'CG6ZGF1' },
      { name: "Brewer's Bangle", hash: 'EMoLtlO', shinyHash: 'gt5cqKp' },
    ],
  },
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
  {
    name: 'Ocean Trench', slug: 'ocean-trench', hash: '9GR3Ypw', tier: 3, color: '#1565C0', bg: '#040e1a',
    whites: [
      { name: 'Coral Bow', hash: 'jNzGW6I', shinyHash: 'hbLbvhb', desc: 'A bow fashioned from living coral found only in the deepest ocean trenches.', effect: '2×75–95 dmg | 125% RoF | Piercing | +5 SPD' },
      { name: 'Coral Venom Trap', hash: 'TWsORRd', shinyHash: 'tSsmGEO', desc: 'A trap imbued with deadly venom from the coral of the Ocean Trench.', effect: 'Paralyzes 3s | 425 dmg | +4 SPD, +4 DEX' },
      { name: 'Coral Silk Armor', hash: 'nlshYfC', shinyHash: 'dz8dj3b', desc: 'Mermaid-made armor woven from unbreakable still living coral threads.', effect: '+14 DEF, +8 DEX, +8 WIS' },
      { name: 'Coral Ring', hash: 'CUc0xuP', shinyHash: 'hcjBXN2', desc: 'A ring crafted from the dangerous Fire Coral.', effect: '+90 MP, +5 DEX, +5 SPD, +5 WIS | Reduces ability cost by 10%' },
      { name: 'Sharktooth Sigil', hash: 'YMsWLEH', shinyHash: 'TZhXEuO', desc: 'This necklace is adorned with the tooth of a great white shark.', effect: 'Transforms into shark: +25 SPD, +25 DEX, -25% weapon range for 7s | Stealth up to 3s' },
    ],
  },
  {
    name: 'Woodland Labyrinth', slug: 'woodland-labyrinth', hash: 'jyKYlZg', tier: 3, color: '#558B2F', bg: '#081404',
    whites: [
      { name: 'Leaf Bow', hash: 'HTra5EH', shinyHash: 'gr74UAL', desc: 'Fashioned from the finest logs within the Woodland Labyrinths, using sharp leaves instead of conventional arrows.', effect: '120–175 dmg | 140% RoF | Wavy shots | +5 SPD' },
      { name: 'Wakizashi of Eastern Winds', hash: 's8elan2', shinyHash: 'W0Dmvoy', desc: 'A wakizashi used by a powerful swordsman in ancient times. It seems to dance through the air as you swing it.', effect: '5 shots | 260–490 dmg | Exposed 4.5s | Pierce + Pass Cover' },
      { name: "Labyrinth Dweller's Sheath", hash: '5hTq71t', shinyHash: 'zxKMT4j', desc: 'A sheath fully embracing their own ways of life — a bitter expression of dissent.', effect: 'Dash (1–7 tiles, 3 dashes, 800 trail dmg) | 350 pierce dmg/shot | +6 SPD' },
    ],
  },
  {
    name: 'Deadwater Docks', slug: 'deadwater-docks', hash: 'baXW11C', tier: 3, color: '#546E7A', bg: '#080e10',
    whites: [
      { name: "Pirate King's Cutlass", hash: 'WkV86TU', shinyHash: '4iupbhq', desc: 'Used only by the pirates who would make themselves kings — said to be cursed.', effect: '180–230 dmg | 130% RoF | +3 SPD' },
      { name: 'Wavecrest Concertina', hash: 'zStUCio', shinyHash: 'kDDp0No', desc: 'A peculiar instrument played by the sailors of the seven seas, attracts parrots that obey the musician\'s every command.', effect: 'Lute: summons fighting parrots (450 armor-pierce dmg) + Inspired to party | +4 ATK, +4 DEX' },
    ],
  },
  {
    name: "Puppet Master's Encore", slug: 'puppet-masters-encore', hash: 'UhdCm8R', tier: 3, color: '#AD1457', bg: '#180410',
    whites: [
      { name: 'Prism of Dire Instability', hash: '7TGC5J3', shinyHash: 'gaeBnYz', desc: 'Seemingly bleak at first, this prism has erratic magical properties that affect the light it scatters in unforeseen ways.', effect: 'Deploys decoy that explodes into 15 shots (200–320 dmg each) | +2 ATK, +2 WIS, +40 MP' },
      { name: 'Thousand Shot', hash: '1cji9i9', shinyHash: 'utZARz3', desc: 'A deadly repeater crossbow — efficient but carries additional weight.', effect: '65–130 dmg | 200% RoF (highest in game) | Armor-piercing | +30 MP' },
    ],
  },
  {
    name: 'Cnidarian Reef', slug: 'cnidarian-reef', hash: 'pXFqErd', tier: 3, color: '#00ACC1', bg: '#001418',
    whites: [
      { name: 'Bottled Medusozoan', hash: '7DI23IS', shinyHash: 'CUsvb41', desc: 'A youthful jellyfish taken from the reefs of the ocean realms, residing within a coralglass jar.', effect: 'Deploys stationary Cnidarian: 2500 armor-piercing poison over 3s (3.5–4.5 tile radius) | +2 DEF, +4 DEX' },
      { name: 'Cnidaria Rod', hash: 'fc82s46', shinyHash: 'kBbYZFa', desc: 'An intricate scepter of unfathomable power containing the electric fluids of a jellyfish behemoth.', effect: 'Damage scales per target hit (120 base + 150 per additional) | WIS-scaling targets | +2 DEF, +2 DEX, +2 WIS' },
    ],
  },
  {
    name: 'Parasite Chambers', slug: 'parasite-chambers', hash: 'O43mDnf', tier: 3, color: '#9E9D24', bg: '#101000',
    whites: [
      { name: 'Recurring Terror Spell', hash: 'zi9K9k1', shinyHash: 'wYKq3ii', desc: 'Believed to have been lost in a bygone era — recovered from ruins infested by horrific creatures.', effect: '8 parametric shots | 300–350 dmg each | Pass Cover | -20 HP, +2 ATK, +4 DEX, -5 VIT' },
      { name: 'Scepter of Devastation', hash: 'SvWphtM', shinyHash: 'VZE8c5W', desc: 'A loathsome scepter that converges the life energy of parasites into a soul-rotting bolt of destruction.', effect: '200 dmg (+10/WIS>50) | ATK-scaling shockblast | -20 HP, +4 ATK, -5 VIT, +2 WIS' },
      { name: 'Maw of Malignance', hash: 'ivmU6yl', shinyHash: 'dH3VJM1', desc: 'Deep within the blood, cartilage, and twisted bone lies the cranium of a once-human victim.', effect: 'MP: 100 | +60 HP, +4 SPD, +4 VIT | Summons minion + stationary maw (50 HP/s to 5 players)' },
    ],
  },
  {
    name: 'Sulfurous Wetlands', slug: 'sulfurous-wetlands', hash: '88fMxeA', tier: 3, color: '#F9A825', bg: '#181000',
    whites: [
      { name: 'Brambletooth Tachi', hash: '9DGwJKM', shinyHash: 'qFAAJ2Z', desc: 'A heavily serrated blade studded with thorns from the ravenous plants of the Sulfurous Wetlands.', effect: '2×75–105 dmg | 140% RoF | Piercing | Boomeranging shots pass through obstacles' },
      { name: 'Bogwood Crook', hash: 'LNBvq4L', shinyHash: 'SnKzGNQ', desc: 'This ornate herding staff was warped beyond mortal comprehension due to prolonged influence of the twisted beings of the Wetlands.', effect: '3-shot: 1 center 95–145 dmg + 2 sides 40–65 dmg armor-piercing | Converging shots' },
      { name: 'Warped Mantle', hash: '4SrAZ1u', shinyHash: 'pIhnMij', desc: 'A sickly piece of armor, grown from the twisted bark from one of the few remaining Ent Ancients.', effect: '+18 DEF, +6 VIT | Reactive: Healing 4s when shooting in combat (10s CD)' },
      { name: 'Sulfuric Stone', hash: '4rBV117', shinyHash: 'ZQVdiL7', desc: 'A peculiarly weathered rock — this makeshift snare is unmatched in power, but it activates on its own terms.', effect: '250 AP impact + 575 sticky dmg | Always explodes after 2s | +25 HP, +25 MP' },
      { name: 'Thistleleaf Necklace', hash: 'Q0CmiSC', shinyHash: '5ud7G0F', desc: 'This necklace once signified the everlasting bond between two people — carries with it an aura of spite and anguish.', effect: '+90 HP, +5 DEF | On-hit: 150 dmg spore | On-shoot: 175 dmg + 75 bleed over 4s' },
    ],
  },
  {
    name: 'Mountain Temple', slug: 'mountain-temple', hash: 'fGgckZI', tier: 3, color: '#8D6E63', bg: '#100c0a',
    whites: [
      { name: 'Wand of the Fallen', hash: 'Y0owA0u', shinyHash: 'FLVNqWK', desc: 'Made from a cherry tree branch. This wand was gifted by Xil to Daichi for bringing him into this world.', effect: '205–240 dmg | 85% RoF | 6.6 tiles range' },
      { name: 'Orb of Aether', hash: 'dLSVqgP', shinyHash: 'D3A4TYU', desc: 'This Orb creates a concentrated area of energy. The energy is so dense at its core that foes are paralyzed.', effect: 'Spawns Aether Trap: Slowed (4.5 tiles, 5s) + Paralyzed (2.5 tiles, 2s)' },
      { name: 'Jade Storm', hash: 'w8lcI3O', shinyHash: 'YYsbzJI', desc: 'A grand scroll capable of summoning sharpened emerald shards, slicing through even the most durable opponent.', effect: '5-shot piercing spell (70° arc) | 475–900 dmg per shot | Pass Cover' },
      { name: 'Kaiken', hash: 'Ka2tVF9', shinyHash: 'w65VAPB', desc: 'Still believing himself a monk, Daichi could not bear to abandon his wicked material weapon, and so forever concealed it.', effect: 'Sheath: 8×200 dmg (pierce) | Dash (1–5 tiles, 3 dashes, 1600 trail dmg) | Slows 2s | +4 DEX, +4 ATK' },
    ],
  },
  {
    name: 'Lair of Draconis', slug: 'lair-of-draconis', hash: 'QjX8g5O', tier: 3, color: '#FF7043', bg: '#1a0a04',
    whites: [
      { name: 'Leaf Dragon Hide Armor', hash: 'voSE8ih', shinyHash: 'ZhXLJpj', desc: 'Light armor crafted from the hard-as-steel leafy scales of a Leaf Dragon.', effect: '+14 DEF, +50 HP, +6 SPD, +5 VIT | Reactive: +15 DEF for 5s on ability use' },
      { name: 'Water Dragon Silk Robe', hash: 'gqVpc9Y', shinyHash: 'mrM7RNi', desc: "A magic robe woven from enchanted threads of crystalline silk from a great Water Dragon's body.", effect: '+6 ATK, +13 DEF, +6 SPD, +5 VIT | Reactive: heals 90 HP + Healing 30/s below 80% HP on ability use' },
      { name: 'Fire Dragon Battle Armor', hash: 'SOFbGGp', shinyHash: 'scMzjBE', desc: 'Battle armor made from Fire Dragon scales, one of the strongest substances this world has ever seen.', effect: '+6 ATK, +17 DEF, +6 SPD, +5 VIT | Reactive: 500 burst + 1000 poison dmg to nearby enemies on proc' },
      { name: 'Celestial Blade', hash: 'sBelbn9', shinyHash: 'hy15B9y', desc: 'An ancient weapon imbued with the power of the cosmos.', effect: '205–225 dmg katana | 5.2 tiles range | Wavy shots' },
      { name: 'Midnight Star', hash: 'lc5NZhj', shinyHash: 'M7ICNcc', desc: 'Legends speak of a star touched by Horizon, imbuing his hatred as inky black darkness to forge a dark myth into reality.', effect: '4×400–500 dmg | Piercing + Pass Cover | +10 SPD' },
      { name: 'Vision of Draconis', hash: '6bFvA7S', shinyHash: 'ds8Es8z', desc: 'The gaze of the mighty watches intensely over the world, waiting for the power of Draconis to rise once again.', effect: 'Orb: summons up to 3 controllable Gazes of Draconis | Applies Curse | 160 dmg/burst over 6.8s' },
    ],
  },
  {
    name: 'Tomb of the Ancients', slug: 'tomb-of-the-ancients', hash: 'E6a3nHx', tier: 3, color: '#F39C12', bg: '#1a0e00',
    whites: [
      { name: 'Tome of Holy Protection', hash: 'Cn1Clyi', shinyHash: 'lpy8kCs' },
      { name: 'Ring of the Pyramid', hash: 'AGFZBiz', shinyHash: 'OH2l5e5', desc: 'The dolomite stone makes you feel able to stand against anything.', effect: '+4 ATK, +4 DEF, +100 HP | All-purpose endgame ring' },
      { name: 'Ring of the Sphinx', hash: 'bevUSZ5', shinyHash: 'P8XkoLf', desc: 'The malachite stone makes you feel at peace with the land.', effect: '+4 ATK, +4 DEX, +100 MP | Reduces ability cost by 10%' },
      { name: "Pharaoh's Requiem", hash: 'wcUJKHq', shinyHash: '5A30qUZ', desc: 'An unusually crafted lute meant to produce soothing sounds of deep sleep and keep wrathful gods dormant.', effect: 'Lute: Inspired to party (4s) + Pharaoh Wrath mask | Reactive: Armored+Weak on taking 50+ dmg | +4 DEF, +4 VIT' },
      { name: 'Ring of the Nile', hash: 'fzBe6X1', shinyHash: 'SdHaknL', desc: 'The azure stone makes you feel ready for any situation.', effect: '+4 WIS, +4 DEX, +75 HP, +75 MP | Balanced hybrid ring' },
    ],
  },
  {
    name: 'The Third Dimension', slug: 'third-dimension', hash: 'Z5CG76m', tier: 3, color: '#7B1FA2', bg: '#0e0414',
    whites: [
      { name: 'Cloak of Cubic Enigma', hash: 'V27k4Sz', shinyHash: 'rZM1iMb', desc: 'A bulky cloak ill-suited for stealth, but can provide the wearer with great offensive capabilities.', effect: '5s invisibility + Shadow Burst (600 dmg per burst every 0.4s, 4.5 tile radius while invis) | +5 DEF' },
      { name: 'Shadow Serpent Sidearm', hash: 'bURNlfK', shinyHash: 'T3XxcI8', desc: 'An angular wakizashi crafted from the core of the Shadow Cube God — can unleash a devastating onslaught.', effect: '550–650 dmg/shot | Pierce + Armor Pierce | Exposed 3s | +50 HP, +5 VIT' },
      { name: 'Seal of Cubic Conundra', hash: 'pXO3kh8', shinyHash: 'ujfGL1Z', desc: 'A seal granting the user access to other dimensions, though the means by which this is accomplished are unknown.', effect: 'Party heal + dmg buff (4.5 tiles, 4s) + enemy Slow (3.5 tiles, 4s) | +50 HP, +3 DEF' },
    ],
  },
  {
    name: 'Lair of Shaitan', slug: 'lair-of-shaitan', hash: 'px7FwlI', tier: 3, color: '#B71C1C', bg: '#1a0404',
    whites: [
      { name: 'Skull of Endless Torment', hash: 'XSUsjgZ', shinyHash: 'BVNenwk', desc: 'This skull glows with the stolen soul of a phoenix trapped many years ago by Shaitan.', effect: '+50 HP, +3 DEF, +3 DEX | 250 dmg (+20/WIS>50) | Heals 80 HP | Full meter: summons minions + purifies' },
      { name: 'Wakizashi of Crossing Fires', hash: 'oSQ2Xq5', shinyHash: 'Yeb94mL', desc: 'A blade created within the Hellforge and enchanted with dark magics to grant its wielder the power of a demon king.', effect: '6×400–450 dmg | Exposed 3s | Piercing | +8 ATK, +2 VIT' },
      { name: 'Igneous Starblossom', hash: 'MIf51tv', shinyHash: 'tWLTqB4', desc: 'It is believed that astral stardust landed during the Primal Era, giving life to these now-extinct flowers.', effect: '2×325–525 dmg | Plants Igneous Bomb (1000 dmg, 3.5 tile radius) | +4 SPD, +9 VIT' },
    ],
  },
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
  {
    name: 'High Tech Terror', slug: 'high-tech-terror', hash: '2SwppYx', tier: 3, color: '#00BFA5', bg: '#001814',
    whites: [
      { name: 'C.L.A.W.', hash: 'QhCXx6o', desc: 'A highly versatile tool modified from what was once just a vial holder — equipped with blades for any situation.', effect: '3-shot burst (80–110 dmg each) | 200% RoF | Armor-piercing | ST Scientific Summoner Set' },
      { name: 'B.O.O.M.', hash: 'fqNi03h', desc: 'Development of this compact M.E.R.V. took an explosive turn.', effect: 'Summons Wandering M.E.R.V. that explodes for 1250 dmg after 5s, fires paralyzing shots | ST Scientific Summoner Set' },
      { name: 'A.R.M.O.R.', hash: 'XoFFZfe', desc: 'Not to be confused with a more traditional lab coat, this robe is steeped in chemicals to protect from radiation.', effect: '+5 ATK, +12 DEF, +5 SPD, +10 VIT | ST Scientific Summoner Set' },
      { name: 'C.O.N.T.R.O.L.L.E.R.', hash: 'NTx7xLN', desc: 'This feat of technology enables approved users to control all primary functions of the lab facility.', effect: '+50 HP, +8 DEF, +5 SPD | ST Scientific Summoner Set' },
    ],
  },
  {
    name: 'Ice Citadel', slug: 'ice-citadel', hash: 'WDJobOf', tier: 3, color: '#80DEEA', bg: '#081418', exalt: true,
    whites: [
      { name: 'Staff of Esben', hash: 'LBDSDfB', desc: 'Perhaps all that remains of Esben, whoever he was.', effect: '2×70–105 dmg | Chargeable: 1500–1800 dmg, armor-ignore, Vulnerability 3s | +3 DEF' },
      { name: 'Skullish Remains of Esben', hash: 'Ytpddcl', desc: 'The skull still seems to contain some of the Void Entity\'s power.', effect: 'Summons Esben Undead: 170–255 dmg, Slowed | +40 HP, -3 SPD, +4 ATK' },
      { name: "Esben's Vows", hash: 'es4f5XM', desc: 'A hardy slab of ice wounded with crude markings — passionate wedding vows are faintly readable.', effect: 'Giant icicle → 6 shards (600–650 dmg) + 12 AP shards (100 dmg + 5% Vulnerability 5s) | +5 DEF' },
      { name: "Ase's Echo", hash: 'flXR895', shinyHash: 'aIy6KF5', desc: 'A fragmented prism constantly mending its cracks — creates an unstable link between two spaces.', effect: 'Mark location with Berserk aura (3 tiles) | Teleport back + 1000 dmg AoE + Armored (5 tiles, 5s)' },
      { name: "Esben's Twisted Heart", hash: 'mN3aGBc', shinyHash: '6uZBSK3', desc: 'The frostbitten winds whisper her name, and the blades sing of her sorrow.', effect: '7×250–350 dmg armor-pierce | Initial 1000 dmg | Passes through obstacles' },
      { name: "Esben's Shaman Attire", hash: 'V8pfKqe', shinyHash: 'uBrB6CN', desc: 'A glacial robe worn by the witch doctors of a bygone ice tribe, encased in a layer of permafrost.', effect: '+15 DEF, +60 HP, +6 ATK | 40% chance to Slow nearby enemies 5s on taking damage' },
      { name: "Esben's Wedding Ring", hash: 'hIN9shz', desc: 'A memento of a life long gone — still feel the warmth from years past through the frigid ice.', effect: '+80 HP, +80 MP, +10 ATK, -5 DEF | Reactive: Damaging 1s when shooting while Berserk' },
    ],
    reds: [
      // Nordic Knight Set
      { name: "Dalvar's Battle Axe", hash: 'ol4BPNH', desc: 'Elite Viking warriors and guards were given these great battle axes to use in combat. The mighty Dalvar, strongest of all the Vikings, was known to cut through enemy defenses with this finely balanced weapon.', effect: '205–225 dmg | 120% RoF | Enhances Gjallarhorn synergy | Nordic Knight Set' },
      { name: 'Sunken Buckler', hash: '3BojTMs', desc: 'Recovered from the wreckage of a Viking ship, this large buckler can strike unlike any other shield.', effect: 'MP: 100 | +10 DEF, +8 SPD, +4 VIT | 165–185 dmg, stuns 2.5s | 10 piercing shots | Nordic Knight Set' },
      { name: 'Chainmail Body Armor', hash: 'P6WDyFQ', desc: 'Painstakingly forged through an immeasurable amount of iron rings linked together, this armor allows its wearer to remain more agile and flexible than traditional armors.', effect: '+20 DEF, +6 SPD, +6 VIT | Nordic Knight Set' },
      { name: 'Gjallarhorn', hash: 'vZsjila', desc: 'A ceremonial horn gifted to the Vikings from their ancient gods. Blowing it is said to temporarily bestow to the owner the power of Odin.', effect: '+80 HP, +4 ATK | Proc: Berserk 5s on ability use | Armored 5s when below 50% HP on shoot | Nordic Knight Set' },
      // Frost Harbinger Set
      { name: 'Heartsteel Claymore', hash: 'BC8ab8F', desc: 'The harbinger will tread through the Tundra, uncaring of the life that may have ended at the hands of the deepsteel blade.', effect: '325–375 main + 150–200 secondary shots | 60% / 20% RoF | Frost Harbinger Set' },
      { name: 'Symbol of the Lost', hash: 'Mlhmplw', desc: 'To whom this symbol belonged, and what it may have represented, remains a mystery. It serves as a grim reminder of the world unobserved, cloaked in the endless snow.', effect: 'MP: 100 | +6 DEF, -5 SPD | Summons Frostborn Crystal (9s): 42 AP shots, cold snap slows 7-tile radius | Frost Harbinger Set' },
      { name: 'Hull of the Tundra', hash: 'USGeKZU', desc: 'The armor from the pitiful resistance was absorbed into this endless deepsteel plate. As the blizzard rages on, the plates grow ever more dense.', effect: '+45 HP, +45 MP, +19 DEF | Summons 250-dmg snowflakes on 25+ damage taken | Frost Harbinger Set' },
      { name: 'Frozen Heart', hash: 'EKcUIYg', desc: 'In the white wastes, Squall answers no prayers, spares no lives, and grants no solace.', effect: '+32% HP equal to MP, +16% MP equal to HP, -5 SPD | On ability use: boosts ally DEF +9 for 9s | Frost Harbinger Set' },
      // Frost Advisor Set
      { name: 'Iceborn Arsenal', hash: 'SJTrMgB', desc: 'The harbinger will tread through the Tundra, uncaring of the life that may have ended at the hands of the deepsteel blade.', effect: 'ST Katana | 54–100 (spinner) + 100–130 (slash) dmg | Piercing, armor-piercing | Frost Advisor Set' },
      { name: 'Sublimation Sidearm', hash: 'Em6bbdl', desc: "The Harbinger's power was used to sublimate icicles along this blade, sending many sharp projectiles towards potential foes.", effect: 'ST Wakizashi | Escalating combo: 100–150 → 150–200 → 250–300 → 350–400 dmg | +50 HP equip | Frost Advisor Set' },
      { name: "Retainer's Battlesuit", hash: 'yep6rx1', desc: 'The suit, capable of withstanding the great cold, represented a pact between a mortal and an ever-living elemental being.', effect: '+16 DEF, +7 DEX, -6 VIT | Proc: ATK Boost + DEX Boost 5s on ability use | Frost Advisor Set' },
      { name: "Legacy's Pendant", hash: '8o6RoCj', desc: 'Perhaps at some point, a man wore this pendant in search of something that humans could possibly offer. As the pendant lost meaning, it became a reminder of what he sought.', effect: '+120% HP equal to DEX, +0.6% DEX equal to Max HP, -6 VIT | Proc: Berserk 3s on 40+ dmg | Frost Advisor Set' },
    ],
  },
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
    cyans: [
      { name: 'Kogbold Inventor Archer Set Shard', hash: 'NByvIQL', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Kogbold Turretsmith Archer Set (craft via Forge)' },
      { name: 'Kogbold Pyrotechnician Wizard Set Shard', hash: '5sVDNqF', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Kogbold Pyrotechnician Wizard Set (craft via Forge)' },
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
    cyans: [
      { name: 'Amber Honeycomb', hash: '9IiTLSS', desc: 'A perfectly preserved honeycomb tainted with a sinister power.', effect: 'Enchanting artifact — 50% consumption rate | Boosts DEX mods ×9 and Living Hive/Buzzing Bullets/Apitoxin awakened mods ×15' },
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
      { name: 'Cave Dweller Trap', hash: 'J0lgclR', shinyHash: 'EiYJfvq', desc: 'A ceremonial trap used by the elite members of the Mushroom Tribes to ensnare those who trespass their sacred sanctum.', effect: 'MP: 80 | +6 ATK | Spawns Crystal Sentry: 450 dmg/0.8s for 5s (single-target, cannot miss)' },
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
      { name: 'Fractal Blades', hash: 'xh99uQc', shinyHash: 'SsqaghD', desc: 'An impossibly intricate pattern belies these blades, carved from a self-perfecting crystalline deity.', effect: '2 fast shots (75–105 dmg, 20t/s) + 4 short-range shots (55–75 dmg, 8t/s) | All piercing, pass cover' },
      { name: 'Cloak of Refraction', hash: 'P4v3VhO', shinyHash: 'ym3CSRa', desc: 'This heavy cloak cleverly conceals its user not by magic, but by channeling the light around them as camouflage.', effect: 'MP: 90 | +3 DEF, +10 SPD | Summons 3 mirror images (200–300 dmg, pierce) + 5s invisibility | Lethal Strike on exit' },
      {
        name: 'Echoes Prism', hash: 'Wh0Uqt5',
        desc: 'A fragmented prism constantly mending its cracks and refracturing. When agitated, it ejects volatile shards until each fragment spirals back into equilibrium.',
        effect: '+40 HP, +4 DEF, +4 DEX | MP: 110 | Summons Echo Shards (3 max, 15s): armor-piercing shots + decoys enemies',
      },
      {
        name: 'Fractured Gemstone Wakizashi', hash: 'd6dBKvS', shinyHash: '3Oo8WA0',
      },
      { name: 'Star of Enlightenment', hash: '98qG4Er', shinyHash: 'UneFotS', desc: 'A perfectly cut crystal encasing light from the oldest stars in the universe. All who hold it are filled with a sense of peace and concentration.', effect: '+5 DEX, -10 SPD | Hold: +4 DEX, Berserk (24 MP/s) | Release: 1500–2000 dmg single shot, pass cover' },
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
    cyans: [
      { name: 'Plague Doctor Priest Set Shard', hash: 'sLJvOcV', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Plague Doctor Priest Set | Drops from Griefkeeper Zole and Doctor Lobotomik' },
      { name: 'Alchemist Assassin Set Shard', hash: 'wDvuAVu', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Alchemist Assassin Set | Drops from Overseer Oculon and Groundskeeper Gretch' },
      { name: 'Spellbound Soulthief Set Shard', hash: '11MbgxZ', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Spellbound Soulthief Trickster Set | Drops from Soulwarden Murcian' },
      { name: 'Vial of Soul Extract', hash: '36SfuyX', desc: 'A luminescent vial containing an eerie liquid, extracted through the complete pulverization of a soul.', effect: 'Forge material — upgrades Haunted Cemetery UT items to enhanced versions' },
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
    ],
    reds: [
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
    ],
    reds: [
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
    reds: [
      // Shaman Necromancer Set
      { name: "Shaman's Staff", hash: 'ZbS4u0i', desc: 'A twisted staff adorned with bones and dark charms, said to channel the spirits of fallen shamans.', effect: 'Wisp: 155–180 dmg, 80% RoF | Pierce: 120–140 AP dmg, 55% RoF | Wavy primary shots | Shaman Necromancer Set' },
      { name: 'Ritual Skull', hash: 'nT3kq3u', desc: 'The skull of an alligator, used to house spirits summoned through wicked rituals.', effect: 'MP: 100 | +4 ATK, +2 DEX | Raises 1 Ritual Undead + ritual circle (225–1650 dmg/s) | 6s CD | Shaman Necromancer Set' },
      { name: 'Ragged Robes', hash: '1jKG8hb', desc: 'Robes pieced together from coarse, ragged cloth, adorned with decorative bones and cursed trinkets.', effect: '+11 DEF, +3 ATK, +5 DEX | Shaman Necromancer Set' },
      { name: 'Fang Necklace', hash: 'iU3z5Kn', desc: 'A necklace of fangs stolen from vicious swamp creatures. The predatory strength of the beasts empowers the wearer.', effect: '+4 ATK, +4 DEX, +5 VIT | Blood Offering: grants Berserk to Ritual Circle | Shaman Necromancer Set' },
      { name: 'Soul Gem Amulet', hash: 'rXuHxFT', desc: 'An amulet housing a powerful soul. It calls out and draws wandering spirits towards the wearer.', effect: '+4 ATK, +4 DEX, +5 VIT | Soul Offering: Ritual Circle inflicts Slowed | Shaman Necromancer Set' },
      // Mad Minotaur Set
      { name: 'Fury Flail', hash: 'wcjhwxu', desc: 'Unleash destruction with this brutal flail. Its massive anvil end shatters armor and crushes foes, whispering of an untamed, cataclysmic force.', effect: '300–345 main + 2×55 chain shots | 60% RoF | Inflicts Bleeding 3s | Mad Minotaur Set' },
      { name: 'Shockwave Shield', hash: 'VO3QpZx', desc: "Imbued with the untamed power of the Mighty Minotaur, this shield leaves a feeling of despair to those unfortunate enough to be in its presence.", effect: 'MP: 100 | +10 DEF | 500 dmg (4-tile range) | Stuns 3s + Slows 3s | Mad Minotaur Set' },
      { name: 'Cyclone Chestplate', hash: 'vcpasZB', desc: 'This mythical Minotaur chest plate infuses your weapon with a speed that mirrors the guardians of ancient labyrinths, making you the calm yet devastating eye of the cyclone.', effect: '+50 HP, +17 DEF, +4 DEX, +4 VIT | Mad Minotaur Set' },
      { name: 'Brass Knuckles', hash: 'bTzGnoH', desc: 'Slip on these savage knuckles and unleash a whirlwind of swings, each powered by an uncanny dexterity that leaves foes questioning what hit them.', effect: '+30 HP, +7 DEF, +6 DEX | Mad Minotaur Set' },
      // Astral Arcanist Set
      { name: 'Nebular Rod', hash: 'laDuXga', desc: 'A pristine cloud of nebular stardust gently rests atop a focusing rod in a tranquil stasis, until it is catalyzed into a microscopic genesis of stellar proportions.', effect: '140–168 dmg | 75% primary / 21% secondary RoF | Astral Arcanist Set' },
      { name: 'Cosmic Astrolabe', hash: 'LmcZIBd', desc: 'A glassy projection of arcanic lights provides an accurate chart of the stars beyond the Realm, enabling travel along ley lines of starlight.', effect: 'MP: 180 | Teleport to cursor + Star Fire 185–315 dmg | Curse 4–6.5s + Stasis 5s | Astral Arcanist Set' },
      { name: "Astronomer's Gown", hash: 'xFAergr', desc: "What was once the simple vestments of an astronomer have become a curtain of stardust and dreams, a priceless record of countless journeys through worlds that may never be visited again.", effect: '+15 DEF, +7 ATK | Proc: Energized 3.6s on ability use (5.6s with Eye of Divination) | Astral Arcanist Set' },
      { name: 'Eye of Divination', hash: 'fUEyz7a', desc: 'A crystalline formation in the shape of an eye, the sole artifact of a journey whose true purpose was a secret beyond the stars.', effect: '+120% HP equal to ATK, +120% MP equal to ATK | Astral Arcanist Set' },
    ],
    cyans: [
      { name: 'Shaman Necromancer Set Shard', hash: '0lY3QH9', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Shaman Necromancer Set | Drops from Treasurer Gemsbok and Archbishop Leucoryx' },
      { name: 'Mad Minotaur Set Shard', hash: 'zIHpp8b', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Mad Minotaur Set | Drops from Chancellor Dammah and Chief Beisa' },
      { name: 'Astral Arcanist Set Shard', hash: '7MTHRqz', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Astral Arcanist Set | Drops from Oryx the Mad God 3' },
    ],
  },
  {
    name: 'Heroic Undead Lair', slug: 'heroic-undead-lair', hash: 'z4UFKSh', tier: 3, color: '#B0BEC5', bg: '#0e1014',
    whites: [
      { name: 'Doom Bow', hash: '3GjgWJy', shinyHash: 'HwN2J4b', desc: 'No mortal can fire this dreaded bow without resting in between shots. It requires tremendous skill to wield.', effect: '500–600 dmg | 33% RoF | Piercing | Highest single-shot bow damage in the game' },
      { name: 'Spectral Sword', hash: 'qEH9QJi', shinyHash: 'YymwPKB', desc: 'This ghastly blade has the power to emit waves of energy that dance like wraiths in the dark.', effect: '2×100–125 dmg | +4 VIT | Circular shot motion' },
      { name: 'Wandering Souls Spell', hash: 'oggehEg', shinyHash: 'qRkHFvh', desc: 'Shaping raw magic into spirit-like forms, phantasmal projectiles homing in on the target with precision.', effect: '+3 DEF, +3 SPD | 6 homing piercing shots | 345–500 dmg each | 20% chance to summon Wandering Soul' },
      { name: 'Bow of the Morning Star', hash: 'NhighV0', desc: 'A bow of light forged by the angels for use in their eternal struggle against darkness and evil.', effect: '500–600 dmg | 33% RoF | Piercing | Heroic reskin of Doom Bow' },
      { name: 'Ring of Skeletal Specters', hash: 'N2dLIwb', shinyHash: 'gxRxpjm', desc: 'A ghastly ring that calls upon the eager hands of an impossible undead creature.', effect: '+80 HP, +3 ATK, +7 WIS | On taking 20+ dmg: spawns hands (150 dmg, 6 tiles) + Slows 0.8s' },
    ],
  },
  {
    name: 'Infernal Abyss of Demons', slug: 'infernal-abyss', hash: 'waeR46M', tier: 3, color: '#FF5252', bg: '#1a0404',
    whites: [
      { name: 'Demon Blade', hash: 'UcQg1tr', shinyHash: 'wJVXIxO', desc: 'A swift and hungry blade that is never satisfied with just one kill.', effect: '2×150–175 dmg (25° arc) | Ranks among top swords when both shots connect' },
      { name: 'Sword of Illumination', hash: 'y3rTci5', desc: 'A sword that, when held by one true of heart, will release magic and ignite in flames.', effect: '2×150–175 dmg | Demon Blade reskin | Awakened: Hellfire Edge (3 hellfire slashes)' },
      { name: "Berserker's Breastplate", hash: '3wfhQpf', shinyHash: 'CKYbX3e', desc: 'This armor is donned by the Brutes of the Abyss, focusing narrowly on pure offensive power.', effect: '+20 DEF, +4 ATK | Reactive: ATK boost scaling with HP loss (+3/+6/+9 ATK at 90/70/50% HP)' },
      { name: 'Adamantine Helm', hash: 'C3ZF6hy', shinyHash: '7gMgZ2W', desc: 'A masterpiece of craftsmanship, forged in the fires of the volcanic abyss.', effect: 'Party Berserk + Healing 5s (5 tiles) | Self: +20 VIT Boost 5s | +10 DEF, +4 ATK, +4 VIT' },
      { name: 'Volcanic Sheath', hash: 'b66TXPg', shinyHash: '73swD8N', desc: 'Archdemon Malphas took a conspicuous liking to this outsider\'s sheath, smuggled in by a newly demonic soul.', effect: 'WIS-scaling dash (400 dmg, 4 tiles) | 1200 trail dmg | 3 dashes, 2s CD | +5 WIS' },
    ],
  },
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
      { name: 'Green Beehemoth Quiver', hash: 'hTphc7t', shinyHash: 'IuqjM6h', desc: 'A quiver crafted from the remains of a green Beehemoth, filled with razor-sharp arrows fashioned from Killer Bee stingers.', effect: 'MP: 90 | +3 ATK, +3 DEX | 3×300–420 dmg (DEX scales) | Piercing + Pass Cover | Inflicts Slowed 5s' },
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
      { name: 'Green Beehemoth Armor', hash: 'PClEmpg', desc: 'Chitin armor fashioned from the exoskeleton of a Green Beehemoth. Ultra-light and extremely flexible, yet surprisingly tough.', effect: '+60 HP, +18 DEF, +5 SPD, -5 VIT | Living Hive proc: releases bees when hit for 40+ dmg (2s CD) | Exclusive to Plagued Nest' },
    ],
    cyans: [
      { name: 'Amber Honeycomb', hash: '9IiTLSS', desc: 'A perfectly preserved honeycomb tainted with a sinister power.', effect: 'Enchanting artifact — 50% consumption rate | Boosts DEX mods ×9 and Living Hive/Buzzing Bullets/Apitoxin awakened mods ×15' },
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
      { name: 'Kogbold Multitool', hash: 'Ot9Xoe5', shinyHash: 'J0Tul3O', desc: 'The KI132 Bladed Multitool finds its way into the hands of many Kogbold Engineers. Equipped with blades for any situation, as well as a handy pair of pliers.', effect: '3 modes (hold Shift): Sweep (12 shots, Exposed 4s, +10 DEX) | Strike (6 converging shots, 450–550 dmg) | Shield (8 circling shots, 400–500 AP dmg, +10 DEF)' },
      {
        name: 'Kogbold Enhancement Core', hash: 'AHGKQwy', shinyHash: 'isUOrSE',
        desc: 'A well machined object said to give the Kogbolds their strength.',
        effect: 'Forge material — upgrades 7 UT weapons into enhanced versions (Doom Bow, Void Blade, Socket Blade, and more)',
      },
    ],
    reds: [
      // Kogbold Turretsmith Archer Set
      { name: 'Experimental Cannon', hash: 'bB3OmG9', desc: 'This firearm was created as an experiment by welding two double-barrelled cannons together. One of the barrels fell off when first fired, but the other three work fine.', effect: '3 shots × 95–115 dmg | Burst of 4, armor-piercing | Gun Turrets fire 2 extra projectiles | +2 SPD | Turretsmith Archer Set' },
      { name: 'Sentry Turret', hash: 'xsrkxXI', desc: 'Turretsmiths innovate new automated defence measures to help protect the Steamworks, from rapid firing cannons to multiple flails attached to a spinning post.', effect: 'MP: 100 | +5 DEF | Deploys gun turret + spinning flail turrets + heavy cannon (cone pattern), 6s | Turretsmith Archer Set' },
      { name: "Tinkerer's Apron", hash: 'fSu8aoJ', desc: 'This apron has many pockets containing supplies, pencils, blueprints and plenty of reloads. Each pocket has its own leather pocket protector.', effect: '+80 MP, +16 DEF, +4 SPD | Flail Turrets gain extended chains | Turretsmith Archer Set' },
      { name: 'Targeting Monocular', hash: 'JsFC1ms', desc: 'Wearing this brass monocle allows a Turretsmith to see down their turret sights, granting greater accuracy at the expense of personal style.', effect: '+50 HP, +8 DEF | Target Analysis: Heavy Turret deals 350–525 dmg, applies Slowed 0.2s every other shot | Turretsmith Archer Set' },
      // Kogbold Pyrotechnician Wizard Set
      { name: 'Rocket Launcher', hash: '4PIEZSR', desc: 'Kogbold rockets are highly explosive. The inaccurate nature of the weapon is made up for by the sheer volume of shots launched at once.', effect: '2 shots × 80–95 + 100–120 dmg | 85% RoF | Armor-piercing, piercing | Pyrotechnician Wizard Set' },
      { name: 'Unstable Firework', hash: 't9KnFI3', desc: 'The Pyrotechnicians often get distracted by the pretty colours of a violently detonating firework. This one is particularly unpredictable.', effect: 'MP: 90 | +3 DEX | 6 barrages of 8 shots (60–90 dmg each, avg 3600 total) | 27 tiles/sec | Pyrotechnician Wizard Set' },
      { name: 'Blast Proof Robes', hash: 'SnvaFhz', desc: 'You are not a true Pyrotechnician until you can prove your robes can withstand several exploding experiments.', effect: '+70 HP, +10 DEF, +2 DEX | Pyrotechnician Wizard Set' },
      { name: 'Lucky Grenade', hash: '8vGaqis', desc: 'This grenade was launched from a firework and failed to explode. It will release deadly sparks when shaken violently enough, but until then serves as a potent good-luck charm.', effect: '+75 HP, +5 DEX | High Explosive: fires cone of 150–175 dmg bullets toward cursor when placing Unstable Firework | Pyrotechnician Wizard Set' },
    ],
    cyans: [
      { name: 'Kogbold Inventor Archer Set Shard', hash: 'NByvIQL', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Kogbold Turretsmith Archer Set | Drops from Factory Control Core' },
      { name: 'Kogbold Pyrotechnician Wizard Set Shard', hash: '5sVDNqF', desc: 'Collect set shards to obtain a forge token and craft Set Tier items.', effect: 'Forge component → Kogbold Pyrotechnician Wizard Set | Drops from Kogbold Flying Machine' },
    ],
  },
];

export const TIER_META = {
  1: { label: 'Beginner',     color: '#4CAF50' },
  2: { label: 'Intermediate', color: '#FFC107' },
  3: { label: 'Advanced',     color: '#FF9800' },
  4: { label: 'Endgame',      color: '#E91E63' },
};

// Source: RealmEye wiki "Dungeon Difficulty" ratings (0–10 scale)
export const DUNGEON_DIFFICULTY = {
  'pirate-cave':                   1,
  'forest-maze':                   1,
  'spider-den':                    1.5,
  'forbidden-jungle':              1.5,
  'the-hive':                      2,
  'snake-pit':                     2.5,
  'sprite-world':                  2.5,
  'cave-of-a-thousand-treasures':  2.5,
  'ancient-ruins':                 2,
  'magic-woods':                   3,
  'beachzone':                     1.5,
  'candyland':                     3.5,
  'undead-lair':                   3.5,
  'puppet-masters-theatre':        4,
  'toxic-sewers':                  4,
  'cursed-library':                4,
  'mad-lab':                       4,
  'abyss-of-demons':               4,
  'manor-of-the-immortals':        4,
  'haunted-cemetery':              4.5,
  'davy-jones-locker':             5,
  'crawling-depths':               5.5,
  'the-tavern':                    5.5,
  'the-machine':                   4.5,
  'inner-workings':                3,
  'ocean-trench':                  5,
  'woodland-labyrinth':            5.5,
  'deadwater-docks':               5.5,
  'puppet-masters-encore':         5.5,
  'cnidarian-reef':                5.5,
  'parasite-chambers':             5.5,
  'sulfurous-wetlands':            6,
  'mountain-temple':               6,
  'lair-of-draconis':              6,
  'tomb-of-the-ancients':          6,
  'third-dimension':               6,
  'lair-of-shaitan':               6,
  'secluded-thicket':              6.5,
  'high-tech-terror':              6.5,
  'heroic-undead-lair':            6,
  'infernal-abyss':                6,
  'ice-citadel':                   7,
  'the-nest':                      7,
  'cultist-hideout':               7,
  'fungal-cavern':                 7.5,
  'crystal-cavern':                7.5,
  'moonlight-village':             9,
  'kogbold-steamworks':            8,
  'spectral-penitentiary':         8,
  'lost-halls':                    8,
  'the-void':                      8.5,
  'plagued-nest':                  8.5,
  'advanced-kogbold':              9,
  'the-shatters':                  10,
  'oryx-sanctuary':                9.5,
};

export const EXALT_ICONS = {
  Life:       '/icons/E7fAk0D.png',
  Mana:       '/icons/KtbJvSr.png',
  Attack:     '/icons/mGdE04P.png',
  Defense:    '/icons/tBkJPkc.png',
  Speed:      '/icons/Y6jFh6e.png',
  Dexterity:  '/icons/bek1jrl.png',
  Vitality:   '/icons/0waaxFx.png',
  Wisdom:     '/icons/dy9u9k4.png',
};

// Which exalt(s) each dungeon grants
export const DUNGEON_EXALTS = {
  'oryx-sanctuary':      ['Life'],
  'the-shatters':        ['Life', 'Mana', 'Attack'],
  'moonlight-village':   ['Life', 'Mana', 'Attack'],
  'the-void':            ['Mana'],
  'lost-halls':          ['Defense'],
  'cultist-hideout':     ['Speed'],
  'spectral-penitentiary': ['Attack'],
  'ice-citadel':         ['Speed'],
  'the-nest':            ['Dexterity'],
  'plagued-nest':        ['Dexterity'],
  'kogbold-steamworks':  ['Vitality'],
  'advanced-kogbold':    ['Vitality'],
  'fungal-cavern':       ['Wisdom'],
  'crystal-cavern':      ['Wisdom'],
};

// Small 8×8 portal icons used in the exaltation UI
export const EXALT_PORTAL_ICONS = {
  'oryx-sanctuary':      '/icons/0QgqbHI.png',
};
