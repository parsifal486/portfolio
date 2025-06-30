'use client';
import React, { useRef, useState, useEffect } from 'react';
import { logo, icon } from '@/public/assets';
import Image from 'next/image';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export const Navbar = () => {
    const t = useTranslations('navigation');
    const locale = useLocale();
    const mobileMenuRef = useRef<HTMLUListElement>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // 当向下滚动超过20px时隐藏导航栏
            if (currentScrollY > lastScrollY && currentScrollY > 20) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        // 清理事件监听器
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const openMenu = () => {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    return (
        <nav
            className={`bg-purplespace-100 fixed z-50 flex h-16 w-full flex-row items-center justify-between px-5 py-4 transition-transform duration-300 lg:px-8 xl:px-[8%] ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <a className="flex flex-row items-center gap-2">
                <Image src={logo.diamond} alt="logo" width={50} height={50} />
                <div className="text-2xl font-bold">Ryuteakwoo&apos;s</div>
            </a>

            <ul className="font-outfit hidden flex-row items-center justify-between gap-8 rounded-full px-12 py-3 md:flex lg:gap-10">
                <li>
                    <a href="#home">{t('home')}</a>
                </li>
                <li>
                    <a href="#works">{t('projects')}</a>
                </li>
                <li>
                    <a href="#post">{t('posts')}</a>
                </li>
                {/* todo: add experience section */}
                {/* <li>
          <a href="#experience">Experience</a>
        </li> */}
                <li>
                    <a href="#about">{t('about')}</a>
                </li>
            </ul>

            <div className="flex flex-row items-center gap-4">
                <LanguageSwitcher />
                <a
                    href={`/resume_${locale}.pdf`}
                    download={`public/刘泽宇简历q.pdf`}
                    className="ml-4 hidden items-center gap-1 rounded-full border border-gray-500 px-3 py-2.5 pl-5 font-bold lg:flex"
                >
                    resume
                    <icon.download size={20} />
                </a>

                <button className="ml-3 block lg:hidden" onClick={openMenu}>
                    <icon.menu size={25} />
                </button>
            </div>

            {/* Mobile Menu */}
            <ul
                ref={mobileMenuRef}
                className="bg-purplespace-200 fixed top-0 -right-64 bottom-0 flex h-screen w-64 flex-col gap-4 px-10 py-20 transition duration-300 md:hidden"
            >
                <button
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeMenu}
                >
                    <icon.closepanel size={25} />
                </button>

                <li>
                    <a href="#home" onClick={closeMenu}>
                        {t('home')}
                    </a>
                </li>
                <li>
                    <a href="#works" onClick={closeMenu}>
                        {t('projects')}
                    </a>
                </li>
                <li>
                    <a href="#post" onClick={closeMenu}>
                        {t('posts')}
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={closeMenu}>
                        {t('about')}
                    </a>
                </li>
            </ul>
        </nav>
    );
};
