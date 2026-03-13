import './CSS/style.css'
import {
    Router,
    Link
} from "react-router-dom";

export default function My_Page() {


    return (
        <Router>
            <nav className="navbar open-sans">
                <h2>Welcome</h2>
                <ul>
                    <li>Home</li>
                    <li><Link to={'/taskbar'}>Tasks</Link></li>
                    <li>Stats</li>
                </ul>
            </nav>
        </Router>
    )
}