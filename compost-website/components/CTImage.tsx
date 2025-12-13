import styles from '../styles/CompostTable.module.css';

export default function CTImage({src}: {src: string} ) {
    return (
        <img 
        src={src}
        alt="check/cross" 
        className={styles.compostTableImage}
        />
    );
}