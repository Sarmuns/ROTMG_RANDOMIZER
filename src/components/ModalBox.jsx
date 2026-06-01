import { useEffect, useRef, useState } from 'react';

export default function ModalBox({ onClose, className = '', title, children, zIndex }) {
  const [closing, setClosing] = useState(false);
  const didClose = useRef(false);

  function triggerClose() {
    if (didClose.current) return;
    didClose.current = true;
    setClosing(true);
    setTimeout(onClose, 170);
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') triggerClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className={`modal-overlay${closing ? ' modal-closing' : ''}`}
      style={zIndex ? { zIndex } : undefined}
      onClick={triggerClose}
    >
      <div
        className={`modal-box${className ? ' ' + className : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-topbar">
          {title && <span className="modal-title">{title}</span>}
          <button className="modal-close" onClick={triggerClose}>✕</button>
        </div>
        <div className="modal-scroll-body">
          {children}
        </div>
      </div>
    </div>
  );
}
