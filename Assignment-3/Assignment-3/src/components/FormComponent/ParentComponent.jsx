import React, { useState } from "react";
import FormComponent from "./FormComponent";
import DisplayComponent from "./DisplayComponent";

const ParentComponent = () => {
    const [formData, setFormData] = useState(null);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Form Example</h1>
            <FormComponent setFormData={setFormData} />
            <DisplayComponent data={formData} />
        </div>
    );
};

export default ParentComponent;
