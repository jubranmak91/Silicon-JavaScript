import AppBenefits from "../components/AppBenefits";
import Featurs from "../components/Featurs";
import HowDoesItWork from "../components/Howdoesitwork";
import Logos from "../components/Logos";
import Nav from "../components/Nav";
import Questions from "../components/Bottom";
import Reviews from "../components/Reviews";
import ShowCase from "../components/Showcase";
import Bottom from "../components/Bottom";

import '../src/App.css';








const Home = () => {
  return (
    <>
      <Nav />

      <main id="main">
        <ShowCase />
        <Logos />
        <Featurs />
        <HowDoesItWork />
        <AppBenefits />
        <Reviews />
        <Bottom />
      </main>
      
      
    </>
  );
};

export default Home;
