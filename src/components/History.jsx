export default function History({ entries }) {
  if (entries.length === 0) return null;

  return (
    <section className="history-section">
      <h2 className="section-title">Histórico</h2>
      <ul className="history-list">
        {entries.map((entry) => (
          <li key={entry.id} className="history-entry">
            <span className="history-time">{entry.time}</span>
            <span className="history-class">
              {entry.classResult ? entry.classResult.name : <em>—</em>}
            </span>
            {entry.dungeonResult && (
              <>
                <span className="history-sep">·</span>
                <span className="history-dungeon">{entry.dungeonResult.name}</span>
              </>
            )}
            {entry.challengeResult && (
              <>
                <span className="history-sep">·</span>
                <span className="history-challenge">
                  {entry.challengeResult.icon} {entry.challengeResult.name}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
