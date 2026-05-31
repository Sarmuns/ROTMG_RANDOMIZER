import { useState, useCallback } from 'react';
import { CLASSES } from './data/classes.js';
import { CHALLENGES } from './data/challenges.js';
import { DUNGEONS } from './data/dungeons.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import ClassResultCard from './components/ClassResultCard.jsx';
import ChallengeResultCard from './components/ChallengeResultCard.jsx';
import DungeonResultCard from './components/DungeonResultCard.jsx';
import PoolSelector from './components/PoolSelector.jsx';
import DungeonPoolSelector from './components/DungeonPoolSelector.jsx';

function runSpin(pool, onTick, onDone) {
  if (!pool || pool.length === 0) return;

  const winner = pool[Math.floor(Math.random() * pool.length)];
  const FRAMES = 22;

  const delays = Array.from({ length: FRAMES }, (_, i) => {
    const t = i / (FRAMES - 1);
    return Math.round(45 + t * t * 395);
  });

  let frame = 0;

  function next() {
    const isLast = frame === FRAMES - 1;
    onTick(isLast ? winner : pool[Math.floor(Math.random() * pool.length)]);
    if (isLast) {
      onDone(winner);
    } else {
      frame++;
      setTimeout(next, delays[frame]);
    }
  }

  setTimeout(next, delays[0]);
}

export default function App() {
  const [disabledClasses, setDisabledClasses] = useLocalStorage('rotmg_disabled', []);
  const [disabledDungeons, setDisabledDungeons] = useLocalStorage('rotmg_disabled_dungeons', []);

  const [classResult, setClassResult] = useState(null);
  const [dungeonResult, setDungeonResult] = useState(null);
  const [challengeResult, setChallengeResult] = useState(null);
  const [isClassSpinning, setIsClassSpinning] = useState(false);
  const [isDungeonSpinning, setIsDungeonSpinning] = useState(false);
  const [isChallengeSpinning, setIsChallengeSpinning] = useState(false);

  const activeClasses = CLASSES.filter((c) => !disabledClasses.includes(c.name));
  const activeDungeons = DUNGEONS.filter((d) => !disabledDungeons.includes(d.slug));
  const isAnySpin = isClassSpinning || isDungeonSpinning || isChallengeSpinning;
  const noActiveClasses = activeClasses.length === 0;
  const noActiveDungeons = activeDungeons.length === 0;

  const rollClass = useCallback(() => {
    if (isClassSpinning || noActiveClasses) return;
    setIsClassSpinning(true);
    runSpin(
      activeClasses,
      (item) => setClassResult(item),
      (winner) => {
        setClassResult(winner);
        setIsClassSpinning(false);
      }
    );
  }, [isClassSpinning, noActiveClasses, activeClasses]);

  const rollDungeon = useCallback(() => {
    if (isDungeonSpinning || noActiveDungeons) return;
    setIsDungeonSpinning(true);
    runSpin(
      activeDungeons,
      (item) => setDungeonResult(item),
      (winner) => {
        setDungeonResult(winner);
        setIsDungeonSpinning(false);
      }
    );
  }, [isDungeonSpinning, noActiveDungeons, activeDungeons]);

  const rollChallenge = useCallback(() => {
    if (isChallengeSpinning) return;
    setIsChallengeSpinning(true);
    runSpin(
      CHALLENGES,
      (item) => setChallengeResult(item),
      (winner) => {
        setChallengeResult(winner);
        setIsChallengeSpinning(false);
      }
    );
  }, [isChallengeSpinning]);

  const rollAll = useCallback(() => {
    if (isAnySpin || noActiveClasses || noActiveDungeons) return;

    setIsClassSpinning(true);
    setIsDungeonSpinning(true);
    setIsChallengeSpinning(true);

    runSpin(activeClasses, (item) => setClassResult(item), (winner) => { setClassResult(winner); setIsClassSpinning(false); });
    runSpin(activeDungeons, (item) => setDungeonResult(item), (winner) => { setDungeonResult(winner); setIsDungeonSpinning(false); });
    runSpin(CHALLENGES, (item) => setChallengeResult(item), (winner) => { setChallengeResult(winner); setIsChallengeSpinning(false); });
  }, [isAnySpin, noActiveClasses, noActiveDungeons, activeClasses, activeDungeons]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-crown">⚔️</div>
        <h1 className="app-title">RotMG Randomizer</h1>
        <p className="app-subtitle">Realm of the Mad God — Season Picker</p>
      </header>

      <main className="app-main">
        <div className="cards-row cards-row-3">
          <div className="card">
            <div className="card-label">Class</div>
            <ClassResultCard cls={classResult} spinning={isClassSpinning} />
            <button
              className="btn btn-primary"
              onClick={rollClass}
              disabled={isAnySpin || noActiveClasses}
            >
              {isClassSpinning ? 'Rolling…' : 'Roll Class'}
            </button>
            {noActiveClasses && (
              <p className="card-warning">No classes in the pool!</p>
            )}
          </div>

          <div className="card">
            <div className="card-label">Dungeon</div>
            <DungeonResultCard dungeon={dungeonResult} spinning={isDungeonSpinning} />
            <button
              className="btn btn-dungeon"
              onClick={rollDungeon}
              disabled={isAnySpin || noActiveDungeons}
            >
              {isDungeonSpinning ? 'Rolling…' : 'Roll Dungeon'}
            </button>
            {dungeonResult && !isDungeonSpinning && (
              <button
                className="btn-remove-pool"
                onClick={() =>
                  setDisabledDungeons((prev) =>
                    prev.includes(dungeonResult.slug) ? prev : [...prev, dungeonResult.slug]
                  )
                }
                disabled={disabledDungeons.includes(dungeonResult.slug)}
              >
                {disabledDungeons.includes(dungeonResult.slug) ? '✓ Removed from pool' : '× Remove from pool'}
              </button>
            )}
            {noActiveDungeons && (
              <p className="card-warning">No dungeons in the pool!</p>
            )}
          </div>

          <div className="card">
            <div className="card-label">Challenge</div>
            <ChallengeResultCard challenge={challengeResult} spinning={isChallengeSpinning} />
            <button
              className="btn btn-secondary"
              onClick={rollChallenge}
              disabled={isAnySpin}
            >
              {isChallengeSpinning ? 'Rolling…' : 'Roll Challenge'}
            </button>
          </div>
        </div>

        <div className="roll-all-row">
          <button
            className="btn btn-all"
            onClick={rollAll}
            disabled={isAnySpin || noActiveClasses || noActiveDungeons}
          >
            {isAnySpin ? '✨ Rolling…' : '✨ Roll All'}
          </button>
        </div>

        <PoolSelector
          disabledClasses={disabledClasses}
          onToggle={(name) =>
            setDisabledClasses((prev) =>
              prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
            )
          }
          onEnableAll={() => setDisabledClasses([])}
          onDisableAll={() => setDisabledClasses(CLASSES.map((c) => c.name))}
        />

        <DungeonPoolSelector
          disabledDungeons={disabledDungeons}
          setDisabledDungeons={setDisabledDungeons}
          onToggle={(slug) =>
            setDisabledDungeons((prev) =>
              prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
            )
          }
          onEnableAll={() => setDisabledDungeons([])}
          onDisableAll={() => setDisabledDungeons(DUNGEONS.map((d) => d.slug))}
        />

      </main>
    </div>
  );
}
