
import { BiChevronRight as contact } from 'react-icons/bi';
import { BiMoon as daymode } from 'react-icons/bi';
import { BiSolidMoon as nightmode } from "react-icons/bi";
import { BiMenu as menu } from "react-icons/bi";
import { BiArrowFromLeft as closepanel } from "react-icons/bi";
import { BiDownload as download } from "react-icons/bi";
import { BiRightArrowAlt as arrowRight } from "react-icons/bi";
import { BiCodeAlt as code } from "react-icons/bi";
import { GoMortarBoard as mortarBoard } from "react-icons/go";
import { CgToolbox as kitBox } from "react-icons/cg";
import { VscVscode as toolVscode } from "react-icons/vsc";
import { RiReactjsLine as toolReact } from "react-icons/ri";
import { RiMiniProgramFill as toolMiniProgram } from "react-icons/ri";
import { TbBrandNodejs as toolNodejs } from "react-icons/tb";
import { FaCode as toolCode } from "react-icons/fa";
import { GrProjects as project } from "react-icons/gr";
import { IoLanguage as language } from "react-icons/io5";
import { FaGithub as github } from "react-icons/fa";


import { myWork } from '@/mytypes';


const personData = [{
   itemName:'language',
   itemValue:'HTML, CSS, Typescript, Javascript, Python',
   icon:code
},
{
  itemName:'education',
  itemValue:'B.tech in Computer Science',
  icon:mortarBoard
},
{
  itemName:'Projects',
  itemValue:'I\'ve built 5+ solid projects— most of them are currently running smoothly.',
  icon:kitBox
}]

const myWorks: myWork[] = [

  {
    index:0,
    title:'my portfolio',
    description:'a personal website build with nextjs',
    image:'/diamond.svg',
    isPinned:false,
    keywords:['nextjs', 'react', 'tailwindcss', 'typescript', 'nodejs'],
    path:'https://github.com/parsifal486/portfolio',
    github:'',
    descriptionPic:'/imgs/portfolio.png',
    detailUrl:null
  },
  {
    index:1,
    title:'readiamond',
    description:'ai boosted next generation language learning app',
    image:'/imgs/readiamond.png',
    isPinned:true,
    keywords:[ 'react', 'tailwindcss', 'typescript', 'nodejs', 'mongodb'],
    path:'https://readiamond.ryuteakwoo.com',
    github:'',
    descriptionPic:'/imgs/readiamonddiscription.png',
    detailUrl:null
  },
  {
    index:2,
    title:'miniApp:QDU cat',
    description:'a mini app for QDU students to record their cat status',
    image:'/imgs/qducat.jpg',
    isPinned:true,
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'/staticPage/qmtjQRcode',
    github:'',
    descriptionPic:'/imgs/qmtjdiscription.png',
    detailUrl:null
  },
  {
    index:3,
    title:'miniApp:YueJian reading club',
    description:'a mini app for QDU\'s book lovers to share thier feelings',
    image:'/imgs/YJWLlogo.jpg',
    isPinned:true,
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'/staticPage/yjyjQRcode',
    github:'',
    descriptionPic:'/imgs/yjyjdiscription.jpg',
    detailUrl:null
  }
]

const toolData = [{
  icon:toolVscode,
  itemName:'VS Code'
},
{
  icon:toolReact,
  itemName:'React'
},
{
  icon:toolMiniProgram,
  itemName:'Mini Program'
},
{
  icon:toolNodejs,
  itemName:'Nodejs'
}]



const logo = {
  diamond:'/diamond.svg'
};

const icon = {
  contact,
  daymode,
  nightmode,
  menu,
  closepanel,
  download,
  arrowRight,
  code,
  toolCode,
  project,
  language,
  github
};

const img = {
  avatar:'/imgs/avatar.jpg',
  blur:'/imgs/blurEgg.png',
  wechatQRcode:'/imgs/wechatQR.jpg',
  qmtjQRcode:'/imgs/qmtjQR.jpg',
  yjyjQRcode:'/imgs/yjyjQR.jpg'
};

export { logo, icon, img, personData, toolData, myWorks};
