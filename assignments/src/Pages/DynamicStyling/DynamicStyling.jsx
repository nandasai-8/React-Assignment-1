import { useState } from 'react'

const DynamicStyling = () => {
    const [isBlue, setIsBlue] = useState(true);
    const handleClick = () => {
        setIsBlue(!isBlue);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: isBlue ? "blue" : "tomato",
                color: "white",
                padding: "12px 24px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px"
            }}
        >
            {isBlue ? "Blue Button" : "Red Button"}
        </button>
    )
}

export default DynamicStyling