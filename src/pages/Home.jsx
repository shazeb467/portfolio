import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle  */}
      <ThemeToggle onThemeChange={setIsDarkTheme} />

      {/* Background Effects */}
      {isDarkTheme && <StarBackground />}

      {/* NavBar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      {/* Footer  */}
    </div>
  );
};

export default Home;
