import './Header.css';
import logo from './images/logo.png'
import menu from './images/menu.png'
import backet from './images/backet.png'

function Header() {
    return (
        <header className="Header">
            <div className="navmenu">
                <div className="left">
                    <img src={logo} className="coffeLogo" alt="logo" />
                    <img src={menu} className="coffemenu" alt="menu" />
                    <a href="#" className="Menu">Menu</a>
                </div>

                <div className="center">
                    <nav>
                        <a href="#" className="aboutus">About us</a>
                        <a href="#"> Contacts</a>
                    </nav>
                </div>

                <div className="right">
                    <img src={backet} className="coffeMenu" alt="backet" />
                    <p>(0)</p>
                </div>
            </div>
        </header>
        )

}

export default Header