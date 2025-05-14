import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '计算机基础',
    items: [
      { text: '计算机结构', link: '/notes/A.cs/A1.base/' }, 
      { text: '操作系统  ', link: '/notes/A.cs/A2.os/' }, 
      { text: '数据库系统', link: '/notes/A.cs/A3.database/' },
      { text: '计算机网络', link: '/notes/A.cs/A4.network/' },
    ]
  },
  {
    text: '软件工程',
    items: [
      {
        text: '开发方法',
        items: [
          { text: '开发模型', link: '/notes/B.se/B1.development/mode/' },
          { text: '编码规范', link: '/notes/B.se/B1.development/standard/' }, 
        ]
      },
      {
        text: '软件需求',
        items: [
          { text: '需求开发', link: '/notes/B.se/B2.demand/dev/' },
          { text: '需求管理', link: '/notes/B.se/B2.demand/manage/' } 
        ]
      },
      {
        text: '软件设计',
        items: [
          { text: '架构设计', link: '/notes/B.se/B3.design/design-architecture/' },
          { text: '设计模式', link: '/notes/B.se/B3.design/design-mode/' } 
        ]
      },
      {
        text: '软件测试',
        items: [
          { text: '软件测试', link: '/notes/B.se/B4.testing/quality-test/' },
        ]
      },
      {
        text: '软件维护',
        items: [
          { text: '开发模型', link: '/notes/B.se/B5.maintenance/mode/' }, 
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
  { text: '技术之外', link: '/notes/Z.outlook/'},
])
