'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { icon } from '@/lib/assets';

export default function ReadiamondPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

  return (
    <div className="bg-purplespace-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-purplespace-100/80 border-purplespace-200/20 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/imgs/readiamond.svg"
                alt="readiamond logo"
                width={32}
                height={32}
              />
              <span className="text-font-emphasize text-xl font-bold">readiamond</span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/parsifal486/readiamond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-font-primary hover:text-font-emphasize flex items-center space-x-2 transition-colors"
              >
                <icon.github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <h1 className="text-font-emphasize text-6xl leading-none font-bold tracking-tight md:text-8xl">
                readiamond
              </h1>
              <p className="text-font-primary text-2xl leading-relaxed md:text-3xl">
                An intelligent reading companion for language learning
              </p>
              <p className="text-font-secondary max-w-lg text-lg leading-relaxed">
                Transform your reading into an immersive language learning journey
                with AI-powered vocabulary building and spaced repetition.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://github.com/parsifal486/readiamond/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purplespace-200 hover:bg-purplespace-300 flex transform items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 sm:justify-start"
              >
                <icon.download size={24} />
                readiamond for Mac
              </a>
              <button
                disabled
                className="relative flex cursor-not-allowed items-center justify-center gap-3 rounded-full bg-gray-600 px-8 py-4 text-lg font-semibold text-gray-400 sm:justify-start"
              >
                <icon.download size={24} />
                readiamond for Windows
                <span className="text-font-secondary absolute -bottom-8 left-1/2 -translate-x-1/2 transform text-sm whitespace-nowrap sm:left-8 sm:translate-x-0">
                  * coming soon
                </span>
              </button>
            </div>
          </div>

          {/* Right Image with Hover Effect */}
          <div className="relative flex items-center justify-center lg:h-[600px]">
            <div className="group relative w-full max-w-2xl">
              {/* Image Container with Crop Effect */}
              <div className="from-purplespace-200/20 to-purplespace-300/20 relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br p-2 shadow-2xl lg:h-[500px]">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src="/readiamond-img/main-content.png"
                    alt="readiamond Main Interface"
                    width={1200}
                    height={800}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      transformOrigin: 'center center',
                    }}
                    priority
                  />
                  {/* Overlay for better text visibility */}
                  <div className="from-purplespace-100/20 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-30"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="bg-purplespace-300 absolute -top-4 -right-4 h-8 w-8 animate-pulse rounded-full"></div>
              <div className="bg-purplespace-200/50 absolute -bottom-6 -left-6 h-12 w-12 animate-bounce rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Beta Notice - Centered at bottom of Hero Section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <div className="text-font-secondary/80 flex items-center justify-center gap-2 text-sm">
            <div className="bg-purplespace-300 flex h-2 w-2 animate-pulse rounded-full"></div>
            <p className="text-center leading-relaxed">
              We are still in early development and testing phase. Thank you for
              your tolerance of bugs in the beta version.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Philosophy Section */}
      <section
        ref={(el) => addToRefs(el, 0)}
        className="flex min-h-screen translate-y-8 items-center px-4 opacity-0 transition-all duration-1000 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 space-y-8 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-font-emphasize text-5xl leading-tight font-bold md:text-6xl">
                  Learning in Context
                </h2>
                <p className="text-font-primary text-xl leading-relaxed">
                  Experience natural language acquisition through immersive
                  reading. readiamond highlights familiar words and helps you
                  discover new vocabulary in context.
                </p>
                <p className="text-font-secondary text-lg leading-relaxed">
                  No more isolated word lists. Learn vocabulary the way your
                  brain naturally processes language - through meaningful context
                  and real-world usage.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="group relative">
                <div className="relative transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/readiamond-img/main-content.png"
                    alt="Learning in Context"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                  />
                  <div className="from-purplespace-100/30 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
                {/* Decorative elements */}
                <div className="bg-purplespace-200/20 absolute -top-8 -right-8 -z-10 h-32 w-32 rounded-full blur-xl"></div>
                <div className="bg-purplespace-300/20 absolute -bottom-8 -left-8 -z-10 h-24 w-24 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FSRS Flashcard Section */}
      <section
        ref={(el) => addToRefs(el, 1)}
        className="bg-purplespace-200/5 flex min-h-screen translate-y-8 items-center px-4 opacity-0 transition-all duration-1000 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="group relative">
              <div className="relative transform overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                <Image
                  src="/readiamond-img/flash-cardReview.png"
                  alt="FSRS Flashcard System"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
                <div className="from-purplespace-300/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
              {/* Floating card elements */}
              <div className="bg-purplespace-200/30 absolute -top-4 -left-4 h-10 w-16 -rotate-12 transform rounded-lg transition-transform duration-500 group-hover:rotate-0"></div>
              <div className="bg-purplespace-300/30 absolute -right-4 -bottom-4 h-8 w-12 rotate-12 transform rounded-lg transition-transform duration-500 group-hover:rotate-6"></div>
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-font-emphasize text-5xl leading-tight font-bold md:text-6xl">
                  Smart Memory
                </h2>
                <p className="text-font-primary text-xl leading-relaxed">
                  Powered by the scientifically-proven FSRS algorithm, readiamond
                  optimizes your review schedule for maximum retention.
                </p>
                <p className="text-font-secondary text-lg leading-relaxed">
                  Forget cramming. Our spaced repetition system ensures you
                  review words exactly when you&apos;re about to forget them,
                  building long-term memory efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section
        ref={(el) => addToRefs(el, 2)}
        className="flex min-h-screen translate-y-8 items-center px-4 opacity-0 transition-all duration-1000 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 space-y-8 lg:order-1">
              <div className="space-y-6">
                <h2 className="text-font-emphasize text-5xl leading-tight font-bold md:text-6xl">
                  Beyond Translation
                </h2>
                <p className="text-font-primary text-xl leading-relaxed">
                  AI understands context, culture, and nuance. Get explanations
                  for idioms, slang, and cultural references that mechanical
                  translation misses.
                </p>
                <p className="text-font-secondary text-lg leading-relaxed">
                  From Shakespeare&apos;s metaphors to modern internet slang, AI
                  helps you grasp the true meaning behind the words.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="group relative">
                <div className="relative transform overflow-hidden rounded-2xl shadow-xl transition-all duration-700 group-hover:scale-105">
                  <Image
                    src="/readiamond-img/ai-feature.png"
                    alt="AI-Enhanced Learning"
                    width={600}
                    height={400}
                    className="h-auto w-full"
                  />
                  <div className="from-purplespace-300/30 to-purplespace-200/20 absolute inset-0 bg-gradient-to-t via-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                </div>
                {/* AI-themed decorative elements */}
                <div className="bg-purplespace-300 absolute -top-6 -right-6 h-6 w-6 animate-ping rounded-full"></div>
                <div className="bg-purplespace-300 absolute -top-6 -right-6 h-6 w-6 rounded-full"></div>
                <div className="bg-purplespace-200 absolute top-4 -left-8 h-4 w-4 animate-pulse rounded-full"></div>
                <div className="border-purplespace-300/50 absolute -right-12 bottom-8 h-8 w-8 animate-spin rounded-full border-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section
        ref={(el) => addToRefs(el, 3)}
        className="bg-purplespace-200/5 flex min-h-screen translate-y-8 items-center px-4 opacity-0 transition-all duration-1000 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="group relative">
              <div className="relative transform overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                <Image
                  src="/readiamond-img/setting-page.png"
                  alt="Customization Settings"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
                <div className="from-purplespace-200/20 to-purplespace-300/20 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </div>
              {/* Settings-themed decorative elements */}
              <div className="border-purplespace-300 absolute -top-4 -right-4 flex h-8 w-8 items-center justify-center rounded-full border-2">
                <div className="bg-purplespace-300 h-2 w-2 animate-pulse rounded-full"></div>
              </div>
              <div className="bg-purplespace-200/50 absolute -bottom-6 -left-6 h-3 w-12 rounded-full"></div>
              <div className="border-purplespace-200 absolute top-1/2 -right-8 h-6 w-6 rotate-45 transform rounded border"></div>
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-font-emphasize text-5xl leading-tight font-bold md:text-6xl">
                  Your Learning, Your Way
                </h2>
                <p className="text-font-primary text-xl leading-relaxed">
                  Personalize every aspect of your learning experience. More
                  languages, AI models, and customization options coming soon.
                </p>
                <p className="text-font-secondary text-lg leading-relaxed">
                  Dark mode, custom fonts, keyboard shortcuts, and data privacy -
                  readiamond adapts to how you learn best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        ref={(el) => addToRefs(el, 4)}
        className="flex min-h-screen translate-y-8 items-center justify-center px-4 text-center opacity-0 transition-all duration-1000 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-8">
            <h2 className="text-font-emphasize text-5xl leading-tight font-bold md:text-7xl">
              Start Learning Today
            </h2>
            <p className="text-font-primary mx-auto max-w-2xl text-xl leading-relaxed md:text-2xl">
              Join thousands of language learners who are transforming their
              reading into vocabulary mastery.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="https://github.com/parsifal486/readiamond/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purplespace-200 hover:bg-purplespace-300 hover:shadow-purplespace-300/25 flex transform items-center justify-center gap-4 rounded-full px-10 py-5 text-xl font-semibold text-white shadow-2xl transition-all hover:scale-110"
            >
              <icon.download size={28} className="group-hover:animate-bounce" />
              Download Now
            </a>
            <a
              href="https://github.com/parsifal486/readiamond"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-purplespace-200 text-purplespace-200 hover:bg-purplespace-200 flex transform items-center justify-center gap-4 rounded-full border-2 px-10 py-5 text-xl font-semibold transition-all hover:scale-105 hover:text-white"
            >
              <icon.github
                size={28}
                className="transition-transform group-hover:rotate-12"
              />
              View on GitHub
            </a>
          </div>

          {/* Decorative elements */}
          <div className="relative">
            <div className="bg-purplespace-300 absolute -top-20 left-1/4 h-2 w-2 animate-ping rounded-full"></div>
            <div className="bg-purplespace-200 absolute -top-32 right-1/3 h-1 w-1 animate-pulse rounded-full"></div>
            <div className="border-purplespace-300 absolute -bottom-16 left-1/3 h-3 w-3 animate-spin rounded-full border"></div>
            <div className="bg-purplespace-200/50 absolute right-1/4 -bottom-24 h-2 w-2 animate-bounce rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
