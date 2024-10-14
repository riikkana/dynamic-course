import logo from "../img/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Company logo" className="logo" />
                <h2> This is my product page! </h2>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
