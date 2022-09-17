import React, { useEffect } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetail from "./_part/BlogDetail";
import { useState } from "react";
import request from "../../../../utils/request";
import { useParams } from "react-router-dom";
function Detail() {
  const [data, setData] = useState([])

  const { id } = useParams()
  console.log({ id })
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    if (id) {
      request.get(`/blogs/blogDetail/${id}`).then((response) => {
        console.log("response is", response)
        if (response.status === 200) {
          setData(response.data?.data)
        }
      })
    }
  }, [id]);


  const [blogList, setBlogList] = useState([])
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    request.get("/blogs/approvedBlogs").then((response) => {
      console.log("response is", response)
      if (response.status === 200) {
        setBlogList(response.data?.data)
      }
    })
  }, []);

  return (
    <React.Fragment>
      <Header />
      <BlogDetail data={data} blogList={blogList} />
      <Footer />
    </React.Fragment>
  );
}

export default Detail;
