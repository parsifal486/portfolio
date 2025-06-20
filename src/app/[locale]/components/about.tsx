import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaWeixin } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export const About = () => {
    const t = useTranslations('about');

    const contactLinks = [
        {
            icon: <BiLogoGithub size={25} />,
            label: 'GitHub',
            url: 'https://github.com/parsifal486',
        },
        {
            icon: <MdEmail size={25} />,
            label: 'Email',
            url: 'mailto:mrliuzeyou@outlook.com',
        },
        {
            icon: <FaInstagram size={25} />,
            label: 'Instagram',
            url: 'https://www.instagram.com/ryuteakwoo/',
        },
        {
            icon: <FaWeixin size={25} />,
            label: 'wechat',
            url: '/staticPage/wechatQRcode',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center" id="about">
            <div className="flex w-11/12 flex-col items-start justify-center md:ml-50">
                <div className="text-font-emphasize font-inter text-3xl">
                    {t('title')}
                </div>
                {/* Contact Section */}
                <div
                    className="bg-purplespace-200/30 my-10 w-full rounded-xl p-8 backdrop-blur-sm"
                    id="contact"
                >
                    <h2 className="text-font-emphasize font-inter mb-6 text-3xl">
                        {t('getInTouch')}
                    </h2>
                    <div className="flex flex-wrap gap-6">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-font-primary hover:text-font-emphasize flex items-center gap-2 transition-colors duration-300"
                            >
                                {link.icon}
                                <span className="font-inter">{link.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="text-font-secondary font-inter mt-8">
                        <p className="mb-2">{t('reachOut')}</p>
                        <ul className="list-disc pl-6">
                            <li>{t('collaboration')}</li>
                            <li>{t('discussions')}</li>
                            <li>{t('opportunities')}</li>
                            <li>{t('inquiries')}</li>
                        </ul>
                    </div>
                </div>

                {/* Description Section */}
                <div className="my-10 w-full rounded-xl p-8 backdrop-blur-sm">
                    <p className="font-inter text-center text-sm text-gray-400">
                        {t('footer')}
                    </p>
                </div>
            </div>
        </div>
    );
};
