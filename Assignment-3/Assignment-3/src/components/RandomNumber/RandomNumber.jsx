import React, { useState } from "react";

const RandomNumber = () => {
    const [number, setNumber] = useState(0);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 1000000) + 1; // Random number between 1 and 100
        setNumber(randomNum);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Random Number Generator</h1>
            <h2 >{number}</h2>
            <button onClick={generateRandomNumber} className="btn btn-danger p-2">Generate Random Number</button>
        </div>
    );
};

export default RandomNumber;
