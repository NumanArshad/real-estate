import React, { useEffect } from "react";
import Header from "../Header/Index";
import Carousel from "./_part/Carousel";
import ExploreProperties from "./_part/ExploreProperties";
import ExploreTown from "./_part/ExploreTown";
import DevelopLove from "./_part/DevelopLove";
import OurAgents from "./_part/OurAgents";
import OurServices from "./_part/OurServices";
import Blogs from "./_part/Blogs";
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import { HomeDataContextProvider } from "../../../../context/HomeDataContext";
function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <HomeDataContextProvider>
      <Header />
      <Carousel />
      <ExploreProperties />
      <DevelopLove />
      <ExploreTown />
      <OurAgents />
      <OurServices />
      <Blogs />
      <Footer />
    </HomeDataContextProvider>
  );
}

export default Main;
