import { useState } from 'react';
import ModalBox from './ModalBox.jsx';
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
      {item.shinyHash && <span className="white-item-shiny-dot" title="Has shiny variant">✦</span>}
    </button>
  );
}

export default function WhiteBagModal({ dungeon, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <ModalBox title={`White Bags — ${dungeon.name}`} onClose={onClose}>
        <div className="whites-grid">
          {dungeon.whites.map((item) => (
            <WhiteItem key={item.hash} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </ModalBox>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
