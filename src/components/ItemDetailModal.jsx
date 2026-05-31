import { useEffect, useState } from 'react';

const BASE = 'https://www.realmeye.com/s/a/img/wiki/i/';

function ItemSprite({ hash, label, size = 80 }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="item-detail-sprite-fallback" style={{ width: size, height: size }}>
        ?
      </div>
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
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const hasShiny = !!item.shinyHash;

  return (
    <div className="modal-overlay item-detail-overlay" onClick={onClose}>
      <div className="modal-box item-detail-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="item-detail-sprites">
          <div className="item-sprite-slot">
            <ItemSprite hash={item.hash} label={item.name} size={80} />
            <span className="item-sprite-label">Normal</span>
          </div>
          {hasShiny && (
            <div className="item-sprite-slot item-sprite-shiny">
              <div className="shiny-glow">
                <ItemSprite hash={item.shinyHash} label={`${item.name} (Shiny)`} size={80} />
              </div>
              <span className="item-sprite-label shiny-label">✦ Shiny</span>
            </div>
          )}
        </div>

        <div className="item-detail-name">{item.name}</div>

        {item.desc && (
          <p className="item-detail-desc">"{item.desc}"</p>
        )}

        {item.effect && (
          <div className="item-detail-effect">
            <span className="item-effect-label">Efeito</span>
            <span className="item-effect-text">{item.effect}</span>
          </div>
        )}

        {!item.desc && !item.effect && (
          <p className="item-detail-empty">Sem dados disponíveis para este item.</p>
        )}
      </div>
    </div>
  );
}
