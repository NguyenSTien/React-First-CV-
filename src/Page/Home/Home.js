import React, { useEffect } from 'react';
import Card from './components/Card/Card.js';
import About from './components/About/About.js';
import Education from './components/education/Education.js';
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
import './Home.scss';

const Home = () => {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('section')) {
              entry.target.classList.add('move_up');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10px 0px',
      }
    );
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
  });

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
