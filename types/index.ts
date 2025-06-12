type myWork = {
    index:number,
    title:string,
    language:string,
    description:string,
    image:string,
    isPinned:boolean,
    keywords:string[],
    path:string,
    github:string
};

type PostData = {
    slug: string,
    title: string,
    date: string,
    content: string,
    description: string,
    keywords: string[],
}
export type { myWork, PostData };
