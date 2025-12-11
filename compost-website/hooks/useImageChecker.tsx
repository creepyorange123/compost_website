import { useEffect, useState } from "react";

export default function useImageChecker({ src }: { src: string }): string | null {

    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        
        const img: HTMLImageElement = new Image();

        img.onload = () => {
            console.log(`${src} loaded `)
            setMessage(null);
        };
        img.onerror = () => {
            console.log(`Error loading ${src}`);
            setMessage(`Error loading image: ${src}`);
        };

        img.src = src;

    }, [src]);
    
    return message;
}