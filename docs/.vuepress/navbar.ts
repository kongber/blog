import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '计算机基础',
    items: [
      { text: '计算机结构', link: '/notes/A.cs/A1.architecture/' }, 
      { text: '操作系统',  link: '/notes/A.cs/A2.os/' }, 
      { text: '数据库',    link: '/notes/A.cs/A3.database/' },
      { text: '计算机网络', link: '/notes/A.cs/A4.network/' },
    ]
  },
  {
    text: '软件工程',
    items: [
      {
        text: '软件设计',
        items: [
          { text: '架构设计', link: '/notes/B.se/B1.design/design-architecture/' },
          { text: '设计模式', link: '/notes/B.se/B1.design/design-mode/' } 
        ]
      },
      {
        text: '开发方法',
        items: [
          { text: '编程语言', link: '/notes/B.se/B2.method/dev-language/' },
          { text: '编码规范', link: '/notes/B.se/B2.method/dev-standard/' }, 
        ]
      },
      {
        text: '质量保证',
        items: [
          { text: '软件测试', link: '/notes/B.se/B3.quailty/quality-test/' },
        ]
      },
      {
        text: '项目管理',
        items: [
          { text: '开发模型', link: '/notes/B.se/B4.manager/mode/' }, 
        ]
      }
    ]
  },
  {
    text: '系统安全',
    items: [
      // { text: '安全基础', link: '/notes/C.sec/basics/' }, 
      // { text: '身份认证', link: '/notes/C.sec/authentication/' }, 
      // { text: '访问控制', link: '/notes/C.sec/access-control/' }, 
      // { text: '数据保护', link: '/notes/C.sec/data-protection/' }, 
      { text: '密码学', link: '/notes/C.sec/C1.cipher/'}, 
      { text: '网络安全', link: '/notes/C.sec/C2.network/'}, 
      { text: '标准规范', link: '/notes/C.sec/C3.standards/'}
      // { text: '应用安全', link: '/notes/C.sec/application/' },
      // { text: '安全运维', link: '/notes/C.sec/operations/' },
      // { text: '安全合规', link: '/notes/C.sec/compliance/' }
    ]
  },
  { text: '技术之外', link: '/notes/E.outlook/'},
])
