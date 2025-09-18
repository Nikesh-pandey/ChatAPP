import { useState } from "react";
import { chatApp } from "../Services/AxiosInstance";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    const reply = await chatApp(input);

    setMessages((prev) => [...prev, { role: "model", text: reply }]);

    setInput("");
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2> Chat </h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "5px 0" }}>
            <b>{m.role === "user" ? "You" : "Gemini"}:</b> {m.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "8px" }}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} style={{ padding: "8px 12px" }}>
        Send
      </button>
    </div>
  );
}

