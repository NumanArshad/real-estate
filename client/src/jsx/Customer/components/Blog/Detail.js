import React, { useEffect } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetail from "./_part/BlogDetail";
function Detail() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <BlogDetail />
      <Footer />
    </React.Fragment>
  );
}

export default Detail;
