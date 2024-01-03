import NavBar from "../components/navbar";
import { useTheme } from "../components/theme-switch/ThemeContext";
import CyberCanvas from "../components/MousefollowCanvas/cyber";
import GardenCanvas from "../components/MousefollowCanvas/garden";
import ThemeToggle from "../components/theme-switch/index";

import Footer from "../components/footer/index";
const Error = () => {
  const { state } = useTheme();
  return (
    <div style={state.themeStyles[state.currentTheme]}>
      <NavBar />
      <main>
        {state.currentTheme === "cyber" && <CyberCanvas />}
        {state.currentTheme === "garden" && <GardenCanvas />}

        <ThemeToggle />
        <title>Erreur de Sécurité</title>
        <div class="error-container">
          <h1>Erreur de Sécurité :</h1>
          <p>Oops ! Une erreur de sécurité s'est produite.</p>
          <p>Veuillez contacter l'administrateur du système.</p>
          <p>
            Code d'erreur : <span class="code">SECURITY-123</span>
          </p>
          <p>
            Retourner à l' <a href="/">Accueil</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Error;
