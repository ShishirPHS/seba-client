import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Doctors from "../pages/Doctors/Doctors";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/add-doctor",
        element: <AddDoctor></AddDoctor>,
      },
      {
        path: "/doctor-details/:id",
        element: <DoctorDetails></DoctorDetails>,
      },
    ],
  },
]);

export default router;
