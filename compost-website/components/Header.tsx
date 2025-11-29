/** Header component with image and title of each page */

"use client";

import styles from '../styles/Header.module.css';
import { useImageExists } from '../hooks/useImageExists';

interface HeaderProps {
    title: string;
    imageSrc: string;
}

export default function Header({ title, imageSrc }: HeaderProps) {
    const imageErrorMessage: string | null = useImageExists(imageSrc);
    
    return (
        <div className={styles.headerContainer}>
            <img
                src={imageSrc}
                alt={ imageErrorMessage ? imageErrorMessage : "Header Image" }
                className={styles.headerImage}
            />
            <h1 className={styles.headerTitle}>{title}</h1>
        </div>
    )
}