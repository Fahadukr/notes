// rafce
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="note-header">
            <Link to={'/'}>
                <h2 className="mynotes">&#9782;My Notes</h2>
            </Link>

            <Link to={'/about'}>
                <h2 className="about-button">About</h2>
            </Link>
        </div>
    )
}

export default Header;