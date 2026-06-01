import { useEffect, useState } from 'react';

export default function ModalBox({ onClose, className = '', title, children, zIndex }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setClosing(true); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  function handleOverlayAnim(e) {
    if (e.target === e.currentTarget && closing) onClose();
  }

  return (
    <div
      className={`modal-overlay${closing ? ' modal-closing' : ''}`}
      style={zIndex ? { zIndex } : undefined}
      onClick={() => setClosing(true)}
      onAnimationEnd={handleOverlayAnim}
    >
      <div
        className={`modal-box${className ? ' ' + className : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-topbar">
          {title && <span className="modal-title">{title}</span>}
          <button className="modal-close" onClick={() => setClosing(true)}>✕</button>
        </div>
        <div className="modal-scroll-body">
          {children}
        </div>
      </div>
    </div>
  );
}
