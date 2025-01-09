import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";
import NotFound from "../page/NotFound";

import { createBrowserRouter,createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/board",
        element: <Board />
      },
      {
        // path: "/About",
        index:true,
        element: <About />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/article/:id/:name",
    element: <Article />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;