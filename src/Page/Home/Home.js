import React from 'react';
import Card from './components/Card/Card.js';
import About from './components/About/About.js';
import Education from './components/Education/Education.js';
import Skill from './components/Skill/Skill.js';
import Experience from './components/Experience/Experience.js';
import Interest from './components/Interest/Interest.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import Pricing from './components/Pricing/Pricing.js';
import Blog from './components/Blog/Blog.js';
import Contact from './components/Contact/Contact.js';
import Menu from './components/Menu/Menu.js';
import Portfolios from './components/Portfolios/Portfolios.js';
import ButtonScrollTop from './components/ButtonScrollTop/ButtonScrollTop.js';
import Loading from './components/Loading/Loading.js';
import PickColor from './components/PickColor/PickColor.js';

const Home = () => {
  return (
    <>
      <Loading />
      <PickColor />
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
