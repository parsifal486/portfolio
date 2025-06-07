import { img } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { personData } from '@/assets/assets';
import { toolData } from '@/assets/assets';

export const AboutMe = () => {
  return (
    <div id="about" className="w-full scroll-mt-20 gap-10 px-[12%]">
      <div className="font-ovo text-center text-4xl text-black">About me</div>

      <div className="flex w-full flex-col items-center justify-center lg:flex-row">
        <div className="h-110 w-64 max-w-none rounded-3xl sm:w-80">
          <Image
            className="h-full rounded-3xl object-cover"
            src={img.avatar}
            alt="aboutMe"
          />
        </div>

        <div className="mx-4 flex-1">
          <p className="font-ovo mb-10 max-w-2xl text-center text-lg font-light text-gray-800">
            I&apos;m a full-stack developer with a passion for building web applications.
            I&apos;m currently working as a freelancer and I&apos;m looking for new
            opportunities.
          </p>

          <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {personData.map((item) => (
              <li
                className="border-purplespace-200 hover:bg-bluespace-300 hover:shadow-dark cursor-pointer rounded-xl border-[1px] p-6 duration-500 hover:-translate-y-1"
                key={item.itemName}
              >
                <item.icon className="mt-3 text-2xl text-gray-800" />
                <div className="font-outfit my-2 text-lg font-semibold text-gray-800">
                  {item.itemName}
                </div>
                <div className="font-outfit my-2 text-sm">{item.itemValue}</div>
              </li>
            ))}
          </ul>

          <h4 className="font-ovo my-6 text-2xl text-gray-800">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolData.map((item) => (
              <li
                key={item.itemName}
                className="flex aspect-square w-12 items-center justify-center rounded-lg border sm:w-14"
              >
                <item.icon className="text-purplespace-200 text-2xl sm:text-3xl" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
