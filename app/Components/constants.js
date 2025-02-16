//  Service Constant

import Link from 'next/link';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaShoppingCart, FaSearch, FaEye, FaGithub } from 'react-icons/fa';
import react from '../../public/images/SVG/react-white.svg';
import nextjs from '../../public/images/SVG/nextjs-white.svg';
import tailwindcss from '../../public/images/SVG/tailwind-white.svg';
import wordpress from '../../public/images/SVG/wordpress-white.svg';
import framer from '../../public/images/SVG/framer-white.svg';
import material from '../../public/images/SVG/material-white.svg';
import bootstrap from '../../public/images/SVG/bootstrap-white.svg';
import jquery from '../../public/images/SVG/jquery-logo-white.svg';
import css from '../../public/images/SVG/css-white.svg';
import html from '../../public/images/SVG/html5-white.svg';
import js from '../../public/images/SVG/javascript-white.svg';
import port1 from '../../public/images/port1.png';
import port2 from '../../public/images/port2.png';
import port3 from '../../public/images/port3.png';
import port4 from '../../public/images/port4.png';

export const services = [
    {
        id: 1,
        title: 'Web Design',
        description: 'We design and develop websites that are responsive, user-friendly, and visually appealing.',
        icon: <FaLaptopCode />,
    },
    {
        id: 2,
        title: 'Graphic Design',
        description: 'We create stunning graphics that effectively communicate your brand message.',
        icon: <FaPaintBrush />,
    },
    {
        id: 3,
        title: 'Mobile App Design',
        description: 'We craft intuitive and engaging mobile app interfaces that enhance user experience.',
        icon: <FaMobileAlt />,
    },
    {
        id: 4,
        title: 'E-Commerce Solutions',
        description: 'We build powerful online stores that ensure seamless shopping experiences and conversions.',
        icon: <FaShoppingCart />,
    },
    {
        id: 5,
        title: 'SEO & Digital Marketing',
        description: 'We optimize websites to rank higher on search engines and drive organic traffic.',
        icon: <FaSearch />,
    },
];

export const projects = [
    {
        id: 1,
        title: 'A GIFTING WEBSITE: Made To Love',
        description: 'Project Description',
        image: port1,
        stack: ['React', 'Next.js', 'Tailwind CSS'],
        stackIcons: [
            react,
            framer,
            tailwindcss,
        ],
        Links: [
            {
                id: 1,
                title: 'Live Demo',
                icon: <FaEye />,
                url: 'https://madetolove.netlify.app',
            },
            {
                id: 2,
                title: 'Source Code',
                icon: <FaGithub />,
                url: 'https://github.com/onaneye/madetolove',
            },
        ],
    },
    {
        id: 2,
        title: 'E-COMMERCE: Posh & Spice',
        description: 'Project Description',
        image: port2,
        stack: ['jQuery','Bootstrap', 'css', 'HTML', 'Javascript', ],
        stackIcons: [
            jquery,
            bootstrap,
            css,
            html,
            js,
        ],
        Links: [
            {
                id: 1,
                title: 'Live Demo',
                icon: <FaEye />,
                url: 'https://temporarylink.netlify.app',
            },
            {
                id: 2,
                title: 'Source Code',
                icon: <FaGithub />,
                url: 'https://github.com/onaneye/posh-and-spice',
            },
        ],
    },
    {
        id: 3,
        title: 'A LANDING PAGE: Cherut Contracting',
        description: 'Project Description',
        image: port3,
        stack: ['Wordpress', 'RoyalElementor', 'SEO'],
        stackIcons: [
            wordpress
        ],
        Links: [
            {
                id: 1,
                title: 'Live Demo',
                icon: <FaEye />,
                url: 'https://www.cherutcontractingservices.com',
            },
            {
                id: 2,
                title: 'Source Code',
                icon: <FaGithub />,
                url: 'https://www.example.com',
            },
        ],
    },
    {
        id: 4,
        title: 'A LANDING PAGE: Your Favorite Writer',
        description: 'Project Description',
        image: port4,
        stack: ['Wordpress', 'RoyalElementor', 'SEO'],
        stackIcons: [
           wordpress
        ],
        Links: [
            {
                id: 1,
                title: 'Live Demo',
                icon: <FaEye />,
                url: 'https://yourfavoritewriter.kegsug.com',
            },
            {
                id: 2,
                title: 'Source Code',
                icon: <FaGithub />,
                url: 'https://www.example.com',
            },
        ],
    },

];

