import './CSS/style.css'
import {
    Link
} from "react-router-dom";

export default function My_Page() {


    return (
        
            <nav className="navbar open-sans">
                <h2>Welcome</h2>
                <ul>
                    <li>Home</li>
                    <li><Link to={'/taskbar'}>Tasks</Link></li>
                    <li>Stats</li>
                </ul>
            </nav>
        
    )
}