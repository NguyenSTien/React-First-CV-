import React from 'react';
import Card from './components/Card';
import Exp from './components/Exp';
import Education from './components/education';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Interest from './components/Interest';
import Testimonials from './components/Testimonals';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact/contact.js';
import Menu from './components/Menu';
import Portfolios from './components/Portfolios/index.js';

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
    </>
  );
};

export default Home;
