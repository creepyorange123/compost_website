
import styles from '../../../styles/Text.module.css';

interface CalculatorProps {
    position: number;
}

export default function Calculator( {position}: CalculatorProps ) {

    const estimateLbs: number = Math.round(position * 0.02 * 100) ; // assuming 2,000 lbs of waste per year
    const estimateGHG: number = Math.round(position * 0.0012 * 100) / 100; // assuming 1.2 metric tons CO2e reduced per 1,000 lbs of composted waste
    const estimateEnergy: number = Math.round(estimateGHG * 870); // assuming 870 kWh per metric ton CO2e reduced

    return (
        <div className = {styles.body}>
            You are saving {estimateLbs}lbs of compost waste!
            If, instead of going to landfill, this amount of food waste were composed,
            it would reduce greenhouse gas emissions by approximately {estimateGHG} 
            metric tons of CO2 equivalent per year. <br />
            The amount of energy regenerated can power a house for about {Math.round(estimateEnergy / 5)} days,
            or power Boston for about {Math.round(estimateEnergy / 10)} hours!
        </div>
    );
};