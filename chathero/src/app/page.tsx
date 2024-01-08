'use client';
import Image from 'next/image'

import { Suspense, useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';
import FeatureSection from './FeatureSection';
import VideoSection from './VideoSection';


export default function Home() {
  
  const [isAtMiddlePage, setIsAtMiddlePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtMiddlePage = window.scrollY > 1000;
      setIsAtMiddlePage(isAtMiddlePage);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <main className="isolate flex flex-col gap-20">
      <Suspense>
        <HeroSection />
      </Suspense>
      <Suspense>
      <HowItWorksSection />
      </Suspense>
      <Suspense>
      <FeatureSection />
      </Suspense>
      <Suspense>
      <VideoSection />
      </Suspense>

      <section
        className="relative z-30 mx-auto mb-7 flex w-full max-w-[75rem] flex-col items-start gap-7 p-4 py-10 md:p-10"
      >
        <div
          className="md:before:content[''] md:after:content[''] group-md:hover:before:duration-500 group-md:hover:after:duration-500 group relative isolate w-full max-w-[75rem] origin-left overflow-visible rounded-3xl bg-zinc-900 p-3 px-5 py-24 text-center text-base font-bold text-zinc-50 shadow-2xl transition-all duration-500 ease-in-out"
        >
          <h2
            className="mx-auto text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Join the future of AI chatbots today
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              className="text-md hover:white rounded-md bg-gradient-to-tr from-pink-500 to-violet-500 px-3.5 py-2.5 font-semibold text-zinc-50 backdrop-blur-lg duration-700 hover:saturate-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/auth/signup"
              >Try for Free <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <div className={`absolute top-0 h-[100%] w-[100%] transition-all duration-300 ease-out z-20 ${isAtMiddlePage ? 'bg-black' : 'bg-white'} opacity-100`}></div>
      <div className="absolute top-0 -z-50 h-[100%] w-[100%] opacity-0 transition-all duration-300 ease-out"></div>

    </main>
  )
}
