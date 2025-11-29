/** Hook providing error message if image fails to load */

"use client";

import { useState } from "react";

export function useImageExists(imageUrl: string) {

    const [message, setMessage] = useState<string | null>(null);

    const img: HTMLImageElement = new Image();
    img.onload = () => {
        console.log(`${imageUrl} loaded `)
    }
    img.onerror = () => {
        setMessage('Sorry, the image disappeared ;-;');
        console.log(`Image not found at ${imageUrl}`);
    }
    img.src = imageUrl;

    return message;
};