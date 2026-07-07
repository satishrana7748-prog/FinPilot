import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm FinPilot AI. Ask me about Stocks, Gold, Bitcoin or Portfolio.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    const user = {
      sender: "user",
      text: userMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChat((prev) => [...prev, user]);

    setMessage("");

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to FinPilot AI.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white shadow-2xl text-3xl hover:scale-110 transition"
      >
        <FaRobot />
      </button>

      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-700 p-5 text-white">
            <h2 className="font-bold text-xl">FinPilot AI Assistant</h2>
          </div>

          <div className="h-80 overflow-y-auto p-5 space-y-4">
            {chat.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[80%]
                  ${
                    item.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200"
                  }`}
                >
                  <div>
                    <p>{item.text}</p>

                    <p className="text-[10px] opacity-60 mt-1">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-200 px-4 py-2 rounded-xl animate-pulse">
                  FinPilot AI is typing...
                </div>
              </div>
            )}
          </div>

          <div className="flex border-t">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask FinPilot AI..."
              className="flex-1 px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="px-5 bg-cyan-600 text-white"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
