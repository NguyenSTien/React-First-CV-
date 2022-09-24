import React from "react";
import Card from "./components/Card";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Education from "./components/education";
import Interest from "./components/Interest";
import Testimonials from "./components/Testimonals";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact/contact.js";
import Menu from "./components/Menu";
import Portfolios from "./components/Portfolios/index.js";
import ButtonScrollTop from "./components/ButtonScrollTop";
import Loading from "./components/Loading/index";

const Home = () => {
  return (
    <>
      <Loading />
      <Card />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Portfolios />
      <Interest />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Menu />
      <ButtonScrollTop />
    </>
  );
};

export default Home;
