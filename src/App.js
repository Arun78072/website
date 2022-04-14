import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Main from './Component/Main'
import Product from './Component/Product'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <hr />
      <Outlet />
    </div>
  );
}



export default App;
