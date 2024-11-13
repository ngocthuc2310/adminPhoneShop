import { useRef } from "react";
import "./style/styleAddHotel.css";
import { addproduct } from "../linkAPI/linkAPI";

export function AddProduct() {
  const refName = useRef("");
  const refCa = useRef("");
  const refPrice = useRef("");
  const refShort = useRef("");
  const refLong = useRef("");
  const refFile = useRef(null);
  const refFileValue = useRef(null);

  function submitInput() {
    const formD = new FormData();
    formD.append("name", refName.current.value);
    formD.append("category", refCa.current.value);
    formD.append("price", refPrice.current.value);
    formD.append("short_desc", refShort.current.value);
    formD.append("long_desc", refLong.current.value);
    for (let i = 0; i < refFile.current.length; i++) {
      formD.append("img", refFile.current[i]);
    }
    fetch(addproduct, {
      method: "POST",
      body: formD,
    })
      .then((x) => x.json())
      .then((y) => {
        alert(y.msg);
      })
      .catch((er) => console.log(er.message));
  }

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
            <label htmlFor="">Upload image(4 images)</label>
            <input
              ref={refFileValue}
              type="file"
              multiple
              className="image"
              onChange={(e) => {
                e.preventDefault();
                refFile.current = e.target.files;
              }}
            />
          </div>
        </div>
        <div className="button">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
