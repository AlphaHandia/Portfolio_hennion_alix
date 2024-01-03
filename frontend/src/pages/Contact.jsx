import ContactForm from "../components/ContactForm";
import CyberCanvas from "../components/MousefollowCanvas/cyber";
import GardenCanvas from "../components/MousefollowCanvas/garden";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ThemeToggle from "../components/theme-switch/index";
import { useTheme } from "../components/theme-switch/ThemeContext";

const Contact = () => {
  const { state } = useTheme();
  return (
    <div>
      <NavBar />
      <main>
        <div className="positioncontactform">
        {state.currentTheme === "cyber" && <CyberCanvas />}
        {state.currentTheme === "garden" && <GardenCanvas />}

        <ThemeToggle />
        <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
