import React from 'react';
import Card from './components/Card/card.js';
import About from './components/About/about.js';
import Education from './components/Education/education.js';
import Skill from './components/Skill/skill.js';
import Experience from './components/Experience/experience.js';
import Interest from './components/Interest/interest.js';
import Testimonials from './components/Testimonials/testimonials.js';
import Pricing from './components/Pricing/pricing.js';
import Blog from './components/Blog/blog.js';
import Contact from './components/Contact/contact.js';
import Menu from './components/Menu/menu.js';
import Portfolios from './components/Portfolios/portfolios.js';
import ButtonScrollTop from './components/ButtonScrollTop/buttonScrollTop.js';
import Loading from './components/Loading/loading.js';
import PickColor from './components/PickColor/pickColor.js';

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
