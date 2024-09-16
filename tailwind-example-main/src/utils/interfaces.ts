export interface iChildren{
    children: React.ReactNode;
}

export interface iData extends Object{
    name: String;
    title: String;
    desc: String;
    components: {
        header: {
            title: String;
            links: String[];
        },
        imageText: {
            text1: String;
            text2: String;
        },
        socialCard: {
            Instagram: iSocial,
            Facebook: iSocial,
            TikTok: iSocial
        },
        footer: {
            links: String[];
        }
    }
}

interface iSocial {
    name: string;
    username: string;
    logo: string;
}