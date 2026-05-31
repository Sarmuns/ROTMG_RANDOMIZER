import { useState } from 'react';
import DungeonSprite from './DungeonSprite.jsx';
import WhiteBagModal from './WhiteBagModal.jsx';
import { TIER_META } from '../data/dungeons.js';

export default function DungeonResultCard({ dungeon, spinning }) {
  const [showWhites, setShowWhites] = useState(false);

  return (
    <div className={`result-inner ${spinning ? 'result-spinning' : ''} ${dungeon && !spinning ? 'result-revealed' : ''}`}>
      <DungeonSprite dungeon={dungeon} size={96} />
      <div className={`result-name ${spinning ? 'name-blur' : ''}`}>
        {dungeon ? dungeon.name : '???'}
      </div>
      {dungeon && !spinning && (
        <div
          className="dungeon-tier-badge"
          style={{ color: TIER_META[dungeon.tier].color, borderColor: `${TIER_META[dungeon.tier].color}66` }}
        >
          {TIER_META[dungeon.tier].label}
        </div>
      )}
      {dungeon && !spinning && dungeon.whites && (
        <button className="btn-whites" onClick={() => setShowWhites(true)}>
          White Bags
        </button>
      )}
      {showWhites && <WhiteBagModal dungeon={dungeon} onClose={() => setShowWhites(false)} />}
    </div>
  );
}
