export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'createdBy',
            type: 'object',
            title: 'Created By',
            fields: [
              {
                name: 'name',
                type: 'string',
                title: 'Name',
              },
              {
                name: 'ig',
                type: 'string',
                title: 'ig',
              },
            ],
          },
          {
            name: 'image',
            type: 'array',
            title: 'Project Image',
            of: [{type: 'image'}]
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description'
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'product slug',
            options: {source: 'name'},
          },
          {
            name: 'category',
            type: 'reference',
            title: 'project category',
            to: [
                {
                    type: 'category'
                }
            ]
          },
          {
            name: 'typeproject',
            type: 'reference',
            title: 'Type of Project',
            to: [
                {
                    type: 'typeproject'
                }
            ]
          }
    ]}