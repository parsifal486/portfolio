
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


import { myWork } from '@/src/mytypes';


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
    index:1,
    title:'readiamond',
    language:'En',
    description:'ai boosted next generation language learning app',
    image:'/imgs/readiamond.png',
    isPinned:true,
    keywords:['nextjs', 'react', 'tailwindcss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:'',
    descriptionPic:null,
    detailUrl:null
  },
  {
    index:2,
    title:'miniApp:QDU cat',
    description:'a mini app for QDU students to record their cat status',
    image:'/imgs/qducat.jpg',
    isPinned:true,
    language:'En',
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
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
    language:'En',
    path:'',
    github:'',
    descriptionPic:null,
    detailUrl:null
  },
  {
    index:4,
    title:'readiamond',
    language:'Zh',
    description:'AI驱动的下一代语言学习阅读器',
    image:'/imgs/readiamond.png',
    isPinned:true,
    keywords:['nextjs', 'react', 'tailwindcss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:'',
    descriptionPic:null,
    detailUrl:null
  },
  {
    index:5,
    title:'小程序：青猫图鉴',
    description:'一个供青岛大学学生记录校园猫咪状态的小程序',
    image:'/imgs/qducat.jpg',
    isPinned:true,
    language:'Zh', 
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:'',
    descriptionPic:'/imgs/qmtjdiscription.png',
    detailUrl:null
  },
  {
    index:6,
    title:'小程序：悦见阅见读书会',
    description:'一个供青岛大学爱书人分享读书感受的小程序',
    image:'/imgs/YJWLlogo.jpg',
    isPinned:true,
    language:'Zh',
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:'',
    descriptionPic:null,
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
  language
};

const img = {
  avatar:'/imgs/avatar.jpg',
  blur:'/imgs/blurEgg.png',
  wechatQRcode:'/imgs/wechatQR.jpg'
};

export { logo, icon, img, personData, toolData, myWorks};
