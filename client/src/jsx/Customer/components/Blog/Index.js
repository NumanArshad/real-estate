import React, { useEffect, useState } from "react";
import Header from "../Header/Index";
import BlogPage from './_part/Index'
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import request from "../../../../utils/request";
function Index() {
  const [data, setData] = useState([])
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    request.get("/blogs/approvedBlogs").then((response) => {
      console.log("response is", response)
      if (response.status === 200) {
        setData(response.data?.data)
      }
    })
  }, []);

  console.log(data)

  return (
    <React.Fragment>
      <Header />
      <BlogPage data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
