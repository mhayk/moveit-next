import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https:///github.com/mhayk.png" alt="Mhayk Whandson" />
            <div>
                <strong>Mhayk Whandson</strong>
                <p>
                    <img src="icons/level.svg" alt="Level icon" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}