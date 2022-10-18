import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "./components/Banner";
import Foot from "./components/Foot";
import Friend from "./components/Friend";
import Head from "./components/Head";
import Instagram from "./components/Instagram";
import LastOffers from "./components/LatestOffers";
import Partner from "./components/Partner";
import ShoppingCart from "./components/ShoppingCart";
import Surprise from "./components/Surprise";
import Warning from "./components/warning";
import WhoMakes from "./components/WhoMakes";
import Partner from "./components/Partner";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <ShoppingCart />
      <Warning />
      <Head />
      <Banner />
      <LastOffers />
      <WhyChoose />
      <WhoMakes />
      <Partner />
      <Surprise />
      <Instagram />
      <Friend />
      <Foot />
      <FontAwesomeIcon />
    </>
  );
}

export default App;
