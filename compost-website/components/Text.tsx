
import styles from '../styles/Text.module.css';

interface TextProps {
    content: string;
}

export default function Text({ content }: TextProps) {
    return (
        <p className={styles.text}>
            {content}
            <br />
        </p>
    )
}