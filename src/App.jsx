import './App.css'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from './components/Home'
import { BrowserRouter } from "react-router-dom"
function App() {

   useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration
      once: true,        // animate only once
      easing: "ease-in-out",
      offset: 100,       // trigger distance
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </>
  )
}

export default App
