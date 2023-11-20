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
      <div id='Home'>
        <Home />
      </div>
      <div id='AboutUs'>
        <AboutUs />
      </div>
      <div id='Industries'>
        <Industries />
      </div>
      <div id='Team'>
        <Team />
      </div>
      <div id='Testimonials'>
        <Testimonials />
      </div>
      <div id='FAQs'>
        <FAQs />
      </div>
    </div>
  );
};

export default Main;
