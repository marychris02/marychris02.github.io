import {
  FaDatabase,
  FaEnvelope,
  FaFacebookF,
  FaGamepad,
  FaGithub,
  FaInstagram,
  FaPalette,
  FaPhone,
  FaUtensils,
} from 'react-icons/fa'
import { FaBowlingBall, FaPersonHiking } from 'react-icons/fa6'
import { SiCss, SiGithub, SiHtml5 } from 'react-icons/si'
import { TbBrandCSharp, TbBrandVisualStudio, TbBrandVscode } from 'react-icons/tb'

import profilePic from './assets/images/mari.png'
import webProject from './assets/images/web.jpg'
import aluProject from './assets/images/alu.jpg'
import unioProject from './assets/images/unio.jpg'

export const contacts = [
  { icon: FaEnvelope, label: 'Email', href: 'mailto:malinaomarychris@gmail.com' },
  { icon: FaPhone, label: 'Phone', href: 'tel:+639928226730' },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/19D2mj1A2J/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/kokonutmptree?igsh=MWYxcm54cjdyamZreQ==',
  },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/marychris02' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'My Work', href: '#work' },
  { label: 'Connect', href: '#contact', dropdown: true },
]

export const hobbies = [
  {
    icon: FaUtensils,
    name: 'COOKING',
    description:
      'I love experimenting with recipes and creating meals that bring comfort and creativity to my daily life.',
  },
  {
    icon: FaPersonHiking,
    name: 'HIKING',
    description:
      'I enjoy exploring nature trails, seaside and sidewalks, which helps me stay active and appreciate the outdoors.',
  },
  {
    icon: FaBowlingBall,
    name: 'BOWLING',
    description:
      'Bowling is a fun way for me to relax. If only I had money, I would definitely do it everyday.',
  },
  {
    icon: FaGamepad,
    name: 'PLAYING GAMES',
    description:
      'Whether digital or board games, I enjoy the strategy, teamwork, and entertainment they bring. But no other game can beat the Chinese garter. I really love that so much.',
  },
]

export const personalDetails = [
  { label: 'Age:', value: '20' },
  { label: 'Sex:', value: 'Female' },
  { label: 'Birth Date:', value: 'October 2, 2005' },
  { label: 'Address:', value: 'Colupan Bajo, Sinacaban, Misamis Occidental' },
]

export const skills = [
  {
    number: '01',
    title: 'Visual Design',
    description:
      'Ability to create clean, aesthetic, and user-friendly layouts that enhance user experience.',
  },
  {
    number: '02',
    title: 'Wireframing & Prototyping',
    description:
      'Skilled in sketching and building interactive prototypes to visualize ideas before development.',
  },
  {
    number: '03',
    title: 'Responsive Design',
    description:
      'Ensuring websites and applications adapt seamlessly across different devices and screen sizes.',
  },
  {
    number: '04',
    title: 'User Experience (UX)',
    description:
      'Understanding user needs and behaviors to design intuitive and accessible interfaces.',
  },
  {
    number: '05',
    title: 'Front-End Development',
    description:
      'Knowledge of HTML and CSS to bring designs to life and collaborate effectively with developers.',
  },
]

export const tools = [
  { name: 'VS CODE', icon: TbBrandVscode },
  { name: 'VISUAL STUDIO', icon: TbBrandVisualStudio },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'C#', icon: TbBrandCSharp },
  { name: 'SQL SERVER', icon: FaDatabase },
  { name: 'GITHUB', icon: SiGithub },
  { name: 'CANVA', icon: FaPalette },
]

export const skillBars = [
  { name: 'WEB DESIGN', value: 85 },
  { name: 'WEB DEVELOPMENT', value: 80 },
  { name: 'UI/UX DESIGN', value: 90 },
  { name: 'OPTIMIZATION', value: 82 },
]

export const projects = [
  {
    image: webProject,
    alt: 'WebSite project',
    title: 'WebSite',
    description: 'My first ever project. TO LOG IN: malinao@gmail.com / riri@02',
    link: 'https://marychris02.github.io/MARY/',
  },
  {
    image: aluProject,
    alt: 'ALU Operation project',
    title: 'ALU Operation',
    description: 'A step-by-step demonstration of ALU Operation.',
    link: 'https://marychris02.github.io/ALU_Operation_Demo/',
  },
  {
    image: unioProject,
    alt: 'Unio Application project',
    title: 'Unio Application',
    description:
      "This is an application inspired by Soduko. Not deployed yet; that's why it's not linked and the button is not clickable.",
    link: null,
  },
]

export const socials = contacts

export { profilePic }
