import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Body Icon" />
            <strong>New challenge</strong>
            <p>Stand up and walk per 3 minutes</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
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