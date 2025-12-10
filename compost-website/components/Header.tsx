/** Header component with image and title of each page */

"use client";

import useImageChecker from '../hooks/useImageChecker';
import styles from '../styles/Header.module.css';

interface HeaderProps {
    title?: string;
    imageSrc?: string;
}

export default function Header({ title = "No Title", imageSrc = '' }: HeaderProps) {
    
    const message : string | null = useImageChecker({ src: imageSrc });

    return (
        <div className={styles.headerContainer}>
            <img
                src={imageSrc}
                alt={ message? message : "Header Image" }
                className={styles.headerImage}
            />
            <h1 className={styles.headerTitle}>{title}</h1>
        </div>
    )
}