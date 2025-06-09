import dimond from './dimond.svg';
import dimond1 from './dimond1.svg';
import dimond2 from './dimond2.svg';
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

import { myWork } from '@/types';

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
    title:'readimond',
    language:'En',
    description:'ai boosted next generation language learning app',
    image:'',
    isPinned:true,
    keywords:['nextjs', 'react', 'tailwindcss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:''
  },
  {
    title:'miniApp:QDU cat',
    description:'a mini app for QDU students to record their cat status',
    image:'',
    isPinned:true,
    language:'En',
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:''
  },
  {
    title:'miniApp:YueJian reading club',
    description:'a mini app for QDU\'s book lovers to share thier feelings',
    image:'',
    isPinned:true,
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    language:'En',
    path:'',
    github:''
  },
  {
    title:'readimond',
    language:'Zh',
    description:'AI驱动的下一代语言学习阅读器',
    image:'',
    isPinned:true,
    keywords:['nextjs', 'react', 'tailwindcss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:''
  },
  {
    title:'小程序：青猫图鉴',
    description:'一个供青岛大学学生记录校园猫咪状态的小程序',
    image:'',
    isPinned:true,
    language:'Zh', 
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:''
  },
  {
    title:'小程序：悦见阅见读书会',
    description:'一个供青岛大学爱书人分享读书感受的小程序',
    image:'',
    isPinned:true,
    language:'Zh',
    keywords:['miniapp', 'scss', 'typescript', 'nodejs', 'mongodb'],
    path:'',
    github:''
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

import avatar from './imgs/avatar.jpg';
import blur from './imgs/blurEgg.png';

const logo = {
  dimond,
  dimond1,
  dimond2,
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
};

const img = {
  avatar,
  blur,
};

export { logo, icon, img, personData, toolData, myWorks};
