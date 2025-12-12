import { ReactCompareSlider } from "react-compare-slider";
import { useState } from "react";
import styles from '../styles/Calculator.module.css';
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

            <div className = {text_styles.text}>
                According to the largest known study of household food waste by MITRE and Gallup,
                the average American household wastes about 3 pounds of food per week. Below 
                is a trashcan representing this amount of food waste. Use the slider to estimate how much
                methane you can reduce by composting a certain percentage of your food waste 
                instead of throwing it in the trash!
            </div>


            {errorMsg1 || errorMsg2 ?
                <p>Error loading comparison slider.</p>
                :
                <div className = {styles.sliderContainer}>
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
            
            <div className = {styles.text}>
                Currently: {Math.round(position)}%
            </div>
            <Calculator position={position} />
        </div>
    );
}