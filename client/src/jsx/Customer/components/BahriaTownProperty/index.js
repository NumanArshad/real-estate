import React, { useEffect } from "react";
import Header from "../Header/Index";
import BahriaProperty from "./_part/Index";
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
      <BahriaProperty />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
