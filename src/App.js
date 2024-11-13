import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./page/Layout";
import { Dashboard } from "./page/Dashboard";
import { Products } from "./page/Products";
import { AddProduct } from "./page/AddProduct";
import { Chat } from "./page/Chat";
import { UpdateProduct } from "./page/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin_app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin_app/product" element={<Products />} />
            <Route path="/admin_app/addproduct" element={<AddProduct />} />
            <Route path="/admin_app/chat" element={<Chat />} />
            <Route
              path="/admin_app/updateproduct/:id"
              element={<UpdateProduct />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
