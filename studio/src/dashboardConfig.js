export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4923846861a70fd2dcff3e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8j4p1vpc',
                  apiId: 'b53a9dec-a1d5-496f-a000-682cae2056fe'
                },
                {
                  buildHookId: '5e492384645e93a260b1e751',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-o2njr5es',
                  apiId: '7406a529-094b-48a2-add1-8cab5aaae8b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kronkake/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-o2njr5es.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
