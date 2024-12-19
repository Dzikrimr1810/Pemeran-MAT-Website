export interface simplifiedCatalogue {
    _id: string;
    type: string;
    name: string;
    creatorName: string;
    creatorIg: string;
    description: string;
    slug: string;
    categoryName: string
    typeproject: string;
    imageUrl: string;
}

export interface simplifiedProject {
    _id: string;
    type: string;
    name: string;
    creatorName: string;
    creatorIg: string;
    description: string;
    slug: string;
    categoryName: string
    typeproject: string;
    imageUrl: string[];
}


export interface displiedProject {
    _id: string;
    type: string;
    name: string;
    creatorName: string;
    creatorIg: string;
    description: string;
    slug: string;
    categoryName: string
    typeproject: string;
    imageUrl: string[];}

export interface galleryType {
    name: string;
    image: string[];
}

export interface updatesType {
    title: string;
    _updatedAt: string;
    description: string;
    image:string;
}