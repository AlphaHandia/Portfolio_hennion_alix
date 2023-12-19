import profileImage from '../../assets/images/alix-hennion.jpg'
import LanguageSelector from "../LanguageSelector/index";

let NavBar = () => {
 return (
 <nav className="navbar">
    <div className="left-side">
    <img src={profileImage} alt="alix hennion" />

    <LanguageSelector/>
    </div>
    
    <h1>Portfolio Alix Hennion </h1>
    <div className='right-side'>
    <a href=" ">Presentation</a> 
    <a href=" ">Mes projets</a>
    <a href=" ">Contact</a>
    </div>
 </nav>
 )
}
export default NavBar;