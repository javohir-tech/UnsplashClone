import { createBrowserRouter } from "react-router-dom";
import App from './App'
import { About, Contacts, Home } from "./Pages";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index: true,
                element:<Home/>
            },
            {
                path:"about", 
                element: <About/>
            }, 
            {
                path:"contacts",
                element:<Contacts/>
            }
        ]
    }
])

export default router