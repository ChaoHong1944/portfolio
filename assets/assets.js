// ===== PROFILE & BRAND ASSETS =====
import user_image from './user-image.png';
import profile_img from './profile-img.jpeg';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import header_bg_color from './header-bg-color.png';

// ===== ICONS & UI ELEMENTS =====
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';

// ===== NAVIGATION & INTERACTION =====
import hand_icon from './hand-icon.png';
import download_icon from './download-icon.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import right_arrow from './right-arrow.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import send_icon from './send-icon.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';

// ===== TECHNOLOGY STACK =====
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import next from './nextjs.png';
import node from './nodejs.png';
import postgresql from './postgresql.png';
import supabase from './supabase.png';
import chart from './chartjs.png';
import prisma from './prisma.svg';
import jupyter from './jupyter.png';
import aws from './aws.png';
import github from './github.svg';

export const assets = {
    // Profile & Brand
    user_image,
    profile_img,
    logo,
    logo_dark,
    header_bg_color,

    // Icons & UI Elements
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,

    // Navigation & Interaction
    hand_icon,
    download_icon,
    mail_icon,
    mail_icon_dark,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    right_arrow,
    right_arrow_white,
    right_arrow_bold,
    right_arrow_bold_dark,
    send_icon,
    menu_black,
    menu_white,
    close_black,
    close_white,

    // Technology Stack
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    next,
    node,
    postgresql,
    supabase,
    chart,
    prisma,
    jupyter,
    aws,
    github
};

// ===== DATA EXPORTS =====
export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages/Skills', description: 'Javascript, Typescript, Python, SQL, Java, Assembly, C++, HTML, CSS, React.JS, Next.JS, Node.JS, Chart.JS, TailwindCSS, Jest, PostgreSQL, Supabase, MongoDB, Prisma ORM, Git, GitHub, Jupyter, TensorFlow/PyTorch, scikit-learn, Pandas/Numpy, Agile, SCRUM, TDD, OOP' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor\'s of Science in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built and Lead 4 Projects' }
];

export const toolsData = [
    assets.vscode, 
    assets.figma, 
    assets.git, 
    assets.github, 
    assets.next, 
    assets.node,
    assets.chart,  
    assets.mongodb, 
    assets.postgresql, 
    assets.supabase, 
    assets.prisma, 
    assets.firebase, 
    assets.jupyter, 
    assets.aws
];