import profileImage from '../../assets/images/alix-hennion.jpg'
import LanguageSelector from "../LanguageSelector/index";

let NavBar = () => {
 return (
 <nav className="navbar">
    <div className="left-side">
    <img src={profileImage} alt="alix hennion" />
    </div>
    <LanguageSelector/>
    <h1>Portfolio Alix Hennion </h1>
    <a href=" ">Presentation</a> 
    <a href=" ">Mes projets</a>
    <a href=" ">Contact</a> 
 </nav>
 )
}
export default NavBar;