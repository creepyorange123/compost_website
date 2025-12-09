import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useState } from "react";
import { useImageExists } from "../../../hooks/useImageExists";
import styles from '../../../styles/Text.module.css';
import Calculator from "./Calculator";

export function WasteCalculator() {

    const [position, setPosition] = useState(50);
    const errormsg1 : string | null = useImageExists('/full-trash.png');
    const errormsg2 : string | null = useImageExists('/compost.png');

    console.log("Error 1:", errormsg1);
    console.log("Error 2:", errormsg2);

    return (
        <div className = {styles.bodyContainer}>
            {errormsg1 || errormsg2 ?
                <ReactCompareSlider
                    itemOne={<img
                        src='/full-trash.png'
                        alt={errormsg1? errormsg1 : "full trash"} />}
                    itemTwo={<img
                        src='/compost.png'
                        alt={errormsg2? errormsg2 : "compost"} />}
                    position={position}
                    onPositionChange={setPosition}
                /> : <h2> Sorry, some images died </h2>
            }
            <Calculator position={position} />
        </div>
    );
}