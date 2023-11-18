import React from 'react';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Team from './Team/Team';
import Industries from './Industries/Industries';
import Testimonials from './Testimonials/Testimonials';
import FAQs from './FAQs/FAQs';

const Main = () => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Industries />
      <Team />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default Main;
