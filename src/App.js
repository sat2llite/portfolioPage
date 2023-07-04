import "./App.scss";
import { Outlet } from "react-router-dom";
import Balloon from "./components/Balloon";
import Header from "./components/Header";
import Visual from "./components/Visual";
import { Link } from "react-router-dom";

function App() {
  return (
    // <RouterProvider router={routers}>
    <div className="wrap">
      <Header />
      {/* <Outlet /> */}
      <Visual />
      <Link to="/profile">
        <Balloon props="Baek Seung Yeon’s portfolio!" />
      </Link>
    </div>
    // </RouterProvider>
  );
}

export default App;
