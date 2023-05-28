import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Companies from "./Components/Companies/Companies";
import Residences from "./Components/Residences/Residences";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residences/>
      <Value/>
      <Contact/>
    </div>
  );
}

export default App;
