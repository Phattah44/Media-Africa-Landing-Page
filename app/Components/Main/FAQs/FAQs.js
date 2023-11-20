import React from 'react';
import AccordionUi from './AccordionUi';

const Accordion = () => {
  const accordionData = [
    {
      title: 'Who are we?',
      content: `Media Africa is proud to be the leading crypto influencer marketing agency in Africa, managing the largest network of cryptocurrency, Web3, blockchain, in Africa across Twitter, YouTube, TikTok, Instagram, and more. If you think of any influencer in this niche, we probably work with them.`,
    },
    {
      title: 'Our Values',
      content: `We value Team work, we are learners, problem solver and we solve for the clients, we value our relationship with our customers, and we commit obsessively to our missions and metrics which makes us laser focused on driving results.`,
    },
    {
      title: 'How many countries do we currently have a coverage?',
      content: `We currently have influencers and marketers across 10 countries in Africa, and they include: Nigeria, South Africa, Ghana, Kenya, Gabon, Rwanda, Angola, Cameroon, Ethiopia, Egypt`,
    },
    {
      title: 'Where is Our headquater situated?',
      content: `Media Africa HQ is in Lagos, Nigeria`,
    },
    {
      title: 'What do you need to get started?',
      content: `All you need to do is to Get a proposal, Go through it, and there after, book a meeting with our team expert.
`,
    },
    {
      title: 'How does Allgreenivy handle payments?',
      content: `We receive payment in US Dollars and in any crypto or token`,
    },
    {
      title: 'What is your subscription model?',
      content: `We charge on a monthly bases, so you can assess your growth, measure and and inspect and decide if you are satisfied to continue. You can opt out anytime you feel you are not satisfied with the growth.`,
    },
  ];
  return (
    <div className='bg-[#F4F6FD]'>
      <div className='p-10 m-auto w-4/6 '>
        <h1 className='text-[#040C5E]  text-center text-xl'>FAQs</h1>
        <p className='text-[#040C5E] text-center text-xs'>
          You got questions? we have answers.
        </p>
        <div className='mt-7 divide-y-4'>
          {accordionData.map(({ title, content }) => (
            <AccordionUi title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
