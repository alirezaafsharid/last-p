import React from "react";
import Header from "../../Component/Header/Header";
import LastCourses from "../../Component/LastCourses/LastCourses";
import PopularCourses from "../../Component/PopularCourses/PopularCourses";
import "./Index.css";
import AboutUs from "../../Component/AboutUs/AboutUs";
import PresellCourses from "../../Component/PresellCourses/PresellCourses";
import LastArticles from "../../Component/LastArticles/LastArticles";
import Footer from "../../Component/Footer/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  );
}
