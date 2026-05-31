import { CLASSES } from '../data/classes.js';

export default function PoolSelector({ disabledClasses, onToggle, onEnableAll, onDisableAll }) {
  return (
    <section className="pool-section">
      <div className="pool-header">
        <h2 className="section-title">Pool de Classes</h2>
        <div className="pool-actions">
          <button className="btn-small" onClick={onEnableAll}>Marcar todas</button>
          <button className="btn-small btn-dim" onClick={onDisableAll}>Desmarcar todas</button>
        </div>
      </div>
      <p className="pool-hint">
        {CLASSES.length - disabledClasses.length} de {CLASSES.length} ativas
      </p>
      <div className="chips-grid">
        {CLASSES.map((cls) => {
          const active = !disabledClasses.includes(cls.name);
          return (
            <button
              key={cls.name}
              className={`chip ${active ? 'chip-active' : 'chip-disabled'}`}
              style={active ? { borderColor: cls.color, color: cls.color, background: cls.bg } : {}}
              onClick={() => onToggle(cls.name)}
              title={active ? `Remover ${cls.name} do sorteio` : `Adicionar ${cls.name} ao sorteio`}
            >
              {cls.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}
