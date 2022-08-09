import React, { useEffect } from "react";
import Header from "../Header/Index";
import Contact from "./Contact";
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
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
