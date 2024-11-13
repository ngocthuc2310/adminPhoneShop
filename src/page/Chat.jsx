import { useEffect, useRef, useState } from "react";
import { IconAvarta, IconOnline, IconSend } from "../icon/icon";
import "./style/styleChat.css";
import io from "socket.io-client";
import { session } from "../linkAPI/linkAPI";
const socket = io("https://shop-38kh.onrender.com");

export function Chat() {
  const [chat, setChat] = useState({
    online: [],
    content: [],
  });
  const [message, setMessage] = useState({
    online: [],
    content: [],
  });
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(0);
  const tt = useState(true);
  const inputt = useRef("");

  useEffect(() => {
    socket.on("chat", (chatt) => {
      setChat(chatt);

      const rr = chatt.content.filter(
        (x, i) => chatt.content.findIndex((y) => y.roomId == x.roomId) == i
      );
      const yy = rr.map((x) => x.roomId);
      setRooms(yy);
      if (rr.length == 1) setRoom(rr[0].roomId);
    });

    fetch(session)
      .then((x) => x.json())
      .then((y) => {
        const rr = y.content.filter(
          (x, i) => y.content.findIndex((y) => y.roomId == x.roomId) == i
        );
        const yy = rr.map((x) => x.roomId);
        setRooms(yy);
        setChat({ ...y, online: [] });
      })
      .catch((er) => console.log(er));

    return () => {
      socket.off("chat");
    };
  }, []);

  useEffect(() => {
    let ee = [...chat.content].filter((x) => x.roomId === room);
    setMessage({ content: ee });
  }, [chat]);

  function evSend() {
    const msg = {
      online: chat.online,
      content: [
        ...chat.content,
        {
          roomId: room,
          user: "admin",
          input: inputt.current.value,
        },
      ],
    };
    socket.emit("chat", msg);
    inputt.current.value = "";
    setTimeout(() => {
      const rr = document.querySelector(".content");
      rr.scrollTop = rr.scrollHeight;
    }, 500);
    tt[1]((x) => !x);
  }

  function evSelect(id) {
    setRoom(id);
    let ee = [...chat.content].filter((x) => x.roomId === id);
    setMessage({ content: ee });
  }

  return (
    <div className="body">
      <div className="main1">
        <div className="chat">
          <div className="rooms">
            <h2>Chat</h2>
            <p>App/chat</p>
            <input type="text" placeholder="Search Contact" />
            {rooms &&
              rooms.map((x) => (
                <div
                  onClick={(e) => {
                    evSelect(x);
                  }}
                >
                  {chat.online.includes(x) ? <IconOnline /> : <IconAvarta />}
                  <span>{x}</span>
                </div>
              ))}
          </div>
          <div className="content">
            {message &&
              message.content.map((x) =>
                x.user == "admin" ? (
                  <div className="ad">
                    <span>You: {x.input}</span>
                  </div>
                ) : (
                  <div className="client">
                    <IconAvarta />
                    <span>Client: {x.input}</span>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <form
        className="send"
        onSubmit={(e) => {
          e.preventDefault();
          evSend();
        }}
      >
        <input
          type="text"
          ref={inputt}
          placeholder="chat xong nhớ nhập /end để lưu"
        />
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            evSend();
          }}
        >
          <IconSend />
        </a>
      </form>
    </div>
  );
}
