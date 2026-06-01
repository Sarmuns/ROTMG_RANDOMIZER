import { useState } from 'react';
import DungeonSprite from './DungeonSprite.jsx';

function difficultyColor(v) {
  if (v <= 2)  return '#4ade80';
  if (v <= 4)  return '#a3e635';
  if (v <= 5.5) return '#fbbf24';
  if (v <= 7)  return '#f97316';
  if (v <= 8.5) return '#ef4444';
  return '#c026d3';
}

function DifficultyBar({ value }) {
  const pct = (value / 10) * 100;
  const color = difficultyColor(value);
  return (
    <div className="dungeon-diff-wrap">
      <div className="dungeon-diff-label">
        <span>Difficulty</span>
        <span className="dungeon-diff-value" style={{ color }}>{value}</span>
      </div>
      <div className="dungeon-diff-track">
        <div
          className="dungeon-diff-fill"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}99, ${color})` }}
        />
      </div>
    </div>
  );
}
import WhiteBagModal from './WhiteBagModal.jsx';
import ModalBox from './ModalBox.jsx';
import { TIER_META, DUNGEON_DIFFICULTY } from '../data/dungeons.js';

export default function DungeonDetailModal({ dungeon, active, onToggle, onClose }) {
  const [showWhites, setShowWhites] = useState(false);
  const tier = TIER_META[dungeon.tier];
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
