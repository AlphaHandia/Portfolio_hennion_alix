import NavBar from "../components/navbar";
import { useTheme } from "../components/theme-switch/ThemeContext";
import CyberCanvas from "../components/MousefollowCanvas/cyber";
import GardenCanvas from "../components/MousefollowCanvas/garden";
import ThemeToggle from "../components/theme-switch/index";

import Footer from "../components/footer/index";
import { useLanguage } from "../components/LanguageSelector/LanguageContext";
import translations from "../initi18n/content/translation.json";

const Error = () => {
  const { state } = useTheme();
  const { language } = useLanguage();
  const errorData = translations.errorPage; // Access the errorPage object directly

  // Check if errorData and title exist before accessing them
  if (!errorData || !errorData.title) {
    return (
      <div style={state.themeStyles[state.currentTheme]}>
        <NavBar />
        <main>
          {state.currentTheme === "cyber" && <CyberCanvas />}
          {state.currentTheme === "garden" && <GardenCanvas />}

          <ThemeToggle />
          <div className="error-container">
            <h1>Error:</h1>
            <p>An unexpected error occurred.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={state.themeStyles[state.currentTheme]}>
      <NavBar />
      <main>
        {state.currentTheme === "cyber" && <CyberCanvas />}
        {state.currentTheme === "garden" && <GardenCanvas />}

        <ThemeToggle />
        <title>{errorData.title[language]}</title>
        <div className="error-container">
          <h1>{errorData.title[language]} :</h1>
          <p>{errorData.errorMessage[language]}</p>
          <p>{errorData.contactAdmin[language]}</p>
          <p>
            {errorData.errorCode[language]} <span className="code">SECURITY-123</span>
          </p>
          <p>
            {errorData.returnHome[language]} <a href="/">Accueil</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
