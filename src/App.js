import "./App.css";
import CarbonTimer from "./components/CarbonTimer";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Preloader from "./components/Preloader";

function App() {
  // -------------------preloader------------------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("body-bg");
    setScreenLoading(true);
    setTimeout(() => {
      document.body.classList.remove("body-bg");
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <div className="!overflow-hidden">
          <Hero />
          <CarbonTimer />
        </div>
      )}
    </>
  );
}

export default App;
