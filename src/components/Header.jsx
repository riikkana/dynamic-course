import logo from "../img/logo.png";

const Header = () => {
    
    return (
        <div className="header">
            <img src={logo} alt="Company logo" className="logo" />
            <h2> This is my product page! </h2>
        </div>
    );
};

export default Header;
