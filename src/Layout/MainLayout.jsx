//components
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components'

function MainLayout() {
  return (
    <>
     <Navbar/> 
     <main>
        <Outlet/>
     </main>
    </>
  )
}

export default MainLayout
