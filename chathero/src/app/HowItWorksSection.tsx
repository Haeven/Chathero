'use client';
import Image from 'next/image'
import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const HOW_IT_WORKS_IMGS = [ '1', '2', '3', '4'];
type HowItWorksAccordionTypes = typeof HOW_IT_WORKS_IMGS[number]; 
const HowItWorksSection: React.FC = (props) => {
    const [openHIWAccordion, setOpenHIWAccordion] = useState<HowItWorksAccordionTypes>('1');

    return (
        <section>
        <section
            className="relative mx-auto mb-7 flex max-w-[75rem] flex-col items-start gap-7 p-4 py-10 md:p-10"
        >
            <div className="flex flex-col items-start gap-1"><h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">HOW IT WORKS</h4><span className="text-xl font-medium">Add your data sources, train the AI, customize it to your liking, and add it to your website.</span></div>
            <div className='mt-5 w-full gap-x-14 lg:grid lg:grid-cols-6'>
            <Accordion.Root className="AccordionRoot col-span-3 flex w-full flex-col items-start justify-start" type="single" defaultValue="item-1" collapsible>
            <Accordion.Item className="AccordionItem border-b group/link w-full outline-none ring-0 focus:outline-none focus:ring-0" value="item-1">
                <Accordion.AccordionTrigger onClick={() => setOpenHIWAccordion('1')}><h3 data-orientation="vertical" data-state="open" className="flex"><button type="button" aria-controls="radix-:R2b2nlfaula:" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-:Rb2nlfaula:" className="group/accordion flex flex-1 items-center justify-between py-4 text-sm font-medium outline-none ring-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 [&amp;[data-state=open]>svg]:opacity-100" data-radix-collection-item="" aria-disabled="true"><div className="flex flex-row items-center gap-4 text-start text-xl font-semibold  text-black transition-all duration-300 ease-in-out md:text-2xl"><span className="self-end py-3 text-sm font-normal text-black">01</span><span>Import your data</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right hidden h-5 w-5 shrink-0 text-zinc-900 opacity-0 transition-all duration-300 ease-in-out group-hover/accordion:translate-x-1 group-hover/accordion:opacity-100 lg:block dark:text-zinc-900 dark:group-hover/accordion:text-zinc-900 [&amp;[data-state=open]>svg]:translate-x-2 [&amp;[data-state=open]>svg]:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></h3></Accordion.AccordionTrigger>
                <Accordion.AccordionContent>
                <span className="text-lg text-zinc-500 transition-all duration-500 delay-150 ease-out opacity-100">
                    Connect your data sources, upload files, or add a website for crawling, and Chathero will use all of that data to train your chatbot.
                </span>
                </Accordion.AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem border-b group/link w-full outline-none ring-0 focus:outline-none focus:ring-0" value="item-2">
                <Accordion.AccordionTrigger onClick={() => setOpenHIWAccordion('2')}><h3 data-orientation="vertical" data-state="open" className="flex"><button type="button" aria-controls="radix-:R2b2nlfaula:" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-:Rb2nlfaula:" className="group/accordion flex flex-1 items-center justify-between py-4 text-sm font-medium outline-none ring-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 [&amp;[data-state=open]>svg]:opacity-100" data-radix-collection-item="" aria-disabled="true"><div className="flex flex-row items-center gap-4 text-start text-xl font-semibold  text-black transition-all duration-300 ease-in-out md:text-2xl"><span className="self-end py-3 text-sm font-normal text-black">02</span><span>Customize behavior & appearance</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right hidden h-5 w-5 shrink-0 text-zinc-900 opacity-0 transition-all duration-300 ease-in-out group-hover/accordion:translate-x-1 group-hover/accordion:opacity-100 lg:block dark:text-zinc-900 dark:group-hover/accordion:text-zinc-900 [&amp;[data-state=open]>svg]:translate-x-2 [&amp;[data-state=open]>svg]:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></h3></Accordion.AccordionTrigger>
                <Accordion.AccordionContent>
                <span className="text-lg text-zinc-500 transition-all duration-500 delay-150 ease-out opacity-100">
                Make your chatbot look like it&apos;s part of your website with custom colors and logos and make it match your brand&apos;s personality with custom instructions.
                </span>
                </Accordion.AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem border-b group/link w-full outline-none ring-0 focus:outline-none focus:ring-0" value="item-3">
                <Accordion.AccordionTrigger onClick={() => setOpenHIWAccordion('3')}><h3 data-orientation="vertical" data-state="open" className="flex"><button type="button" aria-controls="radix-:R2b2nlfaula:" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-:Rb2nlfaula:" className="group/accordion flex flex-1 items-center justify-between py-4 text-sm font-medium outline-none ring-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 [&amp;[data-state=open]>svg]:opacity-100" data-radix-collection-item="" aria-disabled="true"><div className="flex flex-row items-center gap-4 text-start text-xl font-semibold  text-black transition-all duration-300 ease-in-out md:text-2xl"><span className="self-end py-3 text-sm font-normal text-black">03</span><span>Embed on your website</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right hidden h-5 w-5 shrink-0 text-zinc-900 opacity-0 transition-all duration-300 ease-in-out group-hover/accordion:translate-x-1 group-hover/accordion:opacity-100 lg:block dark:text-zinc-900 dark:group-hover/accordion:text-zinc-900 [&amp;[data-state=open]>svg]:translate-x-2 [&amp;[data-state=open]>svg]:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></h3></Accordion.AccordionTrigger>
                <Accordion.AccordionContent>
                <span className="text-lg text-zinc-500 transition-all duration-500 delay-150 ease-out opacity-100">
                    Add a chat widget to any website with a simple embed code.
                </span>
                </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem border-b group/link w-full outline-none ring-0 focus:outline-none focus:ring-0" value="item-4">
                <Accordion.AccordionTrigger onClick={() => setOpenHIWAccordion('4')}><h3 data-orientation="vertical" data-state="open" className="flex"><button type="button" aria-controls="radix-:R2b2nlfaula:" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-:Rb2nlfaula:" className="group/accordion flex flex-1 items-center justify-between py-4 text-sm font-medium outline-none ring-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 [&amp;[data-state=open]>svg]:opacity-100" data-radix-collection-item="" aria-disabled="true"><div className="flex flex-row items-center gap-4 text-start text-xl font-semibold  text-black transition-all duration-300 ease-in-out md:text-2xl"><span className="self-end py-3 text-sm font-normal text-black">04</span><span>Integrate with your tools</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right hidden h-5 w-5 shrink-0 text-zinc-900 opacity-0 transition-all duration-300 ease-in-out group-hover/accordion:translate-x-1 group-hover/accordion:opacity-100 lg:block dark:text-zinc-900 dark:group-hover/accordion:text-zinc-900 [&amp;[data-state=open]>svg]:translate-x-2 [&amp;[data-state=open]>svg]:opacity-100"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></h3></Accordion.AccordionTrigger>
                <Accordion.AccordionContent>
                <span className="text-lg text-zinc-500 transition-all duration-500 delay-150 ease-out opacity-100">
                Connect your chatbot to your favorite tools like Slack, WhatsApp Zapier, and more.
                </span>
                </Accordion.AccordionContent>
            </Accordion.Item>
            </Accordion.Root>
            <div className="relative  col-span-3 hidden h-[45rem] w-full  justify-center lg:flex">
            <div className="absolute inset-0 h-full w-screen rounded-md bg-black"></div>
            <div className="absolute h-full w-full rounded-md lg:ml-6 xl:ml-16" style={{background:`radial-gradient(circle at center, rgba(69, 30, 137, 0.5) 0%, rgba(0, 0, 0, 1) 60%)`}}>
                <div className="relative inset-0 h-full w-full" style={{opacity: '1'}}><Image alt="Customize behavior &amp; appearance" loading="lazy" width="3076" height="3684" decoding="async" data-nimg="1" className="relative inset-0 h-full w-full rounded-md object-contain p-3 " src={`/${openHIWAccordion}.png`} style={{color: 'transparent'}} />
                </div>
            </div>
            </div>
            </div>
        </section>
        </section>
    );
};

export default HowItWorksSection;
