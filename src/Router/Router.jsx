import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import Home from "../pages/Home";
import FarmingGuide from "../pages/FarmingGuide";
import CropDetails from "../pages/CropDetails";
import PestControlStrategies from "../pages/PestControlStrategies";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/farming-guide",
        element: <FarmingGuide />,
      },
      {
        path: "/crop-details",
        element: <CropDetails />,
      },
      {
        path: "/pest-control",
        element: <PestControlStrategies />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
