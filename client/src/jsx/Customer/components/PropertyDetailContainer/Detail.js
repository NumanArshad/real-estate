import React, { useEffect, useState } from "react";
import Header from "../Header/Index";
import DetailPage from "./_part/DetailPage";
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import request from "../../../../utils/request";
import { useParams } from "react-router-dom";

///property detail page
function Index() {
  const params = useParams()
  const [data, setData] = useState({ propertyDetail: undefined, saleAgent: undefined })
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    if (params?.id) {
      request.get(`properties/propertyAndSaleAgentDetail/${params?.id}`).then((response) => {
        console.log("property response is", response, response.status)
        if (response.status === 200) {
          setData(response?.data?.data)
        }

      })
    }
  }, [params?.id]);
  return (
    <React.Fragment>
      <Header />
      <DetailPage {...data} />
      <Footer />
    </React.Fragment>
  );
}

export default Index;
