
import Title from './Title';
import Text from './Text';
import styles from '../styles/Text.module.css';

interface TextContainerProps {
    title: string | null;
    content: string;
}

export default function TextContainer({ title, content }: TextContainerProps) {
    const paragraphs: string[] = content.split('\n');

    return (
        <div className={styles.bodyContainer}>
            {title !== null ? <Title title={title} /> : null}
            {paragraphs.map((paragraph: string, index: number) => (
                <Text key={index} content={paragraph} />
            ))}
        </div>
    );
}