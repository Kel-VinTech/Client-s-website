import "./Navbar.scss"
import {BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter,BiSearch} from "react-icons/bi"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="header">
            <nav>
                <div className="first-header">
                    <div className="content">
                        <h3>Call: 07494 748165</h3>
                        <div className="social-icons">
                            <BiLogoFacebook className="icon"/>
                            <BiLogoLinkedin className="icon"/>
                            <BiLogoTwitter className="icon"/>
                        </div>
                    </div>
                </div>
                

                <div className="main-header">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>

                    <div className="Nav-links">
                        <ul>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Blog</Link></li>
                        </ul>
                        <span><BiSearch/></span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar


