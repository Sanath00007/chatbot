import React from "react";
import Chatbot from "./Chatbot.jsx";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>🩺 Symptom Checker Chatbot</h1>
      <Chatbot />
    </div>
  );
};

export default App;
