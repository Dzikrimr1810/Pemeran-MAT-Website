import { title } from "process";

export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [{type: 'image'}]
        }
    ]
}