import React from 'react';
import { icon, img } from '@/assets/assets';
import Image from 'next/image';

export const HomeSection = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center">
      <div className="margin-5 h-40 w-40 overflow-hidden rounded-full">
        <Image src={img.avatar} alt="avatar" />
      </div>
      <div className="font-ovo mt-7 mb-3 text-2xl text-gray-800">
        Hi!👋 I&apos;m Ryuteakwoo
      </div>
      <div className="font-ovo text-4xl text-black">
        a freelance full-stack developer.
      </div>
      <div className="font-ovo mt-3 text-lg text-gray-800">
        I was passionate about react, nextjs, and typescript.
      </div>

      <div className="mt-4 flex flex-row gap-4">
        <button className="bg-purplespace-200 flex cursor-pointer flex-row items-center gap-2 rounded-full px-4 py-2 text-white">
          <span className="flex flex-row items-center gap-2">resume</span>
          <icon.download size={20} />
        </button>
        <button className="border-purplespace-200 text-purplespace-200 flex cursor-pointer flex-row items-center gap-2 rounded-full border-2 bg-white px-4 py-2">
          <span className="flex flex-row items-center gap-2">
            talk is cheap
          </span>
          <icon.arrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
