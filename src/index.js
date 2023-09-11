import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import QuizPortfolio from './components/pages/modal/QuizPortfolio';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<NotFound />,
  },
  {
    path:'/profile',
    element:<Profile />,
    errorElement:<NotFound />,
  },
  {
    path:'/skills',
    element:<Skills />,
    errorElement:<NotFound />,
  },
  {
    path:'/portfolio',
    element:<Portfolio />,
    errorElement:<NotFound />,
  },
  {
    path:'/contact',
    element:<Contact />,
    errorElement:<NotFound />,
  },
  {
    path:'/quizportfolio',
    element:<QuizPortfolio />,
    errorElement:<NotFound />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);