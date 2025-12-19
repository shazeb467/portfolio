import ThemeToggle from "../assets/components/ThemeToggle";

const Home = () => {
  return (
    <h1 className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
    </h1>
  );
};

export default Home;
