import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Donation from "../Pages/Donation/Donation";
import CardDetails from "../Components/CardDetails/CardDetails";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('../data.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/card/:id',
        element: <CardDetails></CardDetails>,
        loader: ()=>fetch('../data.json')
      },
    ]
  }
])

export default Router;