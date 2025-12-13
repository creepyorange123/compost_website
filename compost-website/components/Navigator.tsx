
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
            <Link href="/for-community" className={styles.navButton}>
                For Community
            </Link>
            <Link href="https://docs.google.com/document/d/1sYzr_y693KtB3x_L6z-MQz6DHkzvnxrko_V6c2z7s-8/edit?usp=sharing" className={styles.navButton}>
                References
            </Link>
        </div>
    );
};