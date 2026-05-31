import { useEffect, useState } from 'react';
import ItemDetailModal from './ItemDetailModal.jsx';

const BASE = 'https://www.realmeye.com/s/a/img/wiki/i/';

function WhiteItem({ item, onClick }) {
  const [err, setErr] = useState(false);
  return (
    <button className={`white-item ${item.shinyHash ? 'white-item-has-shiny' : ''}`} onClick={onClick} title={item.name}>
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
      {item.shinyHash && <span className="white-item-shiny-dot" title="Tem versão shiny">✦</span>}
    </button>
  );
}

export default function WhiteBagModal({ dungeon, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <span className="modal-title">White Bags — {dungeon.name}</span>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>
          <div className="whites-grid">
            {dungeon.whites.map((item) => (
              <WhiteItem
                key={item.hash}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
