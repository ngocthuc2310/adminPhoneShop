import "./style/styleLayout.css";
import { Link, Outlet } from "react-router-dom";
const icons = require("../icon/icon.jsx");

//============ component Layout trang ==================================
export function Layout() {
  return (
    <div className="admin">
      <div className="logo">
        <h3>Admin Page</h3>
      </div>
      <div className="tt"></div>
      <div className="menu">
        <h5>MAIN</h5>
        <Link to={"/admin_app"}>
          <icons.Icondashboard />
          Dashboard
        </Link>
        <span>LIST</span>
        {/* <Link to={"/users"}>
          <icons.Iconuser />
          User
        </Link> */}
        <Link to={"/admin_app/product"}>
          <icons.Iconproduct />
          Products
        </Link>
        <Link to={"/admin_app/chat"}>
          <icons.IconChat />
          Chat
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
