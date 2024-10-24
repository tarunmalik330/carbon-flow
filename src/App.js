import "./App.css";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="!overflow-x-hidden">
      {/* <Preloader /> */}
      <Hero />
    </div>
  );
}

export default App;
