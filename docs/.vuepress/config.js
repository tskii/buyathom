module.exports = {
  base: '/buyathom/',
  title: 'buyathom',
  description: 'Vuepress blog demo',
  head: [
    ['link', { rel: 'icon', href: '/vue-logo.png' }]
  ],
  themeConfig: {
  	// 你的GitHub仓库
    repo: 'https://github.com/tskii/buyathom',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
  	nav: [
  		{ text: 'Home', link: '/' },
  		{ text: 'FirstBlog', link: '/blog/FirstBlog.md' }
  	],
  	sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客']
    ]
  }
}