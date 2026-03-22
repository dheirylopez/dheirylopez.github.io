import avatar from '/src/assets/images/Perfil2.jpg';
import hero from '/src/assets/images/Portada.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://dheirylopez.github.io',
 avatar: {
        src: avatar,
        alt: 'Dheiry Lopez'
    },
    title: 'Dheiry Lopez',
    subtitle: 'Software Engineer',
    description: 'portafolio Dheiry',
        image: {
        src: '/Perfil2.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
     
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
      {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/dheiry-lopez-22665aa0/'
        },
        {
            text: 'Upwork',
            href: 'https://www.upwork.com/freelancers/~01d1eb273b35ecee7c?s=1110580753069494272'
        },
        {
            text: 'Github',
            href: 'https://github.com/dheirylopez'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/lopezdheiry?igsh=YmRjd3NxNmloZW5o&utm_source=qr'
        }
    ],
    hero: {
      title: 'Hello & Welcome! Explore My Software Projects!',
        text: 'Hi, I’m Dheiry López, a Senior Software Engineer with 7+ years of experience delivering scalable software solutions and supporting cross-functional project execution.<br /><br /> My background includes designing and developing enterprise applications, building RESTful APIs, contributing to microservices architectures, supporting AWS-based environments, and developing RPA bots with Automation Anywhere to streamline repetitive business processes and increase operational efficiency. <br /><br />I’ve worked across industries including energy, HR/payroll, healthcare manufacturing, and technology, which has given me the adaptability to understand new domains quickly and develop practical solutions for diverse business needs. <br /> <br />Today, I’m focused on helping companies and clients build software and automation solutions that are clean, maintainable, user-centered, and capable of driving long-term impact.',
           image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    
    projectsPerPage: 8
};

export default siteConfig;
