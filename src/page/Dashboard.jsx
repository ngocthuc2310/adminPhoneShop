import "./style/styleDasboard.css";
import { topmap, listOrder } from "../linkAPI/linkAPI.js";
import { useEffect, useState } from "react";
const icons = require("../icon/icon.jsx");

//======== component Dashboard ========================================
export function Dashboard() {
  const [topMap, setTopMap] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(listOrder)
      .then((x) => x.json())
      .then((y) => {
        setList(y);
      })
      .catch((er) => console.log(er));
  }, []);

  useEffect(() => {
    fetch(topmap)
      .then((x) => x.json())
      .then((y) => {
        setTopMap(y);
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <div className="body">
      <h3>Dashboard</h3>
      <div className="map">
        <div>
          <span>
            <h1>{topMap && topMap.client}</h1>
            <div>Client</div>
          </span>
          <span>
            <icons.Iconclient />
          </span>
        </div>
        <div>
          <span>
            <h1>{topMap && topMap.earningOfMonth}</h1>
            <div>Earning of Month</div>
          </span>
          <span>
            <icons.Icondolat />
          </span>
        </div>
        <div>
          <span>
            <h1>{topMap && topMap.order}</h1>
            <div>New order</div>
          </span>
          <span>
            <icons.Iconnew />
          </span>
        </div>
      </div>
      <div className="main">
        <div>
          <h2>History</h2>
        </div>
        <table>
          <tr>
            <th>ID User</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Date</th>
            <th>Total</th>
            <th>Delivery Method</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
          {list &&
            list.map((z) => (
              <tr>
                <td>{z.user._id}</td>
                <td>{z.user.phone}</td>
                <td>{z.user.phone}</td>
                <td>{z.address}</td>
                <td>
                  {new Date(z.date).getDate() +
                    "/" +
                    (new Date(z.date).getMonth() + 1) +
                    "/" +
                    new Date(z.date).getFullYear()}
                </td>
                <td>{z.total}</td>
                <td>Chưa vận chuyển</td>
                <td>chờ thanh toán</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
