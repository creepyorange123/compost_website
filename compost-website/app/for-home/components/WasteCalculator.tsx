import { ReactCompareSlider } from "react-compare-slider";
import { useEffect, useState } from "react";
import styles from '../../../styles/Text.module.css';
import Calculator from "./Calculator";
import ImageChecker from "../../../components/ImageChecker";

export function WasteCalculator() {

    const [position, setPosition] = useState(50);
    const [errorMsg1, setErrorMsg1] = useState<string | null>(null);
    const [errorMsg2, setErrorMsg2] = useState<string | null>(null);

    useEffect(() => {
        ImageChecker({ src: '/full-trash.png', setter: setErrorMsg1 });
        ImageChecker({ src: '/full-trash.png', setter: setErrorMsg2 });
    }, []);

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