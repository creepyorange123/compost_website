/** Header component with image and title of each page */

"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import ImageChecker from './ImageChecker';

interface HeaderProps {
    title?: string;
    imageSrc?: string;
}

export default function Header({ title = "No Title", imageSrc = '' }: HeaderProps) {
    
    const [ message , setMessage ] = useState<string | null>(null)

    useEffect(() => {
        ImageChecker({ src: imageSrc, setter: setMessage });
        console.log("Checking image load for ", imageSrc);
        console.log("Message: ", message);
    }, []);

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