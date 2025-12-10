import { useState } from "react";

interface ImageCheckerProps {
    src: string;
    setter: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ImageChecker({ src, setter }: ImageCheckerProps) {

    const img: HTMLImageElement = new Image();
    img.onload = () => {
        console.log(`${src} loaded `)
        setter(null);
    }
    img.onerror = () => {
        console.log(`${src} not loaded`);
        setter('Image failed to load');
    }
    
    img.src = src;
}