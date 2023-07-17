import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialSidebar from "./components/SocialSidebar";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <SocialSidebar />
    </div>
  );
};

export default App;
