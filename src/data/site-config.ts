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
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://dheirylopez.github.io',
    title: 'Dheiry Lopez',
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
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
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
        {
            text: 'Terms',
            href: '/terms'
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
            href: 'https://www.upwork.com/freelancers/~01d1eb273b35ecee7c'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: " Hi! I’m Dheiry Lopez, a Senior Software Engineer with 7+ years of experience in web development. I specialize in designing and implementing scalable, high-performance applications using C#, ASP.NET, JavaScript, and Angular. My expertise also includes building RESTful APIs and managing AWS cloud infrastructure at an intermediate level. <br/>  Throughout my career, I’ve successfully led system migrations and cross-functional projects that improved performance, user satisfaction, and delivery efficiency. I’ve worked across diverse sectors — energy systems, human resources and payroll, manufacturing within the healthcare industry, and technology solutions— helping companies modernize their systems and accelerate growth. <br/>  On Upwork, I focus on delivering clean, maintainable code, reliable communication, and results that align perfectly with my clients’ goals. Let’s build something impactful together!.",
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
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
