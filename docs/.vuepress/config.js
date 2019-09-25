module.exports = {
    title: 'crisri\'s blog' ,
    description: 'Just playing around',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ],
      sidebar: [
        '/',
        '/page-a',
        ['/page-b', 'Explicit link text']
      ]
    }
  }