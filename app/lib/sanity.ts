import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";


export const client = createClient({
    projectId: '4so6t6zs',
    dataset: 'production',
    apiVersion: '2024-12-13',
    useCdn: true
});

const builder = ImageUrlBuilder(client)

export function urlFor(source : string){
    return builder.image(source)
}
