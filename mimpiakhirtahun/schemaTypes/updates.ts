export default {
    name: 'update',
    type: 'document',
    title: 'Updates',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        }
    ]
}