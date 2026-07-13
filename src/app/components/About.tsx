import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaWeixin } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

type ContactLink = {
    icon: React.ReactNode;
    label: string;
    url: string;
    download?: boolean;
    tooltip?: string;
};

export const About = () => {
    const contactLinks: ContactLink[] = [
        {
            icon: <BiLogoGithub size={20} />,
            label: 'GitHub',
            url: 'https://github.com/parsifal486',
        },
        {
            icon: <MdEmail size={20} />,
            label: 'Email',
            url: 'mailto:mrliuzeyou@outlook.com',
        },
        {
            icon: <FaInstagram size={20} />,
            label: 'Instagram',
            url: 'https://www.instagram.com/ryuteakwoo/',
        },
        {
            icon: <FaWeixin size={20} />,
            label: 'WeChat',
            url: '/staticPage/wechatQRcode',
        },
        {
            icon: <FiFileText size={20} />,
            label: 'Résumé',
            url: '/resume.pdf',
            download: true,
            tooltip: 'October 2025 version',
        },
    ];

    return (
        <section id="about" className="mx-auto w-full max-w-2xl px-6 py-16">
            <div className="flex flex-wrap items-center gap-5">
                {contactLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        {...(link.download
                            ? { download: 'Ryuteakwoo.pdf' }
                            : { target: '_blank', rel: 'noopener noreferrer' })}
                        aria-label={link.label}
                        className="group text-font-secondary hover:text-font-emphasize relative transition-colors"
                    >
                        {link.icon}
                        <span className="bg-foreground text-background pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                            {link.tooltip ?? link.label}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};
