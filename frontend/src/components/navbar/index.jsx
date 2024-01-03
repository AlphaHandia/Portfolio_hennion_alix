import profileImage from "../../assets/images/alix-hennion.jpg";
import LanguageSelector from "../LanguageSelector/index";

let NavBar = () => {
  return (
    <nav className="navbar">
      <div className="left-side">
        <img src={profileImage} alt="alix hennion" className="ProfileImage" />

        <LanguageSelector />
      </div>
      <h1>Portfolio Alix Hennion </h1>
      <div className="right-side">
        <a href="/#Banner">Presentation</a>
        <a href="/#mainProject">Mes projets</a>
        <a href="/Contact">Contact</a>
      </div>
    </nav>
  );
};
export default NavBar;
