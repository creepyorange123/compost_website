
import styles from '../../../styles/Text.module.css';

interface CalculatorProps {
    position: number;
}

export default function Calculator( {position}: CalculatorProps ) {

    const estimateLbs: number = Math.round(position * 3)/100 ;
    const estimateLbsYear: number = Math.round(estimateLbs * 48)
    const estimateMethane: number = Math.round(estimateLbs * 0.45392 * 0.037*1000)/1000;
    const estimateMethaneYear: number = Math.round(estimateMethane * 48);
    const estimateMiles: number = Math.round(estimateMethane * 86 / 0.4);
    const estimateMilesYear: number = Math.round(estimateMiles * 48);

    return (
        <div className = {styles.text}>
            You are saving {estimateLbs}lbs of compost waste per week, which is about {estimateLbsYear}lbs per year!
            <br /><br />
            According to an EPA report on estimated methane emissions from food waste, 34 metric tons of methane is released
            from 907 metric tons of food waste, meaning for every kg of food waste, there is 0.037kg of methane released in landfills. 
            <br /><br />
            You are reducing {estimateMethane}kg of methane emission per week, and about {estimateMethaneYear}kg per year
            <br /><br />
            Methane is 86 times more potent than CO2, and a gasoline car produces 400g of CO2 per mile.
            <br /><br />
            <b>This is equivalent to driving {estimateMiles} less miles per week, or about {estimateMilesYear} less miles per year.</b>
        </div>
    );
};