import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import { GlobalContextProvider } from './Context/globalConetxt.jsx'

//toast 
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(

  <GlobalContextProvider>
    <RouterProvider router={router} />
    <ToastContainer position='top-right'/>
  </GlobalContextProvider>

)
