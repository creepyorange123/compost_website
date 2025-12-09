
import styles from '../styles/Text.module.css';

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <div className={styles.title}>
            {title}
        </div>
    );
}