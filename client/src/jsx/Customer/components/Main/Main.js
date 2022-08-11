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
import { useDispatch, useSelector } from "react-redux";
import { HomeDataContextProvider } from "../../../../context/HomeDataContext";

import {
  getHomeProperties,
  getHomeSalesAgents,
} from "../../../../store/actions/CustomerActions/Home";
function Main() {
  const { home_data, sale_agents } = useSelector((state) => state._home);
  console.log("Home Data", home_data, sale_agents);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // dispatch(getHomeProperties());
    // dispatch(getHomeSalesAgents());
  }, []);
  return (
    <HomeDataContextProvider>
      <div className="home">
        <Header />
        <Carousel />
        <ExploreProperties />
        <DevelopLove />
        <ExploreTown />
        <OurAgents />
        <OurServices />
        <Blogs />
        <Footer />
      </div>
    </HomeDataContextProvider>
  );
}

export default Main;
