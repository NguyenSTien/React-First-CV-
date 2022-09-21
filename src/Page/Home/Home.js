import React from 'react';
import Card from './components/Card';
import Exp from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Interest from './components/Interest';
import Testimonials from './components/Testimonals';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact/contact.js';
import Menu from './components/Menu';
import Portfolios from './components/Portfolios/index.js';
import ButtonScrollTop from './components/ButtonScrollTop';
const Home = () => {
  return (
    <>
      <Card />
      <Exp />
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
