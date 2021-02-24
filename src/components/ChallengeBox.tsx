import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext);

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body Icon" />
            <strong>New challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              I failed
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Done
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>You need to finish a cycle to receive a challenge.</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
          Level up by completing challenges.
        </p>
          </div>
        )
      }
    </div >
  )
}