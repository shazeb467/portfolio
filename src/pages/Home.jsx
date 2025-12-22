import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import { useState } from "react";

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <h1 className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle  */}
      <ThemeToggle onThemeChange={setIsDarkTheme} />
      {/* Background Effects */}
      {isDarkTheme && <StarBackground />}
      {/* NavBar */}
      {/* Main Content */}
      {/* Footer  */}
    </h1>
  );
};

export default Home;
