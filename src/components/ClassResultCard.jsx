import ClassSprite from './ClassSprite.jsx';

export default function ClassResultCard({ cls, spinning }) {
  return (
    <div className={`result-inner ${spinning ? 'result-spinning' : ''} ${cls && !spinning ? 'result-revealed' : ''}`}>
      <ClassSprite cls={cls} size={128} />
      <div className={`result-name ${spinning ? 'name-blur' : ''}`}>
        {cls ? cls.name : '???'}
      </div>
    </div>
  );
}
