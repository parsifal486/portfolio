import React from 'react';
import { myWorks } from '@/assets/assets';
import { myWork } from '@/types';
import Image from 'next/image';

export const Works = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-11/12 flex-col items-start justify-center md:ml-50">
        <div className="text-font-emphasize font-inter text-3xl">My Works</div>
        {myWorks.map((work: myWork) => (
          <div
            key={work.index}
            className="frostglass group relative my-10 flex flex-row items-start justify-center p-5 transition-all duration-400"
          >
            <div>
              <div className="relative h-25 w-25 rounded-xl md:h-30 md:w-30">
                <Image src={work.image} alt={work.title} fill className="rounded-xl" />
              </div>
            </div>

            <div className="ml-10">
              <div className="text-font-primary font-inter group-hover:text-font-emphasize text-2xl transition-colors">
                {work.title}
              </div>
              <div>{work.description}</div>

              <div className="mt-5 flex flex-row flex-wrap items-center justify-start gap-3">
                {work.keywords.map((keyword: string) => (
                  <div
                    key={keyword}
                    className="border-font-emphasize text-font-primary font-inter rounded-full border-1 px-3 py-1 text-sm"
                  >
                    {keyword}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
