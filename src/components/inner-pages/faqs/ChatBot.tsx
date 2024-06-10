import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./css/ChatBot.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!input) return;

    if (input.trim() === "/clear") {
      setMessages([]);
      setInput("");
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);
    setInput("");
    setIsTyping(true);

    try {
      let responseText = "";
      const lowerCaseInput = input.toLowerCase();

      if (
        lowerCaseInput.includes("donate") ||
        lowerCaseInput.includes("donasi")
      ) {
        responseText =
          "Untuk berdonasi, silakan <a href='https://donasi.tirta.site/causes' target='_blank' style='color: blue;'>klik di sini</a>.";
      } else if (
        lowerCaseInput.includes("kontak") ||
        lowerCaseInput.includes("hubungi") ||
        lowerCaseInput.includes("bantu") ||
        lowerCaseInput.includes("tolong")
      ) {
        responseText =
          "Anda dapat menghubungi kami melalui halaman kontak di 081284964533.";
      } else if (
        lowerCaseInput.includes("galang") ||
        lowerCaseInput.includes("dana") ||
        lowerCaseInput.includes("jadi")
      ) {
        responseText =
          "Untuk menjadi volunteer atau penggalang dana silakan <a href='https://donasi.tirta.site/become-volunteers' target='_blank' style='color: blue;'>klik di sini</a> untuk menjadi relawan";
      } else if (
        lowerCaseInput.includes("trust") ||
        lowerCaseInput.includes("percaya")
      ) {
        responseText =
          "Bisa dibilang website ini baru beroprasi dan pengguna nya juga sedikit tapi insyallah kita bisa di percaya kok, bisa di lihat pada  <a href='https://donasi.tirta.site/become-volunteers' target='_blank' style='color: blue;'>link berikut</a> ini adalah portfolio kami yang telah selesai penggalangan dana nya";
      } else if (
        lowerCaseInput.includes("tentang kami") ||
        lowerCaseInput.includes("info")
      ) {
        responseText =
          "Informasi lebih lanjut tentang kami dapat ditemukan di halaman tentang kami, silakan <a href='https://donasi.tirta.site/about' target='_blank' style='color: blue;'>klik di sini</a>.";
      } else if (
        lowerCaseInput.includes("volunteer") ||
        lowerCaseInput.includes("volu") ||
        lowerCaseInput.includes("parti") ||
        lowerCaseInput.includes("partisipasi") ||
        lowerCaseInput.includes("ber")
      ) {
        responseText =
          "Informasi lebih lanjut yang telah berpartisipasi dapat ditemukan di halaman volounteer, silakan <a href='https://donasi.tirta.site/volunteers' target='_blank' style='color: blue;'>klik di sini</a>.";
      } else {
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error("API key is missing");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(input);
        responseText = result.response.text();
      }

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: responseText },
        ]);
        setIsTyping(false);
      }, 2000); // Penundaan 2 detik untuk efek typing
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Maaf, terjadi kesalahan." },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-bot">
      <div className="messages">
        <div className="section-title text-center mb-55">
          <span className="section-title__subtitle mt-2 mb-10">Chat Bot</span>
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender}`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          ></div>
        ))}
        {isTyping && (
          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
