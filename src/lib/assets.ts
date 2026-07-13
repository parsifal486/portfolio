import { BiDownload as download } from 'react-icons/bi';
import { FaGithub as github } from 'react-icons/fa';

import { myWork } from '@/mytypes';

const myWorks: myWork[] = [
  {
    index: 0,
    title: 'my portfolio',
    description: 'a personal website build with nextjs',
    image: '/diamond.svg',
    isPinned: false,
    keywords: ['nextjs', 'react', 'tailwindcss', 'typescript', 'nodejs'],
    path: 'https://github.com/parsifal486/portfolio',
    github: '',
    descriptionPic: '/imgs/portfolio.png',
    detailUrl: null,
  },
  {
    index: 1,
    title: 'readiamond',
    description: 'ai boosted next generation language learning app',
    image: '/imgs/readiamond.png',
    isPinned: true,
    keywords: ['react', 'tailwindcss', 'typescript', 'nodejs', 'mongodb'],
    path: 'https://readiamond.ryuteakwoo.com',
    github: '',
    descriptionPic: '/imgs/readiamonddescription.png',
    detailUrl: null,
  },
  {
    index: 2,
    title: 'miniApp:QDU cat',
    description: 'a mini app for QDU students to record their cat status',
    image: '/imgs/qducat.jpg',
    isPinned: true,
    keywords: ['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path: '/staticPage/qmtjQRcode',
    github: '',
    descriptionPic: '/imgs/qmtjdescription.png',
    detailUrl: null,
  },
  {
    index: 3,
    title: 'miniApp:YueJian reading club',
    description: "a mini app for QDU's book lovers to share thier feelings",
    image: '/imgs/YJWLlogo.jpg',
    isPinned: true,
    keywords: ['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path: '/staticPage/yjyjQRcode',
    github: '',
    descriptionPic: '/imgs/yjyjdescription.jpg',
    detailUrl: null,
  },
];

const logo = {
  diamond: '/diamond.svg',
};

const icon = {
  download,
  github,
};

const img = {
  avatar: '/imgs/avatar.jpg',
  wechatQRcode: '/imgs/wechatQR.jpg',
  qmtjQRcode: '/imgs/qmtjQR.jpg',
  yjyjQRcode: '/imgs/yjyjQR.jpg',
};

export { logo, icon, img, myWorks };
