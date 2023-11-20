'use client';

import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        className='w-[500px] mx-auto p-5'
      >
        <div className=''>
          {/* <img src='carousel1.png' className='w-[100px]' /> */}
          <div>
            <h3 className='text-sm text-[#414141] font-semibold'>
              Adara Williams
            </h3>
            <h4 className='text-xs text-[#414141]'>
              Growth Marketer, Remitano
            </h4>
            <p className='text-[#717171] text-xs'>
              Media Africa's efforts yielded good results, and we are satisfied
              with their service and performance. The team was great at
              communication, and they were open, transparent, and available at
              any time. They used Slack, Zoom, and email to communicate.
              Overall, they were easy to work with.
            </p>
          </div>
        </div>
        <div>
          {/* <img src='carousel2.png' width='100px' /> */}
          <div>
            <h3 className='text-sm text-[#414141] font-semibold'>
              Amosu Whenayon
            </h3>
            <h4 className='text-xs text-[#414141]'>CMO, Bitgifty</h4>
            <p className='text-[#717171] text-xs'>
              We tried several agencies before we found Media Africa. Has been a
              pleasure to work with and will soon start the next project with
              our second brand.
            </p>
          </div>
        </div>
        <div>
          {/* <img src='carousel3.png' width='100px' /> */}
          <h3 className='text-sm text-[#414141] font-semibold'>Kevin Evans</h3>
          <h4 className='text-xs text-[#414141]'>CEO, AfroVerse</h4>
          <p className='text-[#717171] text-xs'>
            AfroVerse has been a strategic partner for AfroVerse and has brought
            business consistently over the last few months. They are proactive,
            reliable and a great communication. I would definitely work with
            them in the future for marketing purposes.
          </p>
        </div>
      </Carousel>
    );
  }
}
