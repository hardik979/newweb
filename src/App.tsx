import HeroSection from "./components/HeroSection";

import About from "./components/ui/About";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <About />
      <Footer />
    </div>
  );
};

export default App;
