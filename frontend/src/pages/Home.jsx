import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Banner from "../components/Banner/index";
import TimeLine from "../components/timeline/index";
import "../initi18n/initI18n";

import Footer from "../components/footer/index";

import ThemeToggle from "../components/theme-switch/index";
import "../sass/main.css";
import CyberCanvas from "../components/MousefollowCanvas/cyber";
import GardenCanvas from "../components/MousefollowCanvas/garden";
import { useTheme } from "../components/theme-switch/ThemeContext";

import MainProject from "../components/Projects/MainProjects";
import PageLoader from "../components/loading/index"; // Assurez-vous de fournir le chemin correct

const Home = () => {
  const { state } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez un chargement de page ici, par exemple avec un délai de 2000 ms
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <PageLoader />}
      <div style={state.themeStyles[state.currentTheme]}>
        <NavBar />
        <main>
          {state.currentTheme === "cyber" && <CyberCanvas />}
          {state.currentTheme === "garden" && <GardenCanvas />}

          <ThemeToggle />
          <Banner />
          <TimeLine />
          <MainProject />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
