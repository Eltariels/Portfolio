import { lbalogo, evolutive, avatar, php, liongency } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    sass,
    tailwindcss,
    threads,
    snapgram
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Alternance Developpeur Web Full-Stack",
        company_name: "Liongency",
        icon: liongency,
        iconBg: "#fff",
        date: "Octobre 2024 - 6 Mai 2025",
        points: [
            "Intégration Front-end",
            "Création de site web wordpress",
            "Développement intégralement personalisé et custom",
            "100% fait main : thème et plugin",
            "Gestion de Back-Office + BDD php/sql",
            "Language : HTML, CSS / SASS, JS + Jquery, PHP / ACF",
        ],
    },
    {
        title: "Alternance Developpeur Web Full-Stack",
        company_name: "La Bonne Agence",
        icon: lbalogo,
        iconBg: "#1D19A9",
        date: "Septembre 2023 - Juillet 2024",
        points: [
            "Intégration Front-end",
            "Création de site web wordpress / drupal (Front-end + Back-end)",
            "Gestion de Back-Office + BDD php/sql",
            "Language : HTML / Twig, CSS / SASS, JS, PHP / Symphonie",
        ],
    },
    {
        title: "Stage Développeur Web Full Stack",
        company_name: "Evolutive",
        icon: evolutive,
        iconBg: "#284c90",
        date: "Mai 2023 - Juin 2023",
        points: [
            "Modélisation background 3d",
            "Développement web app PHP avec Wordpress",
            "Développement site de la CPAM de Savoie avec Elementor",
        ],
    },
    {
        title: "Développeur Web Full Stack",
        company_name: "Indépendant",
        icon: avatar,
        iconBg: "#f3e4b2",
        date: "Septembre 2021 - Juin 2022",
        points: [
            "Recherche client",
            "Développement web site vitrine pour particulier",
            "Hébergement sur Serveur Debian",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Eltariels',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/theo-borella/',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'Brows&Cie',
        description: 'Développement Full-stack Wordpress, intégration module de RDV planity pour cabinet',
        link: 'https://browsandcie.fr',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Aux creux des montagnes',
        description: 'Développement Full-stack Wordpress, module de réservation de chambre',
        link: 'https://au-creux-des-montagnes.com',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Opinel',
        description: 'Intégration / Retouches front-end (CMS SYLIUS)',
        link: 'https://www.opinel.com/fr/?gad_source=1&gclid=CjwKCAjw65-zBhBkEiwAjrqRMBZT2aQhEyfMNzACHTV_hNUVWNR85SBRc6JxXE9dlbF3UnjtPkbTgRoCRVEQAvD_BwE',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Araymond Mobility',
        description: 'Intégration front-end en accord avec la maquette (CMS DRUPAL)',
        link: 'https://www.araymond-mobility.com/fr',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Exosens - Photonis',
        description: 'Développement Full-stack, intégration maquette + configuration back office et création de block custom (CMS DRUPAL)',
        link: 'https://www.exosens.com/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Udimec',
        description: 'Développement Full-stack, intégration maquette + configuration back office et création de block custom (CMS WORDPRESS)',
        link: 'https://udimec.votre-projet.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Portfolio React Three Fiber',
        description: 'Développement Full-stack, React Three Fiber pour le front-end',
        link: 'https://theoborella.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Arduino serre connectée React',
        description: 'Développement Full-stack, React Front End, Arduino et mqtt Back End',
        link: '',
    },
];