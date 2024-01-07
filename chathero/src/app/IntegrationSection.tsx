'use client';
import React from 'react';

interface IntegrationSectionProps {
    // Add your props here
}

const IntegrationSection: React.FC<IntegrationSectionProps> = (props) => {
    // Add your component logic here

    return (
        
<section>
  <section
    className="relative mx-auto mb-7 flex max-w-[75rem] flex-col items-start gap-7 p-4 py-10 md:p-10 z-30"
  >
    <div className="flex flex-col items-start gap-1">
      <h4
        className="bg-pink-500 bg-clip-text text-sm font-semibold text-transparent"
      >
        INTEGRATIONS
      </h4>
      <p className="text-xl font-medium text-white">
        Ingest data from multiple sources, train your chatbot, and let your
        users interact with it wherever they are.
      </p>
    </div>
    {/* <Image
      alt="Integrations : Google Drive, Notion, Slack, Whatsapp, Messanger, Word,..."
      loading="lazy"
      width="1973"
      height="938"
      decoding="async"
      data-nimg="1"
      className="mt-14"
      style={{color: 'transparent'}}
      src="
      /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintegrations.c11e1fba.png&amp;w=3840&amp;q=75,
        /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintegrations.c11e1fba.png&amp;w=2048&amp;q=75 1x,
        /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintegrations.c11e1fba.png&amp;w=3840&amp;q=75 2x
      "
    /> */}
  </section>
</section>
    );
};

export default IntegrationSection;
