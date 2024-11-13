import { useEffect, useRef, useState } from "react";
import "./style/styleHotel.css";
import { deleteproduct, listProduct, searchProduct } from "../linkAPI/linkAPI";
import { Link } from "react-router-dom";

export function Products() {
  const [list, setList] = useState(null);
  const refQ = useRef("");
  useEffect(() => {
    fetch(listProduct)
      .then((x) => x.json())
      .then((y) => {
        setList(y);
      })
      .catch((er) => console.log(er));
  }, []);
  function evSubmit() {
    fetch(searchProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: refQ.current.value }),
    })
      .then((x) => x.json())
      .then((y) => {
        setList(y);
      })
      .catch((er) => console.log(er));
  }
  function evDelete(id) {
    fetch(deleteproduct + "?id=" + id)
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
        window.location.reload();
      })
      .catch((er) => console.log(er));
  }
  return (
    <div className="body">
      <div className="main1">
        <div className="head addnew">
          <span>
            <h2>Products</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                evSubmit();
              }}
            >
              <input type="text" placeholder="Enter Search!" ref={refQ} />
            </form>
          </span>
          <Link to={"/addproduct"}>Add New</Link>
        </div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th>Edit</th>
          </tr>
          {list &&
            list.map((x) => (
              <tr>
                <td>{x._id}</td>
                <td>{x.name}</td>
                <td>{x.price}</td>
                <td>
                  <img src={x.img1} alt="" />
                </td>
                <td>{x.category}</td>
                <td>
                  <Link to={"/updateproduct/" + x._id}>Update</Link>
                  <a
                    onClick={() => {
                      const tt = window.confirm("you really want to delete?");
                      if (tt) evDelete(x._id);
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
