import React, { useState } from "react";
import AdminLayout from "./AdminLayout";

interface ChatMessage {
  sender: "admin" | "shop";
  content: string;
  timestamp: string;
}

interface ShopChat {
  id: number;
  shopName: string;
  issueSummary: string;
  lastMessage: string;
  lastTimestamp: string;
  avatar: string;
  messages: ChatMessage[];
}

const Messages: React.FC = () => {
  const [chats] = useState<ShopChat[]>([
    {
      id: 1,
      shopName: "TechHub Electronics",
      issueSummary: "Order delivery delay complaint",
      lastMessage: "Thank you, we’ll check it today.",
      lastTimestamp: "10:32 AM",
      avatar: "https://etimg.etb2bimg.com/photo/76159933.cms",
      messages: [
        { sender: "shop", content: "Hi, my delivery partner is delayed again.", timestamp: "10:15 AM" },
        { sender: "admin", content: "Thanks for reaching out. Can you share order ID?", timestamp: "10:20 AM" },
        { sender: "shop", content: "Sure, it’s ORD-98233", timestamp: "10:25 AM" },
        { sender: "admin", content: "Thank you, we’ll check it today.", timestamp: "10:32 AM" },
      ],
    },
    {
      id: 2,
      shopName: "Urban Fashion",
      issueSummary: "Payment not reflected",
      lastMessage: "Understood, please confirm once done.",
      lastTimestamp: "Yesterday",
      avatar: "https://i.ytimg.com/vi/UsV5lQ9kVJY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvcVX_rapybwEyLrWEb8HLrwi-qg",
      messages: [
        { sender: "shop", content: "Payment from Stripe not showing up.", timestamp: "Yesterday 09:20 AM" },
        { sender: "admin", content: "We’ll review and update shortly.", timestamp: "Yesterday 09:45 AM" },
        { sender: "shop", content: "Understood, please confirm once done.", timestamp: "Yesterday 09:48 AM" },
      ],
    },
    {
      id: 3,
      shopName: "GreenGrocer",
      issueSummary: "Account suspended",
      lastMessage: "Thank you for your patience.",
      lastTimestamp: "2 days ago",
      avatar: "https://content.jdmagicbox.com/v2/comp/hyderabad/u5/040pxx40.xx40.100703151805.c8u5/catalogue/the-best-kirana-and-general-store-bazarghat-hyderabad-general-stores-rpvx1.jpg",
      messages: [
        { sender: "shop", content: "My account got suspended, why?", timestamp: "2 days ago 08:10 AM" },
        { sender: "admin", content: "Please hold, we’re reviewing it.", timestamp: "2 days ago 08:20 AM" },
        { sender: "shop", content: "Okay, please let me know soon.", timestamp: "2 days ago 08:35 AM" },
        { sender: "admin", content: "Thank you for your patience.", timestamp: "2 days ago 08:40 AM" },
      ],
    },
  ]);

  const [activeChat, setActiveChat] = useState<ShopChat | null>(chats[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!activeChat || !newMessage.trim()) return;
    activeChat.messages.push({
      sender: "admin",
      content: newMessage,
      timestamp: "Now",
    });
    setNewMessage("");
  };

  return (
    <AdminLayout pageTitle="Messages">
      <div className="flex h-[84vh] bg-white rounded-3xl overflow-hidden">
        {/* Chat List */}
        <aside className="w-1/3 border-r border-gray-100 hidden md:flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800 text-lg">Shops with Issues</h2>
          </div>
          <div className="overflow-y-auto flex-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-50 transition-all ${
                  activeChat?.id === chat.id ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <img
                  src={chat.avatar}
                  alt={chat.shopName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 truncate">{chat.shopName}</p>
                  <p className="text-xs text-gray-500 truncate">{chat.issueSummary}</p>
                </div>
                <span className="text-xs text-gray-400">{chat.lastTimestamp}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {activeChat ? (
            <>
              <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                <img
                  src={activeChat.avatar}
                  alt={activeChat.shopName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{activeChat.shopName}</h3>
                  <p className="text-xs text-gray-500">{activeChat.issueSummary}</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {activeChat.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "admin" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow-sm ${
                        msg.sender === "admin"
                          ? "bg-gray-800 text-white rounded-br-none"
                          : "bg-white text-gray-700 rounded-bl-none"
                      }`}
                    >
                      {msg.content}
                      <div className="text-[10px] text-gray-400 mt-1 text-right">
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 p-4 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-gray-800 text-white rounded-xl text-sm hover:bg-gray-700 transition"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a chat to start
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Messages;
