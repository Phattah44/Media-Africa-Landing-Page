import React from 'react';

const Team = () => {
  return (
    <div className='bg-[#F4F6FD] p-5 md:p-10'>
      <h1 className='text-[#040C5E] text-center font-bold p-5'>OUR TEAM</h1>
      <p className='text-[#040C5E] text-center mb-5'>
        Each member that joins our team is passionate about the Web3 space,
        whether they have invested in crypto, minted their own NFTs, or know
        that decentralization is the future. We give you an external team of
        specialists equipped that know how to promote your crypto project and
        build your ideal community to get the results you desire.
      </p>
      <div className='flex flex-col items-center md:flex md:flex-row'>
        <div className='flex flex-col w-[300px]'>
          <img src='./dol.jpeg' className='rounded-full p-2' />
          <p className='text-[#040C5E] text-center text-sm font-bold'>
            Ade Muyiwa
          </p>
          <p className='text-[#040C5E] text-center mb-5 text-xs'>CEO</p>
        </div>
        <div className='flex flex-col w-[300px]'>
          <img src='./weez.jpeg' className='rounded-full p-2' />
          <p className='text-[#040C5E] text-center text-sm font-bold'>
            Adegoke Wasiu
          </p>
          <p className='text-[#040C5E] text-center mb-5 text-xs'>CTO</p>
        </div>
        <div className='flex flex-col w-[300px]'>
          <img src='./yinks.jpeg' className='rounded-full p-2' />
          <p className='text-[#040C5E] text-center text-sm font-bold'>
            Adejuwon Yinka
          </p>
          <p className='text-[#040C5E] text-center mb-5 text-xs'>CMO</p>
        </div>
        <div className='flex flex-col w-[300px]'>
          <img src='./pha.jpeg' className='rounded-full p-2' />
          <p className='text-[#040C5E] text-center text-sm font-bold'>
            AbdulFattah Sheu
          </p>
          <p className='text-[#040C5E] text-center mb-5 text-xs'>
            Head of Growth
          </p>
        </div>
        <div className='flex flex-col w-[300px]'>
          <img src='./kimani.jpeg' className='rounded-full p-2' />
          <p className='text-[#040C5E] text-center text-sm font-bold'>
            AbdulMalik
          </p>
          <p className='text-[#040C5E] text-center mb-5 text-xs'>
            Community Manager
          </p>
        </div>
      </div>
      <div className='flex justify-around mt-10 items-center'>
        <p className='text-[#040C5E] align-middle text-sm font-bold'>
          BECOME ONE OF OUR SUCCESS STORIES
        </p>
        <button className='text-[#414141] border-2 border-[#414141] w-[200px] text-xs font-bold p-3 hover:bg-[#ffc000] hover:text-[#040C5E] hover:border-[#040C5E]'>
          GET A PROPOSAL
        </button>
      </div>
    </div>
  );
};

export default Team;
