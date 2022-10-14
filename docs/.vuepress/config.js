// const sidebarConf = require('./sidebar')
const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    // base:'/my-own-web/ ',
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            "/css/": [
                'c-aaa',
                'c-bbb',
                'c-ccc'
            ],
            "/javascript/": [
                'j-aaa',
                'j-bbb',
                'j-ccc'
            ],
          // options
        }],
        [
            '@vuepress/last-updated',
            {
              transformer: (timestamp) => {
                return moment(timestamp).format('LLLL')
              }
            }
          ]
        ],
   title:'Choices的小木屋',
   description:'Choices的反思和总结',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: 'Choices' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍' }],
      ],
      
    themeConfig: {
      lastUpdated:'更新时间',
      logo: '/assets/img/hero.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/' },
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [ 
                { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about/' },] },
              { text: 'Group2', items: [ 
                { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about/' },] }
            ]
          },
        { text: 'External', link: 'https://google.com' },
      ],   
}
}