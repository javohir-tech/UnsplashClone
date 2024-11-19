import { createBrowserRouter } from "react-router-dom";
import App from "./App";

//pages
import { About, Contact, Home, LikedImages } from "./Pages";

import {action as HomeAction} from './Pages/Home'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                index: true,    
                element: <Home/>,
                action:HomeAction
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/likedImages",
                element:<LikedImages/>
            }, 

        ]
    }
])

export default router