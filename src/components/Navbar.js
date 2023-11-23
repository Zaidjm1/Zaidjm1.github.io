import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="navbar">
                <Link to='/' className="home">FRONT-END</Link>
                <Link to='/' className="home--button">Home</Link>
                <Link to='/about' className="about">About</Link>
                <Link to='/contact' className="contacts">Contacts</Link>
        </nav>
    )
}