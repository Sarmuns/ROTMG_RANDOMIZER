import { useEffect, useState } from 'react';

const BASE = 'https://www.realmeye.com/s/a/img/wiki/i/';

function WhiteItem({ item }) {
  const [err, setErr] = useState(false);
  return (
    <div className="white-item">
      {err ? (
        <div className="white-item-placeholder">?</div>
      ) : (
        <img
          src={`${BASE}${item.hash}.png`}
          alt={item.name}
          className="white-item-sprite"
          onError={() => setErr(true)}
        />
      )}
      <span className="white-item-name">{item.name}</span>
    </div>
  );
}

export default function WhiteBagModal({ dungeon, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">White Bags — {dungeon.name}</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="whites-grid">
          {dungeon.whites.map((item) => (
            <WhiteItem key={item.hash} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
