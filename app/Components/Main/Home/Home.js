import React from 'react';

const Home = () => {
  return (
    <div className='bg-[#040C5E] w-full h-[100%] md:h-[91vh] p-10 md:flex'>
      <div className='flex flex-col w-[300px] gap-5 m-auto md:w-80'>
        <h1 className='text-[#F4F6FD] font-bold text-xl md:text-2xl'>
          An African <br />
          Web3 Marketing Agency
        </h1>
        <p className='text-[#F4F6FD]'>
          We are a web3 marketing team helping projects with everything, from
          go-to-market strategy, to authority building, and web3 growth
          initiatives to penetrate the African market.
        </p>
        <a href='mailto:wasiuadegoke14@gmail.com'>
          <button className='w-full text-[#ffc000] my-8 text-xs p-2 font-bold border-2 hover:text-[#040C5E] border-[#ffc000] hover:bg-[#ffc000] hover:border-[#040C5E]'>
            GET A PROPOSAL
          </button>
        </a>
      </div>
      <div className='w-[80%] mx-auto md:w-[50%] md:p-16'>
        <img src='./homeImage.png' />
      </div>
    </div>
  );
};

export default Home;
