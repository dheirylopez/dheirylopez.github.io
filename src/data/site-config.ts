export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;

    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://dheirylopez.github.io',
    title: 'Hello & Welcome! Explore My Software Projects!',
    subtitle: ' ',
    description: 'XXX',
    image: {
        src: '/dante-preview.jpg',
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
        },


    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/dheiry-lopez-22665aa0/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/createsoftlopez?igsh=Ym80cGhueDc0dmRl'
        },
        {
            text: 'UpWork',
            href: 'https://www.upwork.com/freelancers/~01d1eb273b35ecee7c?s=1110580753069494272'
        }
    ],
    hero: {
        title: '',
        text: `Hi! I’m Dheiry López, a Senior Software Engineer on Upwork, dedicated to developing impactful software solutions. I thrive on problem-solving, collaboration, and continuous learning, creating software that is reliable, functional, and aligned with both user and business needs.<br/><br/>
With 7+ years of experience, I specialize in designing and implementing scalable, high-performance applications. My expertise also includes building RESTful APIs, designing microservices architectures, and managing AWS cloud infrastructure at an intermediate level. Throughout my career, I’ve successfully led system migrations and cross-functional projects that improved performance, user satisfaction, and delivery efficiency.<br/><br/>
I have experience across diverse sectors such as energy, HR/payroll, healthcare manufacturing, and technology, but I can adapt my skills to any other industry. On Upwork, I focus on delivering clean, maintainable code, reliable communication, and results that align perfectly with my clients’ goals.`,

        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    projectsPerPage: 8
};

export default siteConfig;
