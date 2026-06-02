import { useState } from 'react';
import DungeonSprite from './DungeonSprite.jsx';
import WhiteBagModal from './WhiteBagModal.jsx';
import ModalBox from './ModalBox.jsx';
import { TIER_META, DUNGEON_DIFFICULTY, DUNGEON_EXALTS, EXALT_ICONS } from '../data/dungeons.js';

function difficultyColor(v) {
  if (v <= 2)   return '#4ade80';
  if (v <= 4)   return '#a3e635';
  if (v <= 5.5) return '#fbbf24';
  if (v <= 7)   return '#f97316';
  if (v <= 8.5) return '#ef4444';
  return '#c026d3';
}

const TOMB_FULL = 'https://www.realmeye.com/s/a/img/wiki/i/gKMdCOG.png';
const TOMB_HALF = 'https://www.realmeye.com/s/a/img/wiki/i/4tJF9j9.png';

function DifficultyBar({ value }) {
  const full    = Math.floor(value);
  const hasHalf = (value % 1) >= 0.5;
  const empty   = 10 - full - (hasHalf ? 1 : 0);
  const slots   = [
    ...Array(full).fill('full'),
    ...(hasHalf ? ['half'] : []),
    ...Array(empty).fill('empty'),
  ];

  return (
    <div className="dungeon-diff-wrap">
      <div className="dungeon-diff-tombs">
        {slots.map((type, i) => (
          <img
            key={i}
            src={type === 'half' ? TOMB_HALF : TOMB_FULL}
            alt={type}
            className={`dungeon-diff-tomb dungeon-diff-tomb--${type}`}
            style={{ imageRendering: 'pixelated' }}
          />
        ))}
      </div>
      <div className="dungeon-diff-number" style={{ color: difficultyColor(value) }}>
        {value} / 10
      </div>
    </div>
  );
}

function ExaltRow({ slug }) {
  const exalts = DUNGEON_EXALTS[slug];
  if (!exalts) return null;
  return (
    <div className="dungeon-exalt-row">
      <span className="dungeon-exalt-label">Exaltations</span>
      <div className="dungeon-exalt-flags">
        {exalts.map((stat) => (
          <div key={stat} className="dungeon-exalt-flag" title={stat}>
            <img
              src={EXALT_ICONS[stat]}
              alt={stat}
              className="exalt-flag-img"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="exalt-flag-label">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DungeonDetailModal({ dungeon, active, onToggle, onClose }) {
  const [showWhites, setShowWhites] = useState(false);
  const tier       = TIER_META[dungeon.tier];
  const difficulty = DUNGEON_DIFFICULTY[dungeon.slug];

  return (
    <>
      <ModalBox className="dungeon-detail-box" onClose={onClose}>
        <div className="dungeon-detail-hero" style={{ background: `radial-gradient(ellipse at 50% 0%, ${dungeon.color}22, transparent 70%)` }}>
          <DungeonSprite dungeon={dungeon} size={80} />
          <div className="dungeon-detail-name">{dungeon.name}</div>
          {difficulty != null && <DifficultyBar value={difficulty} />}
        </div>

        <div className="dungeon-detail-badges">
          <span
            className="dungeon-detail-tier"
            style={{ color: tier.color, borderColor: `${tier.color}55`, background: `${tier.color}18` }}
          >
            {tier.label}
          </span>
          {dungeon.exalt && <span className="dungeon-detail-exalt">✦ Exalt</span>}
          <span className={`dungeon-detail-status ${active ? 'status-active' : 'status-disabled'}`}>
            <span className="status-dot" />
            {active ? 'Active' : 'Disabled'}
          </span>
        </div>

        <ExaltRow slug={dungeon.slug} />

        {dungeon.whites && (
          <div className="dungeon-detail-whites-hint">
            <span className="whites-count">{dungeon.whites.length} white bag{dungeon.whites.length !== 1 ? 's' : ''}</span>
            <button className="btn-whites" onClick={() => setShowWhites(true)}>
              White Bags
            </button>
          </div>
        )}

        <div className="dungeon-detail-actions">
          <button
            className={`btn-detail-toggle ${active ? 'btn-detail-disable' : 'btn-detail-enable'}`}
            onClick={() => { onToggle(dungeon.slug); onClose(); }}
          >
            {active ? 'Remove from pool' : 'Add to pool'}
          </button>
        </div>
      </ModalBox>

      {showWhites && <WhiteBagModal dungeon={dungeon} onClose={() => setShowWhites(false)} />}
    </>
  );
}
