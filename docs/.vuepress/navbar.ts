import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '计算机基础',
    items: [
      { text: '计算机组成', link: '/notes/cs/computer-organization/' },
      { text: '操作系统', link: '/notes/cs/operating-system/' },
      { text: '数据库', link: '/notes/cs/database/' },
      { text: '计算机网络', link: '/notes/cs/computer-network/' }
    ]
  },
  {
    text: '软件工程',
    items: [
      { text: '开发方法', link: '/notes/se/development-methods/' },
      { text: '系统设计', link: '/notes/se/system-design/' },
      { text: '架构模式', link: '/notes/se/architecture-patterns/' },
      { text: '代码质量', link: '/notes/se/code-quality/' }
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
      { text: '网络安全', link: '/notes/security/network-security/' },
      { text: '系统安全', link: '/notes/security/system-security/' },
      { text: '标准规范', link: '/notes/security/standards/' }
    ]
  },
])
