export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8efaf21bfb092bce2f74d2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z49cx3zd',
                  apiId: 'f9ba4a04-06e7-4e85-adda-8a035a07a247'
                },
                {
                  buildHookId: '5f8efaf267edaa249949d960',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3yhbdocp',
                  apiId: '7d235396-a2f8-4bb0-83d0-a715a9becb8a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moxdev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3yhbdocp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
