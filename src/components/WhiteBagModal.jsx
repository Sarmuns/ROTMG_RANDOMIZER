import { useState } from 'react';
import ModalBox from './ModalBox.jsx';
import ItemDetailModal from './ItemDetailModal.jsx';

const BASE = '/items/';

const BAG_TYPES = [
  { key: 'whites',  label: 'White Bags',  color: '#E0E0E0', bg: '#ffffff12', border: '#ffffff30' },
  { key: 'reds',    label: 'Red Bags',    color: '#EF5350', bg: '#EF535012', border: '#EF535040' },
  { key: 'oranges', label: 'Orange Bags', color: '#FF8F00', bg: '#FF8F0012', border: '#FF8F0040' },
  { key: 'cyans',   label: 'Cyan Bags',   color: '#26C6DA', bg: '#26C6DA12', border: '#26C6DA40' },
];

function LootItem({ item, onClick }) {
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

  const sections = BAG_TYPES.filter(({ key }) => dungeon[key]?.length);

  return (
    <>
      <ModalBox title={`Loot — ${dungeon.name}`} onClose={onClose}>
        <div className="loot-sections">
          {sections.map(({ key, label, color, bg, border }) => (
            <div key={key} className="loot-section">
              <div className="loot-section-header" style={{ color, background: bg, borderColor: border }}>
                <span className="loot-bag-dot" style={{ background: color }} />
                {label}
                <span className="loot-bag-count">{dungeon[key].length}</span>
              </div>
              <div className="whites-grid">
                {dungeon[key].map((item) => (
                  <LootItem key={item.hash} item={item} onClick={() => setSelectedItem(item)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ModalBox>

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
