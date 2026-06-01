import { useState } from 'react';
import { DUNGEONS, TIER_META } from '../data/dungeons.js';
import DungeonDetailModal from './DungeonDetailModal.jsx';

const TIERS = [1, 2, 3, 4];

function tierState(tier, disabledDungeons) {
  const slugs = DUNGEONS.filter((d) => d.tier === tier).map((d) => d.slug);
  const activeCount = slugs.filter((s) => !disabledDungeons.includes(s)).length;
  if (activeCount === slugs.length) return 'all';
  if (activeCount === 0) return 'none';
  return 'partial';
}

export default function DungeonPoolSelector({ disabledDungeons, setDisabledDungeons, onToggle, onEnableAll, onDisableAll }) {
  const [selectedDungeon, setSelectedDungeon] = useState(null);
  const [search, setSearch] = useState('');

  const activeCount = DUNGEONS.length - disabledDungeons.length;
  const exaltSlugs = DUNGEONS.filter((d) => d.exalt).map((d) => d.slug);
  const exaltActiveCount = exaltSlugs.filter((s) => !disabledDungeons.includes(s)).length;

  const query = search.trim().toLowerCase();
  const isSearching = query.length > 0;
  const searchResults = isSearching
    ? DUNGEONS.filter((d) => d.name.toLowerCase().includes(query))
    : [];

  function toggleTier(tier) {
    const slugs = DUNGEONS.filter((d) => d.tier === tier).map((d) => d.slug);
    const state = tierState(tier, disabledDungeons);
    if (state === 'all') {
      setDisabledDungeons((prev) => [...new Set([...prev, ...slugs])]);
    } else {
      setDisabledDungeons((prev) => prev.filter((s) => !slugs.includes(s)));
    }
  }

  function setExaltOnly() {
    const nonExaltSlugs = DUNGEONS.filter((d) => !d.exalt).map((d) => d.slug);
    setDisabledDungeons(nonExaltSlugs);
  }

  function openDungeon(d) {
    setSelectedDungeon(d);
    setSearch('');
  }

  return (
    <>
      <section className="pool-section">
        <div className="pool-header">
          <h2 className="section-title">Dungeon Pool</h2>
          <div className="pool-actions">
            <button className="btn-small" onClick={onEnableAll}>Enable All</button>
            <button className="btn-small btn-dim" onClick={onDisableAll}>Disable All</button>
          </div>
        </div>
        <p className="pool-hint">{activeCount} of {DUNGEONS.length} active</p>

        <div className="dungeon-search-wrap">
          <span className="dungeon-search-icon">🔍</span>
          <input
            className="dungeon-search"
            type="text"
            placeholder="Search dungeons and view drops…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setSearch('');
              if (e.key === 'Enter' && searchResults.length === 1) openDungeon(searchResults[0]);
            }}
          />
          {search && (
            <button className="dungeon-search-clear" onClick={() => setSearch('')} title="Clear">✕</button>
          )}
        </div>

        {isSearching ? (
          <div className="dungeon-search-results">
            {searchResults.length === 0 ? (
              <p className="search-empty">No dungeons found for "{search}"</p>
            ) : (
              <div className="chips-grid">
                {searchResults.map((d) => {
                  const active = !disabledDungeons.includes(d.slug);
                  const tier = TIER_META[d.tier];
                  return (
                    <button
                      key={d.slug}
                      className={`chip chip-search ${active ? 'chip-active' : 'chip-disabled'} ${d.exalt ? 'chip-exalt' : ''}`}
                      style={active ? { borderColor: d.color, color: d.color, background: d.bg } : {}}
                      onClick={() => openDungeon(d)}
                      title={`${d.name} — ${tier.label}${d.whites ? ` (${d.whites.length} white bags)` : ''}`}
                    >
                      {d.exalt && <span className="chip-exalt-mark">✦</span>}
                      {d.name}
                      {d.whites && <span className="chip-drops-hint"> · {d.whites.length}W</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="tier-filters">
              {TIERS.map((tier) => {
                const { label, color } = TIER_META[tier];
                const state = tierState(tier, disabledDungeons);
                return (
                  <button
                    key={tier}
                    className={`tier-filter-btn ${state === 'none' ? 'tier-filter-off' : state === 'partial' ? 'tier-filter-partial' : 'tier-filter-on'}`}
                    style={{ '--tier-color': color }}
                    onClick={() => toggleTier(tier)}
                    title={`Toggle tier ${tier}`}
                  >
                    {label}
                  </button>
                );
              })}
              <button
                className={`tier-filter-btn tier-filter-exalt ${exaltActiveCount > 0 && exaltActiveCount === exaltSlugs.length ? 'tier-filter-on' : exaltActiveCount === 0 ? 'tier-filter-off' : 'tier-filter-partial'}`}
                style={{ '--tier-color': '#c084fc' }}
                onClick={setExaltOnly}
                title="Enable only exalt dungeons"
              >
                ✦ Exalt Only
              </button>
            </div>

            <div className="dungeon-tiers">
              {TIERS.map((tier) => {
                const tierDungeons = DUNGEONS.filter((d) => d.tier === tier);
                const { label, color } = TIER_META[tier];
                return (
                  <div key={tier} className="dungeon-tier-group">
                    <span className="tier-group-label" style={{ color }}>{label}</span>
                    <div className="chips-grid">
                      {tierDungeons.map((d) => {
                        const active = !disabledDungeons.includes(d.slug);
                        return (
                          <button
                            key={d.slug}
                            className={`chip ${active ? 'chip-active' : 'chip-disabled'} ${d.exalt ? 'chip-exalt' : ''}`}
                            style={active ? { borderColor: d.color, color: d.color, background: d.bg } : {}}
                            onClick={() => setSelectedDungeon(d)}
                            title={d.exalt ? `${d.name} (Exalt)` : d.name}
                          >
                            {d.exalt && <span className="chip-exalt-mark">✦</span>}
                            {d.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>

      {selectedDungeon && (
        <DungeonDetailModal
          dungeon={selectedDungeon}
          active={!disabledDungeons.includes(selectedDungeon.slug)}
          onToggle={onToggle}
          onClose={() => setSelectedDungeon(null)}
        />
      )}
    </>
  );
}
