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

export { logo, icon, img, personData, toolData};
