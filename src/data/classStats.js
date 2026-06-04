// Max stats at level 20, 8/8 for each class.
// weaponType determines which weapon pool is available.
// abilityType determines which ability pool is available.
// rof_mult = 1 + maxDex/75  (applied by dpsEngine)
export const CLASS_STATS = {
  Warrior:     { weaponType: 'sword',  abilityType: 'helm',        maxDex: 50, maxAtk: 50,  maxHp: 770,  color: '#D94040' },
  Knight:      { weaponType: 'sword',  abilityType: 'shield',      maxDex: 40, maxAtk: 40,  maxHp: 840,  color: '#4A7CC4' },
  Paladin:     { weaponType: 'sword',  abilityType: 'seal',        maxDex: 45, maxAtk: 45,  maxHp: 800,  color: '#F0A030' },
  Wizard:      { weaponType: 'staff',  abilityType: 'spell',       maxDex: 75, maxAtk: 75,  maxHp: 600,  color: '#5B8DD9' },
  Necromancer: { weaponType: 'staff',  abilityType: 'skull',       maxDex: 60, maxAtk: 60,  maxHp: 640,  color: '#7F8C8D' },
  Mystic:      { weaponType: 'staff',  abilityType: 'orb',         maxDex: 60, maxAtk: 50,  maxHp: 640,  color: '#C39BD3' },
  Summoner:    { weaponType: 'staff',  abilityType: 'book',        maxDex: 65, maxAtk: 60,  maxHp: 700,  color: '#27AE60' },
  Priest:      { weaponType: 'wand',   abilityType: 'tome',        maxDex: 50, maxAtk: 50,  maxHp: 640,  color: '#E8C96A' },
  Sorcerer:    { weaponType: 'wand',   abilityType: 'scepter',     maxDex: 65, maxAtk: 65,  maxHp: 620,  color: '#00C4CC' },
  Druid:       { weaponType: 'wand',   abilityType: 'spellbook',   maxDex: 55, maxAtk: 55,  maxHp: 680,  color: '#52BE80' },
  Rogue:       { weaponType: 'dagger', abilityType: 'cloak',       maxDex: 75, maxAtk: 50,  maxHp: 660,  color: '#8B4588' },
  Assassin:    { weaponType: 'dagger', abilityType: 'poison',      maxDex: 60, maxAtk: 60,  maxHp: 700,  color: '#9B59B6' },
  Trickster:   { weaponType: 'dagger', abilityType: 'prism',       maxDex: 75, maxAtk: 55,  maxHp: 620,  color: '#E91E8C' },
  Archer:      { weaponType: 'bow',    abilityType: 'quiver',      maxDex: 60, maxAtk: 55,  maxHp: 700,  color: '#4A9E6B' },
  Huntress:    { weaponType: 'bow',    abilityType: 'trap',        maxDex: 55, maxAtk: 55,  maxHp: 660,  color: '#E67E22' },
  Bard:        { weaponType: 'bow',    abilityType: 'lute',        maxDex: 60, maxAtk: 50,  maxHp: 660,  color: '#A9D44A' },
  Ninja:       { weaponType: 'katana', abilityType: 'star',        maxDex: 70, maxAtk: 70,  maxHp: 640,  color: '#C0392B' },
  Samurai:     { weaponType: 'katana', abilityType: 'wakizashi',   maxDex: 60, maxAtk: 65,  maxHp: 720,  color: '#E8543A' },
  Kensei:      { weaponType: 'katana', abilityType: 'sheathblade', maxDex: 65, maxAtk: 60,  maxHp: 680,  color: '#E8813A' },
};
