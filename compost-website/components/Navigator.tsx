
import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Navigator() {
    return (
        <div className={styles.navContainer}>
            <Link href="/" className={styles.navButton}>
                Why Compost
            </Link>
            <Link href="/for-home" className={styles.navButton}>
                For Home
            </Link>
            <button className={styles.navButton}>
                For Community
            </button>
            <button className={styles.navButton}>
                References
            </button>
        </div>
    );
};