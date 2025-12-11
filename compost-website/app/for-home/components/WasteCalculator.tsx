import { ReactCompareSlider } from "react-compare-slider";
import { useEffect, useState } from "react";
import styles from '../../../styles/Text.module.css';
import Calculator from "./Calculator";
import useImageChecker from "@/hooks/useImageChecker";

export function WasteCalculator() {

    const [position, setPosition] = useState(50);
    const errorMsg1 = useImageChecker({ src: '/full-trash.png' });
    const errorMsg2 = useImageChecker({ src: '/full-trash.png' });

    return (
        <div className = {styles.bodyContainer}>
            {errorMsg1 || errorMsg2 ?
                <p>Error loading comparison slider.</p>
                :
                <ReactCompareSlider
                    itemOne={<img
                        src='/full-trash.png'
                        alt={"full trash"} />}
                    itemTwo={<img
                        src='/full-trash.png'
                        alt={"compost"} />}
                    position={position}
                    onPositionChange={setPosition}
                />
            }
            <Calculator position={position} />
        </div>
    );
}