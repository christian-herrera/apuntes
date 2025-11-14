// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Apuntes",
    tagline: "Repositorio de apuntes personales sobre programación y tecnología.",
    favicon: "img/logo.png",

    future: {
        v4: true,
    },

    url: "https://apuntes.christianherrera.com.ar",
    baseUrl: "/",
    organizationName: "christian-herrera",
    projectName: "apuntes",
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    onBrokenLinks: "throw",
    i18n: {
        defaultLocale: "es",
        locales: ["es"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: "./sidebars.js",
                    remarkPlugins: [require("remark-math")],
                    rehypePlugins: [require("rehype-katex")],
                    showLastUpdateAuthor: false,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            // image: 'img/index/docusaurus-social-card.jpg',
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: "Apuntes",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Bunker de Notas",
                    },
                    {
                        href: "https://github.com/christian-herrera",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Apuntes Importantes",
                        items: [
                            {
                                label: "Bunker de Notas",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Social",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/christian-herrera",
                            },
                            {
                                label: "Twitter",
                                href: "https://x.com/chriissrp",
                            },
                            {
                                label: "Instagram",
                                href: "https://instagram.com/chris1496.rp",
                            },
                            {
                                label: "Linkedin",
                                href: "https://ar.linkedin.com/in/christian-herrera-ing",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Docusaurus",
                                href: "https://docusaurus.io/",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/facebook/docusaurus",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Apuntes, Christian Herrera`,
            },
            prism: {
                theme: prismThemes.gruvboxMaterialDark,
                additionalLanguages: ["php", "bash"],
            },
        }),
};

export default config;
