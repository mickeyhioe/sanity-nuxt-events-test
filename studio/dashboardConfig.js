export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-test-studio-arnpbgk2',
                  apiId: 'f79c59a5-2a60-4d98-85f8-71567cd0bdaa'
                },
                {
                  buildHookId: '5f4d528d85f08b08193322e9',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-test-web-pzvhgnkm',
                  apiId: '31c2a73b-65d5-4410-b7e7-276337d4346a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mickeyhioe/sanity-nuxt-events-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-test-web-pzvhgnkm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
