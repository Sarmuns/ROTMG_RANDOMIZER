// DPS Engine — pure functions, no React deps.
//
// Weapon DPS formula (community standard):
//   shots_per_sec = weapon.rof * (1 + class.maxDex / 75)
//   avg_dmg_per_proj = (weapon.damage[0] + weapon.damage[1]) / 2
//   effective_dmg = max(1, avg_dmg_per_proj - defense)
//   weapon_dps = shots_per_sec * weapon.shots * effective_dmg
//
// Ability DPS formula:
//   type='damage': ability_dps = damagePerUse / cooldown
//                  if armorPierce: ignores defense
//                  else: effective_dmg = max(1, damagePerUse - defense * cooldown) / cooldown
//   type='buff':   uptime = duration / (duration + cooldown)
//                  sustained_mult = 1 + (dmgMult - 1) * uptime
//                  applies as a multiplier on weapon_dps

export function computeWeaponDPS(weapon, classStats, defense) {
  const shotsPerSec = weapon.rof * (1 + classStats.maxDex / 75);
  const avgDmg = (weapon.damage[0] + weapon.damage[1]) / 2;
  const effectiveDmg = Math.max(1, avgDmg - defense);
  return shotsPerSec * weapon.shots * effectiveDmg;
}

export function computeAbilityDPS(ability, defense) {
  if (!ability || ability.type === 'none') return 0;

  if (ability.type === 'damage') {
    if (ability.armorPierce) {
      return ability.damagePerUse / ability.cooldown;
    }
    // Defense applies once per use, then divided by cooldown for per-second rate
    const effectiveDmg = Math.max(1, ability.damagePerUse - defense);
    return effectiveDmg / ability.cooldown;
  }

  // 'buff' — no direct damage, returns 0 here; applied as multiplier in computeTotalDPS
  return 0;
}

export function computeBuffMult(ability) {
  if (!ability || ability.type !== 'buff') return 1;
  const uptime = ability.duration / (ability.duration + ability.cooldown);
  return 1 + (ability.dmgMult - 1) * uptime;
}

export function computeTotalDPS(weapon, ability, classStats, defense) {
  const weaponDPS = computeWeaponDPS(weapon, classStats, defense);
  const buffMult = computeBuffMult(ability);
  const boostedWeaponDPS = weaponDPS * buffMult;
  const abilityDPS = computeAbilityDPS(ability, defense);
  return boostedWeaponDPS + abilityDPS;
}

// Returns an array of { defense, dps } for defense 0..maxDef step 5
export function buildDPSCurve(weapon, ability, classStats, maxDef = 100) {
  const points = [];
  for (let def = 0; def <= maxDef; def += 5) {
    points.push({ defense: def, dps: Math.round(computeTotalDPS(weapon, ability, classStats, def)) });
  }
  return points;
}
