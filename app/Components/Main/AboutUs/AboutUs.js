import React from 'react';

const AboutUs = () => {
  return (
    <div className='bg-[#F4F6FD] p-10'>
      <h1 className='text-[#040C5E] text-center font-bold p-5 mb-10 text-xl'>
        ABOUT US
      </h1>
      <div className='md:flex'>
        <div className='w-full md:w-[50%] mx-auto flex flex-col gap-7'>
          <img src='./rocket.png' className='mx-auto h-44 md:h-[380px]' />
          <p className='text-sm text-[#040C5E] text-center md:text-lg w-[250px] mx-auto'>
            Get ready to lunch into the African market with our world class
            campaigns
          </p>
        </div>
        <div className='flex flex-col gap-5 w-full md:w-[50%] m-auto'>
          <h1 className='text-sm mt-5 text-[#040C5E] md:text-lg'>
            We're an African based agency
          </h1>
          <h1 className='text-sm text-[#040C5E] md:text-lg'>
            Established in May 2019, Lunar Strategy has quickly risen to the
            forefront of the Blockchain marketing industry by establishing
            critical relationships with crypto industry influencers, role
            players, and thought leaders.
          </h1>
          <h1 className='text-sm text-[#040C5E] md:text-lg'>
            We help innovative companies get bigger, stronger, and more
            exciting.
          </h1>
          <h2 className='text-sm text-[#040C5E] md:text-lg'>
            At Media Africa, we believe in quality results and service. We’ve
            built a client-centric company that delivers industry-leading
            results. We have high ranking influencers Across Africa with
            millions of followers and audience ready to adopt all your projects.
          </h2>
          <h1 className='text-sm text-[#040C5E] md:text-lg'>
            Our industry-leading experts in traditional and Web3 marketing offer
            SEO, Google Ads, social media management, influencer marketing, paid
            ad campaigns, blog creation, content creation, community management,
            and public relations services to our ever-growing client base.
          </h1>
          <h2 className='text-sm text-[#040C5E] md:text-lg'>
            We understand your business is constantly changing. That’s why we
            offer à la carte services and month-to-month contracts.
          </h2>
        </div>
      </div>

      <h1 className='text-[#040C5E] text-center p-10 font-bold text-xl'>
        SERVICES
      </h1>
      <div className=' w-full flex flex-col items-center md:flex md:flex-row md:justify-around'>
        <div className='flex flex-col mt-5 md:mt-8 bg-[#040C5E] text-white w-[180px] md:w-[210px] md:h-[310px] p-3 rounded-xl'>
          <img className='m-auto p-3' src='./banner-advertisement.png' />
          <h4 className='my-3 text-sm'>Banner Advertisement</h4>
          <p className='text-xs mb-1'>
            We assist with the publication of your press releases and articles
            to give you maximum publicity.
          </p>
        </div>
        <div className='flex flex-col mt-5 md:mt-8 bg-[#040C5E] text-white w-[180px] md:w-[210px] md:h-[310px] p-3 rounded-xl'>
          <img className='m-auto p-3' src='./influencer.png' />
          <h4 className='my-3 text-sm'>Influencer Marketing</h4>
          <p className='text-xs mb-1'>
            We manage the largest network of tech, crypto & blockchain
            influencers in Africa. Get access to them.
          </p>
        </div>
        <div className='flex flex-col mt-5 md:mt-8 bg-[#040C5E] text-white w-[180px] md:w-[210px] md:h-[310px] p-3 rounded-xl'>
          <img className='m-auto p-3' src='./social-media.png' />
          <h4 className='my-3 text-sm'>Social Media Marketing</h4>
          <p className='text-xs mb-1'>
            With our specialized social media campaigns, your projects is
            certain to get the widest audience.
          </p>
        </div>
        <div className='flex flex-col mt-5 md:mt-8 bg-[#040C5E] text-white w-[180px] md:w-[210px] md:h-[310px] p-3 rounded-xl'>
          <img className='m-auto p-3' src='./press-release.png' />
          <h4 className='my-3 text-sm'>Press Release and Sponsored Article</h4>
          <p className='text-xs mb-1'>
            We assist with the publication of your press releases and articles
            to give you maximum publicity.
          </p>
        </div>
        <div className='flex flex-col mt-5 md:mt-8 bg-[#040C5E] text-white w-[180px] md:w-[210px] md:h-[310px] p-3 rounded-xl'>
          <img className='m-auto p-3' src='./banner-advertisement.png' />
          <h4 className='my-3 text-sm'>Offline Promotion</h4>
          <p className='text-xs mb-1'>
            We can help you reach millions of people every week through offline
            advertising in Africa.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
