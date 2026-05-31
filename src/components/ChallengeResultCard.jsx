export default function ChallengeResultCard({ challenge, spinning }) {
  return (
    <div className={`result-inner ${spinning ? 'result-spinning' : ''} ${challenge && !spinning ? 'result-revealed' : ''}`}>
      <div className={`challenge-icon ${spinning ? 'name-blur' : ''}`}>
        {challenge ? challenge.icon : '🎲'}
      </div>
      <div className={`result-name ${spinning ? 'name-blur' : ''}`}>
        {challenge ? challenge.name : '???'}
      </div>
      {challenge && !spinning && (
        <div className="challenge-desc">{challenge.desc}</div>
      )}
    </div>
  );
}
