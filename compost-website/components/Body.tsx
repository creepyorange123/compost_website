
import styles from '../styles/Text.module.css';

interface BodyProps {
    content: string;
}

export default function Body({ content }: BodyProps) {
    return (
        <p className={styles.body}>{content}</p>
    )
}