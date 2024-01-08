"use client";
import React from "react";

interface UseCaseSectionProps {
  title: string;
  description: string;
}

const UseCaseSection: React.FC<UseCaseSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className="relative z-30 mx-auto mb-7 flex max-w-[75rem] flex-col items-start gap-7 p-4 py-10 md:p-10">
      <div className="flex flex-col items-start gap-3">
        <h4 className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent">
          USECASES
        </h4>
        <p className="text-xl font-medium text-white">
          Here are some of the ways you can use Herochat.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div
          className="relative mb-0 flex flex-col items-start justify-start gap-5 rounded-2xl border border-stone-800 p-7 pb-0 text-white"
          style={{
            background: `radial-gradient(
          89.72% 84.75% at 49.92% 48.04%,
          rgba(69, 30, 137, 0.25) 0%,
          rgba(0, 0, 0, 0) 100%
        );`,
          }}
        >
          <h5 className="text-2xl font-medium">Customer Support</h5>
          <p className="text-lg font-light text-stone-200">
            Experience swift query resolutions, available 24/7, with
            personalized assistance tailored to your customers&apos; needs.
          </p>
          {/* <Image
        alt="Customer Support"
        loading="lazy"
        width="1298"
        height="918"
        decoding="async"
        data-nimg="1"
        className="mt-4 h-full object-contain object-bottom"
        style={{color: 'transparent'}}
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.070dbea9.png&amp;w=3840&amp;q=75"
      /> */}
        </div>
        <div
          className="relative mb-0 flex flex-col items-start justify-start gap-5 rounded-2xl border border-stone-800 p-7 pb-0 text-white"
          style={{
            background: `radial-gradient(
          89.72% 84.75% at 49.92% 48.04%,
          rgba(69, 30, 137, 0.25) 0%,
          rgba(0, 0, 0, 0) 100%
        )`,
          }}
        >
          <h5 className="text-2xl font-medium">Lead Generation</h5>
          <p className="text-lg font-light text-stone-200">
            Set your chatbot to collect leads and qualify them, all while
            providing a personalized experience to your customers.
          </p>
          {/* <Image
        alt="Lead Generation"
        loading="lazy"
        width="1298"
        height="918"
        decoding="async"
        data-nimg="1"
        className="mt-4 h-full object-contain object-bottom"
        style={{color: 'transparent'}}
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.df3cd37f.png&amp;w=3840&amp;q=75,"
      /> */}
        </div>
        <div
          className="relative mb-0 flex flex-col items-start justify-start gap-5 rounded-2xl border border-stone-800 p-7 pb-0 text-white"
          style={{
            background: `radial-gradient(
          89.72% 84.75% at 49.92% 48.04%,
          rgba(69, 30, 137, 0.25) 0%,
          rgba(0, 0, 0, 0) 100%
        );`,
          }}
        >
          <h5 className="text-2xl font-medium">
            AI Personas to Engage Your Users
          </h5>
          <p className="text-lg font-light text-stone-200">
            Create AI personas about any topic and have them engage with your
            users and provide them with a personalized experience.
          </p>
          {/* <Image
        alt="AI Personas to Engage Your Users"
        loading="lazy"
        width="1298"
        height="918"
        decoding="async"
        data-nimg="1"
        className="mt-4 h-full object-contain object-bottom"
        style={{color: 'transparent'}}
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.136c3a8a.png&amp;w=3840&amp;q=75"
      /> */}
        </div>
        <div
          className="relative mb-0 flex flex-col items-start justify-start gap-5 rounded-2xl border border-stone-800 p-7 pb-0 text-white"
          style={{
            background: `radial-gradient(
          89.72% 84.75% at 49.92% 48.04%,
          rgba(69, 30, 137, 0.25) 0%,
          rgba(0, 0, 0, 0) 100%
        )`,
          }}
        >
          <h5 className="text-2xl font-medium">Multi-platform Chatbots</h5>
          <p className="text-lg font-light text-stone-200">
            Add AI chatbots to your website, mobile app, or any other platform
            with a simple embed code or with our API.
          </p>
          {/* <Image
        alt="Multi-platform Chatbots"
        loading="lazy"
        width="1298"
        height="918"
        decoding="async"
        data-nimg="1"
        className="mt-4 h-full object-contain object-bottom"
        style={{color: 'transparent'}}
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.64dde7ad.png&amp;w=3840&amp;q=75"
      /> */}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
