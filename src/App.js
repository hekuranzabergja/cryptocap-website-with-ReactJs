import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { Features } from "./components/Features/Features";
import { FeaturesCard } from "./components/Features/FeaturesCard";
import { ExploreMore } from "./components/ExploreMore/ExploreMore";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Card/>
      <Features/>
      <FeaturesCard/>
       <ExploreMore/>

    </div>
  );
};

export default App;
