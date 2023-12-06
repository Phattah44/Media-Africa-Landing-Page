import React from 'react';

const Industries = () => {
  return (
    <div className=' w-full p-10 md:p-20'>
      <div className='flex flex-col gap-4 md:gap-9 w-full md:w-[60%] p-2 md:p-10'>
        <h1 className='text-[#414141] text-lg md:text-2xl mb-10'>
          MARKETING FOR WEB3 INDUSTRIES
        </h1>
        <p className='text-[#717171] text-lg'>
          We work exclusively with crypto, NFT, GameFi, and DeFi companies, and
          focus on growth-ready companies that will gain maximum value from our
          services.
        </p>
        <a href='mailto:wasiuadegoke14@gmail.com'>
          <button className='text-[#414141] border-2 border-[#414141] md:w-[200px] text-xs font-bold p-3 hover:bg-[#ffc000] hover:text-[#040C5E] hover:border-[#040C5E] mb-5'>
            GET A PROPOSAL
          </button>
        </a>
      </div>
      <div className=' p-3 md:flex md:p-5 md:gap-x-10'>
        <div className='w-[300px] md:w-[420px] flex flex-col gap-5'>
          <p className='text-[#414141] text-lg text-center'>
            Digital Collectibles, Web3 & NFT Project Marketing
          </p>
          <p className='text-[#717171] text-sm text-center'>
            Amplify your Crypto or NFT project and dominate your niche with
            sustainable and targeted community growth.
          </p>
          <img src='./webthree.png' width='100px' className='mx-auto' />
        </div>
        <div className='w-[300px] md:w-[420px] flex flex-col gap-5'>
          <p className='text-[#414141] text-lg text-center'>
            DeFi & Crypto Token Marketing
          </p>
          <p className='text-[#717171] text-sm text-center'>
            Leverage your project into a decentralized future with innovative,
            Web3 marketing strategies and our team's expertise.
          </p>
          <img src='./tokens.png' width='120px' className='mx-auto' />
        </div>
        <div className='w-[300px] md:w-[420px] flex flex-col gap-5'>
          <p className='text-[#414141] text-lg text-center'>
            NFT Game & GameFi Marketing
          </p>
          <p className='text-[#717171] text-sm text-center'>
            Enjoy the traction and visibility you deserve with nuanced marketing
            campaigns and relevant network connections in the GameFi space.
          </p>
          <img src='./nft1.png' width='120px' className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Industries;
