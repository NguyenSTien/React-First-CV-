import React, { Suspense } from 'react';
// import Card from './components/Card';
import About from './components/About';
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
import Loading from './components/Lazy';
const Card = React.lazy(() => import('./components/Card'));

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </>
  );
};

export default Home;
