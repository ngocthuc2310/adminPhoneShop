import "./styleIcon.css";

const user = require("./icon/User.png");
const dashboard = require("./icon/DashBoard.png");
const exit = require("./icon/exit.png");
const hotel = require("./icon/hotel.png");
const room = require("./icon/room.png");
const transaction = require("./icon/transaction.png");
const dola = require("./icon/dola.png");
const users = require("./icon/users.png");
const khauhao = require("./icon/khauhao.png");
const order = require("./icon/order.png");
const product = require("./icon/product.png");
const chat = require("./icon/chat.png");
const arvarta = require("./icon/man.png");
const send = require("./icon/sent.png");
const online = require("./icon/manonline.png");

export function Iconuser() {
  return <img src={user} className="icon" />;
}
export function Icondashboard() {
  return <img src={dashboard} className="icon" />;
}
export function Iconexit() {
  return <img src={exit} className="icon" />;
}
export function Iconhotel() {
  return <img src={hotel} className="icon" />;
}
export function Iconroom() {
  return <img src={room} className="icon" />;
}
export function Icontransaction() {
  return <img src={transaction} className="icon" />;
}
export function Icondola() {
  return <img src={dola} className="icon1" />;
}
export function Iconusers() {
  return <img src={users} className="icon1" />;
}
export function Iconkhauhao() {
  return <img src={khauhao} className="icon1" />;
}
export function Iconorder() {
  return <img src={order} className="icon1" />;
}
export function Iconproduct() {
  return <img src={product} className="icon1" />;
}
export function Iconclient() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
      />
    </svg>
  );
}
export function Icondolat() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
export function Iconnew() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
    </svg>
  );
}
export function IconChat() {
  return <img src={chat} className="icon1" />;
}
export function IconAvarta() {
  return <img src={arvarta} className="icon1" />;
}
export function IconSend() {
  return <img src={send} className="icon2" />;
}
export function IconOnline() {
  return <img src={online} className="icon1" />;
}
