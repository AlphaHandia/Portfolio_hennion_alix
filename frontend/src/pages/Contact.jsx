import ContactForm from "../components/ContactForm";
import CyberCanvas from "../components/MousefollowCanvas/cyber";
import GardenCanvas from "../components/MousefollowCanvas/garden";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { useTheme } from '../components/theme-switch/ThemeContext';

const Contact =() =>{
    const { state } = useTheme();
return (
<div  style={state.themeStyles[state.currentTheme]}>
    <NavBar/>
    <main>
    {state.currentTheme === 'cyber' && <CyberCanvas />}
    {state.currentTheme === 'garden' && <GardenCanvas  />}
    <ContactForm/>
    </main>
    <Footer/>
</div>
)}
export default Contact;