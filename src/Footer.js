import './Footer.css';
import logo from './images/logo.png'

function Footer() {
    return (
        <header className="footer">
            <div className="footer-info">
                <div className="left-text">
                    <img src={logo} className="coffeLogo" alt="logo" />
                </div>

                <div className="right-text">
                    <p className="touch">We’re in touch with you</p>
                    <p className="contact">+7 (900) 123 45 67 </p>
                </div>
            </div>
        </header>
    )

}

export default Footer