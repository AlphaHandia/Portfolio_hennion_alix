import React from 'react';
import NavBar from "../components/navbar";
import Banner from "../components/Banner/index";
import TimeLine from "../components/timeline/index";
import '../initi18n/initI18n';

import Footer from "../components/footer/index";

import ThemeToggle from "../components/theme-switch/index";
import '../sass/main.css';
import CyberCanvas from '../components/MousefollowCanvas/cyber';
import GardenCanvas from '../components/MousefollowCanvas/garden';
import { useTheme } from '../components/theme-switch/ThemeContext';

import MainProject from '../components/Projects/MainProjects';


const Home = () => {
  const { state } = useTheme();

  return (
    <div style={state.themeStyles[state.currentTheme]}>
      <NavBar />
      <main>
        {state.currentTheme === 'cyber' && <CyberCanvas />}
        {state.currentTheme === 'garden' && <GardenCanvas  />}
       
        <ThemeToggle />
        <Banner />
        <TimeLine />
        <MainProject/>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;
