import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Error from "./pages/Error"
import { LanguageProvider } from './components/LanguageSelector/LanguageContext';
import { ThemeProvider } from './components/theme-switch/ThemeContext';
import Contact from './pages/Contact';


function App() {
  return (
   <BrowserRouter>
   <LanguageProvider>
   <ThemeProvider>
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/*" element={<Error/>} />
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </ThemeProvider>
   </LanguageProvider>
   </BrowserRouter>
  );
}

export default App;
