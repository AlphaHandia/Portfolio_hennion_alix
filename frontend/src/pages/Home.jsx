import React from 'react';
import NavBar from "../components/navbar";
import Banner from "../components/Banner/index";
import TimeLine from "../components/timeline/index";
import '../initi18n/initI18n';
import Form from "../components/form/index";
import Footer from "../components/footer/index";
import LanguageSelector from "../components/LanguageSelector/index";
import ThemeToggle from "../components/theme-switch/index";
import '../sass/main.css';
import CyberCanvas from '../components/MousefollowCanvas/cyber';

const Home = () => {
  return (
   
      <div>
        <NavBar />
        <main>
        
          <CyberCanvas />
          <LanguageSelector/>
          <ThemeToggle />
          <Banner />
          <TimeLine />
          <Form />
          
          <Footer />
         
        </main>
      </div>
 
  );
};

export default Home;
