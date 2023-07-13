import { useEffect, useState } from "react";
import "./App.scss";
// import { Outlet } from "react-router-dom";
import Balloon from "./components/Balloon";
import Header from "./components/Header";
import Visual from "./components/Visual";
// import { Link } from "react-router-dom";

function App() {
  const txt = "Baek Seung Yeon’s portfolio!";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    // <RouterProvider router={routers}>
    <div className="wrap">
      <Header />
      {/* <Outlet /> */}
      <Visual />
      <Balloon text={text} compUrl="/profile" />
    </div>
    // </RouterProvider>
  );
}

export default App;
