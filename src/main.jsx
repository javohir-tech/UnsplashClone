import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import { GlobalContextProvider } from './Context/globalConetxt.jsx'

createRoot(document.getElementById('root')).render(

  <GlobalContextProvider>
    <RouterProvider router={router} />
  </GlobalContextProvider>

)
