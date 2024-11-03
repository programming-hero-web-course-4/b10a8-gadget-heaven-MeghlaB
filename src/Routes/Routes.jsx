import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Cards from "../Pages/Cards";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<h1 className="text-center py-6 text-5xl font-bold text-purple-700">404 Page Not Found</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/public/Prodeucts.json'),
                children:[
                    {
                       path:'/product/:name',
                       element:<Cards></Cards>,
                       loader:()=>fetch('../AllProducts.json')
                    }
                ]

            }
        ]
    }
])

export default router