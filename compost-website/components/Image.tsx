"use client";

import styles from '../styles/Image.module.css'
import useImageChecker from '../hooks/useImageChecker';

interface ImageProps {
    src: string;
    alt?: string;
    description?: string;
}

export default function Image ({src, alt, description}: ImageProps) {
    const errorMsg = useImageChecker({ src: src });

    return (
        <div className = {styles.imageContainer}>
            <img className = {styles.image} src={src} alt={alt} />
            <div className = {styles.description}>{description}</div> 
        </div>
    );
}