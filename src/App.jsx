import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menus from "./components/Menus";
import Retail from "./components/Retail";
import ImageSplash from "./components/ImageSplash";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { FirstSplash, SecondSplash } from "./data/index.js";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menus">
          <Menus />
        </div>
        <div>
          <ImageSplash library={FirstSplash} />
        </div>
        <div id="retail">
          <Retail />
        </div>
        <div>
          <ImageSplash library={SecondSplash} />
        </div>
        <div id="events">
          <Events />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
