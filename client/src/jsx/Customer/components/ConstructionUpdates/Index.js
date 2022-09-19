import React, { useEffect, useState } from "react";
import Header from "../Header/Index";
import Updates from "./Updates";
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import request from "../../../../utils/request";
function Index() {

  const [data, setData] = useState(null)
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    request.get("towns/townContructionUpdates").then((response) => {
      if (response.status === 200) {
        console.log({ response })
        setData(response?.data?.data)
      }
    })
  }, []);
  console.log(data)
  return (
    <React.Fragment>
      <Header />
      <Updates data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
