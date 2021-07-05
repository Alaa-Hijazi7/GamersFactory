import { useRef, useEffect, useContext } from "react";
import { DirectChatBox } from "./style";
import Context from "@script/Context";
import useState from "@hook/useState";

import axios from "axios";

export default function ChatComponent({ activePrivetMessage, setOpenChat, socket }) {
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState("");
  const [state] = useContext(Context);
  const [chats, setChats] = useState([]);
  const roomName = `${state.player?._id}-${activePrivetMessage.user}`.split("-").sort().join(",");

  const scrollToBottom = () => messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

  useEffect(scrollToBottom, [chats]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    socket.emit("message", roomName, message, state.player?._id);
  };

  useEffect(() => {
    socket.emit("join_room", roomName, () => { });
    socket.on("message", ({ content, author }) => {
      const name = author === activePrivetMessage?.user ? activePrivetMessage.name : state.player?.name;
      const avatar = `${axios.defaults.baseURL}/users/${author}/avatar`;
      setChats([{ name, avatar, content, date: new Date() }]);
    });
  }, []);

  function MessageComponent({ text, name, date, isMe, image }) {
    return (
      <div className="messages" dir={isMe ? "rtl" : "ltr"} style={{ marginInlineStart: "0.5rem" }}>
        <div className="message">
          <img src={image} alt={name} />
          <h2>
            {name}
            <span>{date}</span>
            <p style={{ textAlign: isMe && "end" }} dir="ltr">
              {text}
            </p>
          </h2>
        </div>
      </div>
    )
  }
  return (
    <DirectChatBox>
      <div onClick={() => setOpenChat(false)}>
        <span className="iconify" data-icon="eva:arrow-ios-back-fill" data-inline="false" />
        Direct Messages
      </div>
      <div className="message-to">
        <img src={`${axios.defaults.baseURL}/users/${activePrivetMessage?.user}/avatar`} alt={activePrivetMessage?.name} />
        <h5>{activePrivetMessage?.name}</h5>
      </div>
      <div className="messages-container">
        {chats.map((data, index) => (
          <MessageComponent key={index}
            name={data.name}
            text={data.content} isMe={data.isMe}
            image={data.avatar}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="send-message"
          className="send-message__input"
          placeholder="Type Something"
          autoComplete="off"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <div onClick={handleSubmit} style={{ display: "flex" }}>
          <span className="iconify" data-icon="fluent:send-16-filled" data-inline="false"></span>
        </div>
      </form>
    </DirectChatBox>
  )
}