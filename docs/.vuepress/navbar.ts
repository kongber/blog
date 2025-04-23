import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '计算机基础',
    items: [
      { text: '计算机结构', link: '/notes/cs/architecture/' },
      { text: '操作系统', link: '/notes/cs/os/' },
      { text: '数据库', link: '/notes/cs/database/' },
      { text: '计算机网络', link: '/notes/cs/network/' },
    ]
  },
  {
    text: '软件工程',
    items: [
      {
        text: '软件设计',
        items: [
          { text: '架构设计', link: '/notes/se/design/design-architecture/' },
          { text: '设计模式', link: '/notes/se/design/design-mode/' }
        ]
      },
      {
        text: '开发方法',
        items: [
          { text: '编程语言', link: '/notes/se/method/dev-language/' },
          { text: '编码规范', link: '/notes/se/method/dev-standard/' },
        ]
      },
      {
        text: '质量保证',
        items: [
          { text: '软件测试', link: '/notes/se/quailty/quality-test/' },
        ]
      },
      {
        text: '项目管理',
        items: [
          { text: '开发模型', link: '/notes/se/manager/mode/' },
        ]
      }
    ]
  },
  {
    text: '前沿技术',
    items: [
      { text: '云计算', link: '/notes/tech/cloud-computing/' },
      { text: '虚拟化', link: '/notes/tech/virtualization/' },
      { text: '物联网', link: '/notes/tech/iot/' },
      { text: '人工智能', link: '/notes/tech/ai/' }
    ]
  },
  {
    text: '系统安全',
    items: [
      // { text: '安全基础', link: '/notes/sec/basics/' },
      // { text: '身份认证', link: '/notes/sec/authentication/' },
      // { text: '访问控制', link: '/notes/sec/access-control/' },
      // { text: '数据保护', link: '/notes/sec/data-protection/' },
      { text: '密码学', link: '/notes/sec/cryptology/'},
      { text: '网络安全', link: '/notes/sec/network/'},
      { text: '标准规范', link: '/notes/sec/standards/'}
      // { text: '应用安全', link: '/notes/sec/application/' },
      // { text: '安全运维', link: '/notes/sec/operations/' },
      // { text: '安全合规', link: '/notes/sec/compliance/' }
    ]
  },
])
