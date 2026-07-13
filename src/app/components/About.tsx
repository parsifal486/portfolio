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
};

export const About = () => {
    const contactLinks: ContactLink[] = [
        {
            icon: <BiLogoGithub size={18} />,
            label: 'GitHub',
            url: 'https://github.com/parsifal486',
        },
        {
            icon: <MdEmail size={18} />,
            label: 'Email',
            url: 'mailto:mrliuzeyou@outlook.com',
        },
        {
            icon: <FaInstagram size={18} />,
            label: 'Instagram',
            url: 'https://www.instagram.com/ryuteakwoo/',
        },
        {
            icon: <FaWeixin size={18} />,
            label: 'WeChat',
            url: '/staticPage/wechatQRcode',
        },
        {
            icon: <FiFileText size={18} />,
            label: 'Résumé',
            url: '/resume.pdf',
            download: true,
        },
    ];

    return (
        <section
            id="about"
            className="border-hairline mx-auto w-full max-w-2xl border-t px-6 py-16"
        >
            <h2 className="text-font-secondary text-xs font-medium tracking-widest uppercase">
                Get in touch
            </h2>

            <p className="text-font-secondary mt-8 leading-relaxed">
                Open to project collaboration, technical discussions, and job
                opportunities. Feel free to reach out.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {contactLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        {...(link.download
                            ? { download: 'Ryuteakwoo.pdf' }
                            : { target: '_blank', rel: 'noopener noreferrer' })}
                        className="text-font-primary hover:text-font-emphasize inline-flex items-center gap-2 text-sm transition-colors"
                    >
                        {link.icon}
                        {link.label}
                    </a>
                ))}
            </div>

            <p className="text-font-secondary mt-16 text-xs">
                Designed &amp; built by Ryuteakwoo
            </p>
        </section>
    );
};
