import React, { useEffect } from 'react';
import Card from './components/Card/Card';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skill from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Interest from './components/Interest/Interest';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import Portfolios from './components/Portfolios/Portfolios';
import ButtonScrollTop from './components/ButtonScrollTop/ButtonScrollTop';
import PickColor from './components/PickColor/PickColor';
import './Home.scss';
import Loading from './components/Loading/Loading';

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
