import CopyButton from "./CopyButton";
import styles from '../styles/Community.module.css';

export default function CopyText ({ text } : { text: string }){
    return (
        <div className = {styles.letterContainer}>
            <div className="flex justify-between align-center gap-1">
                <div className={styles.letterHeader}>Sample Letter:</div>
                <CopyButton text={text} />
            </div>

            <div className = {styles.text}>
                {text.split('\n').map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
            </div>
        </div>
    );
};