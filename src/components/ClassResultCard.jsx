import ClassSprite from './ClassSprite.jsx';

export default function ClassResultCard({ cls, spinning }) {
  const revealed = cls && !spinning;

  return (
    <div className={`result-inner ${spinning ? 'result-spinning' : ''} ${revealed ? 'result-revealed' : ''}`}>
      <div
        className="sprite-wrapper"
        key={spinning ? (cls?.name ?? 'empty') : 'revealed'}
        style={revealed ? { '--el-color': cls.color, '--el-bg': cls.bg } : undefined}
      >
        <ClassSprite cls={cls} size={128} />
      </div>
      <div
        className={`result-name ${spinning ? 'name-blur' : ''}`}
        style={revealed ? { color: cls.color, textShadow: `0 0 18px ${cls.color}88` } : undefined}
      >
        {cls ? cls.name : '???'}
      </div>
    </div>
  );
}
