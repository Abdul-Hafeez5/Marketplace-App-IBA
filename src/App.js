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
    <div className={`${isDarkMode ? "bg-white" : "bg-[#2B2B2B]"}`}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Navbar />
        <HeroSec />
        <BeforeFootersec />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
