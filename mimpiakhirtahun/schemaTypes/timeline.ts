import { title } from "process";

export default {
    name: 'timelineday1',
    type: 'document',
    title: 'Timeline Day 1',
    fields: [
        {
            name: 'activity',
            type: 'string',
            title: 'Activity'
        },
        {
            name: 'time',
            type: 'string',
            title: 'Time'
        },
        {
            name: 'decription',
            type: 'text',
            title: 'Description'
        }
    ]
}