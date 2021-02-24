import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css';

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext);

    return (
        <div className={styles.completedChallangesContainer}>
            <span>Challenges Complete</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}