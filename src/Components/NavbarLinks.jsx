//react-router-dom
import { Link } from "react-router-dom"

const navbarLinks = [
    {
        text: "Home",
        path: "/"
    },
    {
        text: "About",
        path: "/about"
    },
    {
        text: "Contact",
        path: "/contact"
    }
]

export default function NavbarLinks() {
    return (
        <>
            {navbarLinks.map((navbarLink) => {
                return <li key={navbarLink.text} >
                    <Link to={navbarLink.path}>{navbarLink.text}</Link>
                </li>
            })}
        </>
    )
}
