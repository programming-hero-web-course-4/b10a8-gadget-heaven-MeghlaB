import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Cards from "../Pages/Cards";
import Statistics from "../Components/Statistics";
import Dashboard from "../Components/Dashboard";
import Cartdetails from "../Pages/Cartdetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<h1 className="text-center py-6 text-5xl font-bold text-purple-700">404 Page Not Found</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/Prodeucts.json'),
                children:[
                    {
                       path:'/',
                       element:<Cards></Cards>,
                       loader:()=>fetch('/AllProducts.json')
                    },
                    {
                       path:'/product/:name',
                       element:<Cards></Cards>,
                       loader:()=>fetch('/AllProducts.json')
                    }
                ]
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader:()=>fetch('/AllProducts.json'),
                
            },
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }

        ]
    }
])

export default router