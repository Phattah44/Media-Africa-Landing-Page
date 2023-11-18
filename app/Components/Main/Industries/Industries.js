import React from 'react';

const Industries = () => {
  return (
    <div>
      <div className='flex flex-col gap-9 w-[60%] p-10'>
        <h1 className='text-[#414141]'>MARKETING FOR WEB3 INDUSTRIES</h1>
        <p className='text-[#717171]'>
          We work exclusively with crypto, NFT, GameFi, and DeFi companies, and
          focus on growth-ready companies that will gain maximum value from our
          services.
        </p>
        <button className='text-[#414141] border-2 border-[#414141] w-[200px] text-xs font-bold p-3 hover:bg-[#ffc000] hover:text-[#040C5E] hover:border-[#040C5E]'>
          GET A PROPOSAL
        </button>
      </div>
      <div className='flex p-5 gap-x-10'>
        <div className='w-[420px] flex flex-col gap-5'>
          <p className='text-[#414141]'>
            Digital Collectibles, Web3 & NFT Project Marketing
          </p>
          <p className='text-[#717171] text-sm'>
            Amplify your Crypto or NFT project and dominate your niche with
            sustainable and targeted community growth.
          </p>
          <img src='./webthree.png' width='100px' className='mx-auto' />
        </div>
        <div className='w-[420px] flex flex-col gap-5'>
          <p className='text-[#414141]'>DeFi & Crypto Token Marketing</p>
          <p className='text-[#717171] text-sm'>
            Leverage your project into a decentralized future with innovative,
            Web3 marketing strategies and our team's expertise.
          </p>
          <img src='./tokens.png' width='120px' className='mx-auto' />
        </div>
        <div className='w-[420px] flex flex-col gap-5'>
          <p className='text-[#414141]'>NFT Game & GameFi Marketing</p>
          <p className='text-[#717171] text-sm'>
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
