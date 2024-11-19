//components
import { NavbarLinks } from './'

//rect icons 
import { FcStackOfPhotos } from "react-icons/fc";
import { IoIosHeart } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";

//react
import { useEffect, useState } from 'react';

//react-router-dom
import { Link } from 'react-router-dom';

function Navbar() {

    //toogle theme
    const themeFromLocal = () => {
        return localStorage.getItem("theme") || "winter"
    }

    const [theme, setTheme] = useState(themeFromLocal());

    const toggleTheme = () => {
        const newTheme = theme === "winter" ? "dracula" : "winter"
        setTheme(newTheme)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <nav className='bg-base-300'>
            <div className='container'>
                <div className='navbar'>
                    <div className='navbar-start'>
                       <Link to="/"> <FcStackOfPhotos className='w-8 h-8' /></Link>
                    </div>
                    <div className='navbar-center'>
                        <ul className="menu menu-horizontal rounded-box flex">
                            <NavbarLinks />
                        </ul>
                    </div>
                    <div className='navbar-end flex gap-3 items-center align-middle'>
                        <div>
                            <Link to="/likedImages"><IoIosHeart className='w-7 h-7' /></Link>
                        </div>
                        <div>
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input onClick={toggleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                                {/* sun icon */}
                                <FiSun className='swap-on h-6 w-6 fill-current' />

                                {/* moon icon */}
                                <FaMoon className='swap-off h-6 w-6 fill-current' />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
