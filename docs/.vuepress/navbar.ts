import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '计算机系统',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  {
    text: '计算机网络',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  {
    text: '计算机安全',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
])
