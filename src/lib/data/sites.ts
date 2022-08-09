export type Site = {
    name: string;
    href: string;
    description: string;
};

export const sites: Site[] = [
    {
        name: 'jakobhelgesson.com',
        description: 'Portfolio and personal website',
        href: 'https://jakobhelgesson.com',
    },
    {
        name: 'blog.helgesson.dev',
        description: 'Devblog',
        href: 'https://blog.helgesson.dev',
    },
    {
        name: 'bin.helgesson.dev',
        description: 'Selfhosted hastebin',
        href: 'https://bin.helgesson.dev',
    },
    {
        name: 'status.helgesson.dev',
        description: 'Status page for my services',
        href: 'https://status.helgesson.dev',
    }
];
