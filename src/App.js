import React from "react";
import { Form } from "@formio/react";

const App = () => {
    // Define the Formio wizard form URL
    const formUrl = "https://formio-dev.iis-ssb.com/dev/wizard";

    return (
        <div style={{ padding: "20px" }}>
            <h1>Formio Wizard Form</h1>
            {/* Render the Formio wizard form */}
            <Form src={formUrl} />
        </div>
    );
};

export default App;
