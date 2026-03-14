import './CSS/style.css'
import './CSS/container.css'
import {
    Link
} from "react-router-dom";

export default function My_Page() {

    return (

        <nav className="navbar open-sans">
            <h2>Welcome</h2>
            <ul>
                <li><Link to={'/'} className='normalisation'>Home</Link></li>
                <li><Link to={'/taskbar'} className='normalisation'>Tasks</Link></li>
                <li>Stats</li>
            </ul>
        </nav>

    )
}