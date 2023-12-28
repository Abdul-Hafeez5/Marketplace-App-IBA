import { useState } from "react";
import BeforeFootersec from "./components/BeforeFootersec";
import Footer from "./components/Footer";
import HeroSec from "./components/HeroSec";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./ThemeContext";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`${isDarkMode ? "bg-white" : "bg-[#2B2B2B]"}`}>
        <Navbar />
        <HeroSec />
        <BeforeFootersec />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
