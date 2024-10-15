import { Link } from "react-router-dom";

export default function Pageheader(){

    return(
        <header className="header">
            <div className="logo">My Website</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Log in</Link></li>
                </ul>
            </nav>
        </header>
    )
}