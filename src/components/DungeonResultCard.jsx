import { useState } from 'react';
import DungeonSprite from './DungeonSprite.jsx';
import WhiteBagModal from './WhiteBagModal.jsx';
import { TIER_META } from '../data/dungeons.js';

export default function DungeonResultCard({ dungeon, spinning }) {
  const [showWhites, setShowWhites] = useState(false);
  const revealed = dungeon && !spinning;

  return (
    <div className={`result-inner ${spinning ? 'result-spinning' : ''} ${revealed ? 'result-revealed' : ''}`}>
      <div
        className="sprite-wrapper sprite-wrapper--portal"
        key={spinning ? (dungeon?.slug ?? 'empty') : 'revealed'}
        style={revealed ? { '--el-color': dungeon.color, '--el-bg': dungeon.bg } : undefined}
      >
        <DungeonSprite dungeon={dungeon} size={96} />
      </div>
      <div
        className={`result-name ${spinning ? 'name-blur' : ''}`}
        style={revealed ? { color: dungeon.color, textShadow: `0 0 18px ${dungeon.color}88` } : undefined}
      >
        {dungeon ? dungeon.name : '???'}
      </div>
      {revealed && (
        <div
          className="dungeon-tier-badge"
          style={{ color: TIER_META[dungeon.tier].color, borderColor: `${TIER_META[dungeon.tier].color}66` }}
        >
          {TIER_META[dungeon.tier].label}
        </div>
      )}
      {revealed && dungeon.whites && (
        <button className="btn-whites" onClick={() => setShowWhites(true)}>
          White Bags
        </button>
      )}
      {showWhites && <WhiteBagModal dungeon={dungeon} onClose={() => setShowWhites(false)} />}
    </div>
  );
}
