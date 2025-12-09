interface CalculatorProps {
    position: number;
}

export default function Calculator( {position}: CalculatorProps ) {
    return (
        <div>
            <h2>Waste Reduction Calculator</h2>
            <p>Slider Position: {position}%</p>
        </div>
    )
}