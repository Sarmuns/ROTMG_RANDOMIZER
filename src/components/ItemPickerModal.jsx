import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const TIER_COLORS = {
  UT: { bg: '#7c3aed', text: '#d8b4fe' },
  ST: { bg: '#92400e', text: '#fcd34d' },
  T14: { bg: '#854d0e', text: '#fde68a' },
  T13: { bg: '#713f12', text: '#fef3c7' },
  T12: { bg: '#1e3a5f', text: '#93c5fd' },
  T11: { bg: '#1e3a4f', text: '#7dd3fc' },
  T10: { bg: '#1e3040', text: '#67e8f9' },
};
function tierStyle(tier) {
  return TIER_COLORS[tier] ?? { bg: '#1f2937', text: '#9ca3af' };
}

const WEP_TYPE_ICON = { sword: '⚔️', staff: '🪄', wand: '✨', dagger: '🗡️', bow: '🏹', katana: '🔪' };

function ItemTile({ item, isSelected, onClick, isWeapon }) {
  const { bg, text } = tierStyle(item.tier);
  const hasSprite = !!item.hash;

  return (
    <button
      className={`ipicker-tile${isSelected ? ' ipicker-tile--selected' : ''}`}
      onClick={onClick}
      title={`[${item.tier}] ${item.name}`}
    >
      <div className="ipicker-sprite-box">
        {hasSprite ? (
          <img
            src={`/items/${item.hash}.png`}
            alt={item.name}
            className="ipicker-sprite-img"
            style={{ imageRendering: 'pixelated' }}
            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
          />
        ) : null}
        <div
          className="ipicker-placeholder"
          style={{ background: bg, color: text, display: hasSprite ? 'none' : 'flex' }}
        >
          {isWeapon ? (WEP_TYPE_ICON[item.weaponType] ?? '⚔️') : '✦'}
        </div>
      </div>
      <div className="ipicker-tier-badge" style={{ background: bg, color: text }}>
        {item.tier}
      </div>
      <div className="ipicker-item-name">{item.name}</div>
    </button>
  );
}

export default function ItemPickerModal({ title, items, selectedId, onSelect, onClose, isWeapon = true }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Group: tiered first (T0→T14), then UTs/STs
  const tiered = items.filter(i => i.tier.startsWith('T') && i.tier !== 'UT');
  const specials = items.filter(i => !i.tier.startsWith('T') || i.tier === 'UT');

  return createPortal(
    <div className="ipicker-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="ipicker-modal">
        <div className="ipicker-header">
          <span className="ipicker-title">{title}</span>
          <button className="ipicker-close" onClick={onClose}>✕</button>
        </div>

        <div className="ipicker-body">
          {tiered.length > 0 && (
            <div className="ipicker-section">
              <div className="ipicker-section-label">Tiered</div>
              <div className="ipicker-grid">
                {tiered.map(item => (
                  <ItemTile
                    key={item.id}
                    item={item}
                    isSelected={item.id === selectedId}
                    isWeapon={isWeapon}
                    onClick={() => { onSelect(item.id); onClose(); }}
                  />
                ))}
              </div>
            </div>
          )}

          {specials.length > 0 && (
            <div className="ipicker-section">
              <div className="ipicker-section-label">UT / ST</div>
              <div className="ipicker-grid">
                {specials.map(item => (
                  <ItemTile
                    key={item.id}
                    item={item}
                    isSelected={item.id === selectedId}
                    isWeapon={isWeapon}
                    onClick={() => { onSelect(item.id); onClose(); }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
