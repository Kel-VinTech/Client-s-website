import "./Navbar.scss"
import {BiLogoFacebook,BiLogoLinkedin,BiLogoTwitter,BiSearch} from "react-icons/bi"
import {Link} from "react-router-dom"
// import { useState } from "react"

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
                        <ul className="header-links">
                            <li><Link to="#">Hello
                            </Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
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



// const DropdownMenu = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <a href="#" className={`link ${isHovered ? 'hovered' : ''}`}>
//         Hover Me
//       </a>
//       {isHovered && (
//         <div className="dropdown-menu">
//           <ul>
//             <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
//             <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
//             <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
//           </ul>
//         </div>
//       )}
//       {selectedOption && (
//         <div className="selected-option">
//           Selected Option: {selectedOption}
//         </div>
//       )}
//     </div>
//   );
// };












