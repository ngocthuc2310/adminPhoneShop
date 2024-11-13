import { useEffect, useRef, useState } from "react";
import "./style/styleAddHotel.css";
import { productdetail, updateproduct } from "../linkAPI/linkAPI";
import { useParams } from "react-router-dom";

export function UpdateProduct() {
  const refName = useRef("");
  const refCa = useRef("");
  const refPrice = useRef("");
  const refShort = useRef("");
  const refLong = useRef("");
  const refImgs = useRef([]);
  const [render, setRender] = useState(true);
  const pr = useParams();

  function submitInput() {
    const obj = {
      id: pr.id,
      name: refName.current.value,
      category: refCa.current.value,
      price: refPrice.current.value,
      short_desc: refShort.current.value,
      long_desc: refLong.current.value,
    };
    fetch(updateproduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
      })
      .catch((er) => alert(er.message));
  }

  useEffect(() => {
    fetch(productdetail + "?id=" + pr.id)
      .then((x) => x.json())
      .then((y) => {
        refCa.current.value = y.category;
        refName.current.value = y.name;
        refPrice.current.value = y.price;
        refLong.current.value = y.short_desc;
        refShort.current.value = y.short_desc;
        refImgs.current = [y.img1, y.img2, y.img3, y.img4];
        setRender((x) => !x);
      })
      .catch((er) => console.log(er.message));
  }, []);

  return (
    <div className="addhotel">
      <div className="header">Add Product</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitInput();
        }}
      >
        <div className="form">
          <div>
            <label htmlFor="">Product Name</label>
            <input type="text" ref={refName} />
            <label htmlFor="">Category</label>
            <input type="text" ref={refCa} />
            <label htmlFor="">Price</label>
            <input type="text" ref={refPrice} />
            <label htmlFor="">Short Description</label>
            <textarea ref={refShort}></textarea>
            <label htmlFor="">Long Description</label>
            <textarea ref={refLong}></textarea>
            <label htmlFor="">Image</label>
            <div className="image">
              <img src={refImgs.current[0]} alt="" />
              <img src={refImgs.current[1]} alt="" />
              <img src={refImgs.current[2]} alt="" />
              <img src={refImgs.current[3]} alt="" />
            </div>
          </div>
        </div>
        <div className="button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
