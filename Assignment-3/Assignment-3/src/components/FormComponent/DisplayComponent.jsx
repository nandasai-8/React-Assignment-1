import React from "react";

const DisplayComponent = ({ data }) => {
    if (!data) return <p>No data submitted yet.</p>;

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #007BFF",
                borderRadius: "10px",
                backgroundColor: "#f0f8ff",
            }}
        >
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Location:</strong> {data.location}</p>
        </div>
    );
};

export default DisplayComponent;
