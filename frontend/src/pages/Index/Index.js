import React from "react";
import Header from "../../Component/Header/Header";
import LastCourses from "../../Component/LastCourses/LastCourses";

import "./Index.css";
import AboutUs from "../../Component/AboutUs/AboutUs";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
    </>
  );
}
