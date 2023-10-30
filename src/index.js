import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import ReactPortfolio from "./components/pages/modal/ReactPortfolio";
import QuizPortfolio from "./components/pages/modal/QuizPortfolio";
import ArcPortfolio from "./components/pages/modal/ArcPortfolio";
import PoloPortfolio from "./components/pages/modal/PoloPortfolio";
import YoutubePortfolio from "./components/pages/modal/YoutubePortfolio";
import MoPortfolio from "./components/pages/modal/MoPortfolio";
import VuePortfolio from "./components/pages/modal/VuePortfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <NotFound />,
  },
  {
    path: "/skills",
    element: <Skills />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio/reactportfolio",
    element: <ReactPortfolio />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio/quizportfolio",
    element: <QuizPortfolio />,
    errorElement: <NotFound />,
  },
  {
    path: "/portfolio/arcportfolio",
    element: <ArcPortfolio />,
    errorElement: <NotFound />
  },
  {
    path: "/portfolio/poloportfolio",
    element: <PoloPortfolio />,
    errorElement: <NotFound />
  },
  {
    path: "/portfolio/youtubeportfolio",
    element: <YoutubePortfolio />,
    errorElement: <NotFound />
  },
  {
    path: "/portfolio/moportfolio",
    element: <MoPortfolio />,
    errorElement: <NotFound />
  },
  {
    path: "/portfolio/vueportfolio",
    element: <VuePortfolio />,
    errorElement: <NotFound />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
