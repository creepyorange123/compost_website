/** Hook providing error message if image fails to load */

"use client";

import { useState, useEffect } from "react";

export function useImageExists(imageUrl: string = 'default.png') {
    const [message, setMessage] = useState<string | null>(null);
    
    useEffect(() => {

        const img: HTMLImageElement = new Image();
        img.onload = () => {
            console.log(`${imageUrl} loaded `)
            setMessage(null);
        }
        img.onerror = () => {
            setMessage('Sorry, the image disappeared ;-;');
            console.log(`Image not found at ${imageUrl}`);
        }
        img.src = imageUrl;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [imageUrl]);

    return message;
};