import { NavLink } from 'react-router-dom'

//custom react hooks
import { useGlobalContext } from '../Hooks/useGlobalContext';

//react icons
import { FaHeart } from "react-icons/fa6";

export default function Navbar() {
  const { colors, bgColorChange } = useGlobalContext()
  console.log(colors);

  return (
    <>
      <nav className='bg-slate-300 py-5' style={{ backgroundColor: bgColorChange ? bgColorChange : "" }}>
        <div className='container mx-auto'>
          <div className='flex justify-between'>
            <NavLink to="/"><h3>Logo</h3></NavLink>
            <div className='flex items-center gap-5'>
              <NavLink to="/" >Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
              <NavLink to="/likesImages"><FaHeart /></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
