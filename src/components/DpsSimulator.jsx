import { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { CLASSES } from '../data/classes.js';
import { CLASS_STATS } from '../data/classStats.js';
import { WEAPONS } from '../data/weaponData.js';
import { ABILITIES } from '../data/abilityData.js';
import { RINGS } from '../data/ringData.js';
import { buildDPSCurve } from '../utils/dpsEngine.js';
import ClassSprite from './ClassSprite.jsx';
import ItemPickerModal from './ItemPickerModal.jsx';

const BUILD_COLORS = ['#60a5fa', '#f87171', '#4ade80', '#facc15'];
const MAX_BUILDS = 4;

function defaultBuild(idx) {
  const cls = CLASSES[idx % CLASSES.length];
  const stats = CLASS_STATS[cls.name];
  const weapons = WEAPONS[stats?.weaponType] ?? [];
  const abilities = ABILITIES[stats?.abilityType] ?? [];
  return {
    id: idx,
    className: cls.name,
    weaponId: weapons[weapons.length - 1]?.id ?? null,
    abilityId: abilities[abilities.length - 1]?.id ?? null,
    ringId: 'ring-t6-hp',
    includeAbility: true,
  };
}

// ── Item Slot button ─────────────────────────────────────────
function ItemSlot({ item, label, color, onClick }) {
  const hasSprite = item?.hash;

  return (
    <div className="dps-slot-wrap">
      <div className="dps-slot-label">{label}</div>
      <button className="dps-slot" onClick={onClick} style={{ borderColor: color + '40' }} title="Click to change">
        <div className="dps-slot-sprite">
          {hasSprite ? (
            <img
              src={`/items/${item.hash}.png`}
              alt={item.name}
              style={{ imageRendering: 'pixelated', width: 36, height: 36 }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          ) : (
            <div className="dps-slot-placeholder" />
          )}
        </div>
        <div className="dps-slot-info">
          {item ? (
            <>
              <span className="dps-slot-tier">{item.tier}</span>
              <span className="dps-slot-name">{item.name}</span>
            </>
          ) : (
            <span className="dps-slot-empty">None</span>
          )}
        </div>
        <span className="dps-slot-edit">✎</span>
      </button>
      {item && (
        <div className="dps-weapon-detail">
          {item.damage
            ? `${item.damage[0]}–${item.damage[1]} dmg${item.shots > 1 ? ` × ${item.shots}` : ''} · ${item.rof.toFixed(2)} rof`
            : item.type === 'damage'
              ? `~${item.damagePerUse} dmg/${item.cooldown}s${item.armorPierce ? ' (pierce)' : ''}`
              : item.type === 'buff'
                ? `×${item.dmgMult.toFixed(2)} dmg · ${item.duration}s/${item.cooldown}s`
                : 'No direct DPS'}
        </div>
      )}
    </div>
  );
}

// ── Build Panel ──────────────────────────────────────────────
function BuildPanel({ build, color, onChange, onRemove, canRemove }) {
  const [picker, setPicker] = useState(null); // 'weapon' | 'ability' | null

  const stats = CLASS_STATS[build.className];
  const weaponPool = stats ? WEAPONS[stats.weaponType] ?? [] : [];
  const abilityPool = stats ? ABILITIES[stats.abilityType] ?? [] : [];
  const selectedWeapon = weaponPool.find(w => w.id === build.weaponId);
  const selectedAbility = abilityPool.find(a => a.id === build.abilityId);
  const hasAbilityDPS = selectedAbility && selectedAbility.type !== 'none';

  const selectedRing = RINGS.find(r => r.id === build.ringId);
  const abilityItemsForPicker = abilityPool.map(a => ({ ...a }));

  function set(key, value) { onChange({ ...build, [key]: value }); }

  function onClassChange(name) {
    const newStats = CLASS_STATS[name];
    const newWeapons = newStats ? WEAPONS[newStats.weaponType] ?? [] : [];
    const newAbilities = newStats ? ABILITIES[newStats.abilityType] ?? [] : [];
    onChange({
      ...build,
      className: name,
      weaponId: newWeapons[newWeapons.length - 1]?.id ?? null,
      abilityId: newAbilities[newAbilities.length - 1]?.id ?? null,
    });
  }

  const cls = CLASSES.find(c => c.name === build.className);

  return (
    <>
      <div className="dps-build-panel" style={{ borderColor: color + '60', boxShadow: `0 0 12px ${color}22` }}>
        <div className="dps-build-header" style={{ borderBottomColor: color + '40' }}>
          <div className="dps-build-title" style={{ color }}>Build {build.id + 1}</div>
          {canRemove && (
            <button className="dps-remove-btn" onClick={onRemove} title="Remove build">✕</button>
          )}
        </div>

        {/* Class picker */}
        <div className="dps-build-class-row">
          {cls && <ClassSprite cls={cls} size={24} />}
          <select
            className="dps-select dps-class-select"
            value={build.className}
            onChange={e => onClassChange(e.target.value)}
          >
            {CLASSES.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        {stats && (
          <div className="dps-stat-row">
            <span className="dps-stat-chip">DEX {stats.maxDex}</span>
            <span className="dps-stat-chip">ATK {stats.maxAtk}</span>
            <span className="dps-stat-chip">HP {stats.maxHp}</span>
            <span className="dps-stat-chip dps-wep-type">{stats.weaponType}</span>
          </div>
        )}

        {/* Weapon slot */}
        <ItemSlot
          item={selectedWeapon}
          label="Weapon"
          color={color}
          onClick={() => setPicker('weapon')}
        />

        {/* Ability slot */}
        <div className="dps-ability-slot-row">
          <ItemSlot
            item={selectedAbility}
            label="Ability"
            color={color}
            onClick={() => setPicker('ability')}
          />
          {hasAbilityDPS && (
            <label className="dps-ability-toggle" title="Include ability DPS in graph">
              <input
                type="checkbox"
                checked={build.includeAbility}
                onChange={e => set('includeAbility', e.target.checked)}
              />
              <span>+DPS</span>
            </label>
          )}
        </div>

        {/* Ring slot */}
        <ItemSlot
          item={selectedRing}
          label="Ring"
          color={color}
          onClick={() => setPicker('ring')}
        />
      </div>

      {picker === 'weapon' && (
        <ItemPickerModal
          title={`Weapon — ${build.className} (${stats?.weaponType})`}
          items={weaponPool}
          selectedId={build.weaponId}
          onSelect={id => set('weaponId', id)}
          onClose={() => setPicker(null)}
          isWeapon
        />
      )}
      {picker === 'ability' && (
        <ItemPickerModal
          title={`Ability — ${build.className}`}
          items={abilityItemsForPicker}
          selectedId={build.abilityId}
          onSelect={id => set('abilityId', id)}
          onClose={() => setPicker(null)}
          isWeapon={false}
        />
      )}
      {picker === 'ring' && (
        <ItemPickerModal
          title="Ring"
          items={RINGS}
          selectedId={build.ringId}
          onSelect={id => set('ringId', id)}
          onClose={() => setPicker(null)}
          isWeapon={false}
        />
      )}
    </>
  );
}

// ── Tooltip ──────────────────────────────────────────────────
function DpsTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="dps-tooltip">
      <div className="dps-tooltip-def">DEF {label}</div>
      {payload.map(p => (
        <div key={p.dataKey} className="dps-tooltip-row" style={{ color: p.color }}>
          <span>{p.name}</span>
          <span>{p.value.toLocaleString()} dps</span>
        </div>
      ))}
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────
export default function DpsSimulator() {
  const [builds, setBuilds] = useState([defaultBuild(0), defaultBuild(1)]);

  function updateBuild(idx, next) {
    setBuilds(bs => bs.map((b, i) => i === idx ? next : b));
  }
  function addBuild() {
    setBuilds(bs => [...bs, defaultBuild(bs.length)]);
  }
  function removeBuild(idx) {
    setBuilds(bs => bs.filter((_, i) => i !== idx));
  }

  const curves = useMemo(() => {
    return builds.map(b => {
      const stats = CLASS_STATS[b.className];
      if (!stats) return null;
      const weapon = (WEAPONS[stats.weaponType] ?? []).find(w => w.id === b.weaponId);
      if (!weapon) return null;
      const allAbilities = ABILITIES[stats.abilityType] ?? [];
      const rawAbility = allAbilities.find(a => a.id === b.abilityId);
      const ability = b.includeAbility ? rawAbility : null;
      return buildDPSCurve(weapon, ability, stats);
    });
  }, [builds]);

  const chartData = useMemo(() => {
    if (!curves[0]) return [];
    return curves[0].map((pt, i) => {
      const row = { defense: pt.defense };
      curves.forEach((curve, bi) => {
        if (curve) row[`build${bi}`] = curve[i].dps;
      });
      return row;
    });
  }, [curves]);

  function buildLabel(b) {
    const stats = CLASS_STATS[b.className];
    const weapon = stats ? (WEAPONS[stats.weaponType] ?? []).find(w => w.id === b.weaponId) : null;
    return `${b.className} / ${weapon?.name ?? '?'}`;
  }

  return (
    <div className="dps-simulator">
      <div className="dps-header">
        <h2 className="dps-title">DPS Simulator</h2>
        <p className="dps-subtitle">Level 20 · 8/8 stats · All numbers approximate</p>
      </div>

      <div className="dps-builds-row">
        {builds.map((b, i) => (
          <BuildPanel
            key={b.id}
            build={b}
            color={BUILD_COLORS[i % BUILD_COLORS.length]}
            onChange={next => updateBuild(i, next)}
            onRemove={() => removeBuild(i)}
            canRemove={builds.length > 1}
          />
        ))}
        {builds.length < MAX_BUILDS && (
          <button className="dps-add-build" onClick={addBuild}>
            <span className="dps-add-plus">+</span>
            Add Build
          </button>
        )}
      </div>

      <div className="dps-graph-section">
        <div className="dps-graph-title">DPS vs Enemy Defense</div>
        <ResponsiveContainer width="100%" height={360}>
          <LineChart data={chartData} margin={{ top: 8, right: 24, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis
              dataKey="defense"
              stroke="#ffffff50"
              tick={{ fill: '#ffffff80', fontSize: 12 }}
              label={{ value: 'Enemy Defense', position: 'insideBottom', offset: -2, fill: '#ffffff50', fontSize: 12 }}
            />
            <YAxis
              stroke="#ffffff50"
              tick={{ fill: '#ffffff80', fontSize: 12 }}
              tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v}
              width={52}
            />
            <Tooltip content={<DpsTooltip />} />
            <Legend
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontSize: 13 }}>
                  {buildLabel(builds[parseInt(value.replace('build', ''))])}
                </span>
              )}
            />
            {builds.map((b, i) => (
              <Line
                key={b.id}
                type="monotone"
                dataKey={`build${i}`}
                name={`build${i}`}
                stroke={BUILD_COLORS[i % BUILD_COLORS.length]}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dps-table-section">
        <table className="dps-table">
          <thead>
            <tr>
              <th>DEF</th>
              {builds.map((b, i) => (
                <th key={i} style={{ color: BUILD_COLORS[i % BUILD_COLORS.length] }}>
                  {buildLabel(b)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[0, 20, 30, 40, 50, 75, 100].map(def => {
              const row = chartData.find(r => r.defense === def);
              return (
                <tr key={def}>
                  <td className="dps-table-def">{def}</td>
                  {builds.map((_, i) => (
                    <td key={i}>{row?.[`build${i}`]?.toLocaleString() ?? '-'}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
