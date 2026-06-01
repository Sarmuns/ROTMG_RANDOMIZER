const DIFFICULTY_COLORS = {
  1: '#4ade80',
  2: '#fbbf24',
  3: '#f97316',
  4: '#ef4444',
};

function DifficultyStars({ level }) {
  const color = DIFFICULTY_COLORS[level] ?? '#7a7060';
  return (
    <span className="challenge-difficulty">
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className="challenge-star" style={{ color }}>
          {i < level ? '★' : '☆'}
        </span>
      ))}
    </span>
  );
}

export default function ChallengeResultCard({ challenge, spinning }) {
  const revealed = challenge && !spinning;

  return (
    <div className={`result-inner ${spinning ? 'result-spinning' : ''} ${revealed ? 'result-revealed' : ''}`}>
      <div
        className="challenge-icon-wrap"
        key={spinning ? (challenge?.id ?? 'empty') : 'revealed'}
      >
        <span className={`challenge-icon ${spinning ? 'name-blur' : ''}`}>
          {challenge ? challenge.icon : '🎲'}
        </span>
      </div>
      <div className={`result-name ${spinning ? 'name-blur' : ''}`}>
        {challenge ? challenge.name : '???'}
      </div>
      {revealed && (
        <>
          <div className="challenge-meta">
            {challenge.type && (
              <span
                className="challenge-type-badge"
                style={{ color: DIFFICULTY_COLORS[challenge.difficulty] ?? '#7a7060' }}
              >
                {challenge.type}
              </span>
            )}
            {challenge.difficulty && <DifficultyStars level={challenge.difficulty} />}
          </div>
          <div className="challenge-desc">{challenge.desc}</div>
        </>
      )}
    </div>
  );
}
