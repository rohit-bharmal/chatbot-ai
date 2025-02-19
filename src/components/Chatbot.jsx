import React, { useState } from "react";
import { data } from "../utils/api";
import "./Chatbot.css";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const result = await data(prompt);
    setResponse(result);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-box">
        <h1 className="chatbot-title">💬 Ollama Chatbot</h1>
        <div className="input-container">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt..."
            className="chatbot-input"
          />
        </div>

        <button onClick={handleSubmit} className="chatbot-button">
          Send
        </button>
        {response && (
          <div className="chatbot-response">
            <strong>Response:</strong>
            <p>{JSON.stringify(response.response, null, 2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
