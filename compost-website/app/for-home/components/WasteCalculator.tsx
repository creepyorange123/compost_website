import { ReactCompareSlider, ReactCompareSliderHandle } from "react-compare-slider";
import { useState } from "react";
import image_styles from '../styles/Calculator.module.css';
import text_styles from '../../../styles/Text.module.css';
import Calculator from "./Calculator";
import useImageChecker from "@/hooks/useImageChecker";

export function WasteCalculator() {

    const [position, setPosition] = useState(50);
    const errorMsg1 = useImageChecker({ src: '/full-trash.png' });
    const errorMsg2 = useImageChecker({ src: '/full-trash.png' });

    return (
        <div className = {text_styles.bodyContainer}>
            <div className = {text_styles.title}>Waste Reduction Calculator</div>

            {errorMsg1 || errorMsg2 ?
                <p>Error loading comparison slider.</p>
                :
                <div className = {image_styles.sliderContainer}>
                    <ReactCompareSlider
                        itemOne={<img
                            src='/full-trash.png'
                            alt={"full trash"}
                        />}
                        itemTwo={<img
                            src='/full-trash.png'
                            alt={"compost"}
                        />}
                        position={position}
                        onPositionChange={setPosition}
                    />
                </div>
            }   
            <div className = {text_styles.body}>
                Toggle the slider above to decide how much of the waste above will be composed!<br />
                Currently: {Math.round(position)}%
            </div>
            <Calculator position={position} />
        </div>
    );
}