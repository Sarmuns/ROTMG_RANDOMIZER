import { useEffect, useState } from 'react';
import DungeonSprite from './DungeonSprite.jsx';
import WhiteBagModal from './WhiteBagModal.jsx';
import { TIER_META } from '../data/dungeons.js';

export default function DungeonDetailModal({ dungeon, active, onToggle, onClose }) {
  const [showWhites, setShowWhites] = useState(false);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const tier = TIER_META[dungeon.tier];

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box dungeon-detail-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>

          <div className="dungeon-detail-hero" style={{ background: `radial-gradient(ellipse at 50% 0%, ${dungeon.color}22, transparent 70%)` }}>
            <DungeonSprite dungeon={dungeon} size={80} />
            <div className="dungeon-detail-name">{dungeon.name}</div>
          </div>

          <div className="dungeon-detail-badges">
            <span
              className="dungeon-detail-tier"
              style={{ color: tier.color, borderColor: `${tier.color}55`, background: `${tier.color}18` }}
            >
              {tier.label}
            </span>
            {dungeon.exalt && (
              <span className="dungeon-detail-exalt">✦ Exalt</span>
            )}
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
        </div>
      </div>

      {showWhites && <WhiteBagModal dungeon={dungeon} onClose={() => setShowWhites(false)} />}
    </>
  );
}
