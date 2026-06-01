import { useState } from 'react';
import ModalBox from './ModalBox.jsx';

const BASE = 'https://www.realmeye.com/s/a/img/wiki/i/';

function ItemSprite({ hash, label, size = 96 }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="item-detail-sprite-fallback" style={{ width: size, height: size }}>?</div>
    );
  }
  return (
    <img
      src={`${BASE}${hash}.png`}
      alt={label}
      width={size}
      height={size}
      className="item-detail-sprite"
      style={{ imageRendering: 'pixelated' }}
      onError={() => setErr(true)}
    />
  );
}

export default function ItemDetailModal({ item, onClose }) {
  const hasShiny = !!item.shinyHash;

  return (
    <ModalBox
      className={`item-detail-box${hasShiny ? ' item-detail-box--shiny' : ''}`}
      zIndex={200}
      onClose={onClose}
    >
      <div className="item-detail-sprites">
        <div className="item-sprite-slot">
          <ItemSprite hash={item.hash} label={item.name} size={96} />
          <span className="item-sprite-label">Normal</span>
        </div>
        {hasShiny && (
          <div className="item-sprite-slot item-sprite-shiny">
            <div className="shiny-glow">
              <ItemSprite hash={item.shinyHash} label={`${item.name} (Shiny)`} size={96} />
            </div>
            <span className="item-sprite-label shiny-label">✦ Shiny</span>
          </div>
        )}
      </div>

      <div className="item-detail-name">{item.name}</div>

      {item.desc && <p className="item-detail-desc">"{item.desc}"</p>}

      {item.effect && (
        <div className="item-detail-effect">
          <span className="item-effect-label">Effect</span>
          <span className="item-effect-text">{item.effect}</span>
        </div>
      )}

      {!item.desc && !item.effect && (
        <p className="item-detail-empty">No data available for this item.</p>
      )}
    </ModalBox>
  );
}
