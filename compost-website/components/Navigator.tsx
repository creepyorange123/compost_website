
import styles from '../styles/Header.module.css';

export default function Navigator() {
    return (
        <div className={styles.navContainer}>
            <button className={styles.navButton}>
                Why Compost
            </button>
            <button className={styles.navButton}>
                For Home
            </button>
            <button className={styles.navButton}>
                For Community
            </button>
            <button className={styles.navButton}>
                References
            </button>
        </div>
    );
};