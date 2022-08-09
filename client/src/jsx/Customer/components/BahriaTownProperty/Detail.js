import React, { useEffect } from "react";
import Header from "../Header/Index";
import DetailPage from "./_part/DetailPage";
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
      <DetailPage />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
