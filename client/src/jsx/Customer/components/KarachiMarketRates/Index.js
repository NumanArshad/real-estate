import React, { useEffect } from "react";
import Header from "../Header/Index";
import KarachiMarketRates from './_part/Index'
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
function Index() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <KarachiMarketRates/>
      <Footer />
    </React.Fragment>
  );
}

export default Index;
