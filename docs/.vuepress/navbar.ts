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
    text: '系统分析',
    items: [
      {
        text: '总览',
        items: [
          { text: '考前总览', link: '/notes/B.sa/' },
          { text: '高频计算题', link: '/notes/B.sa/B18.calc/' },
        ]
      },
      {
        text: '分析与设计',
        items: [
          { text: '系统规划', link: '/notes/B.sa/B1.planning/' },
          { text: '需求工程', link: '/notes/B.sa/B2.requirement/' },
          { text: '系统设计', link: '/notes/B.sa/B3.design/' },
          { text: '软件工程', link: '/notes/B.sa/B4.engineering/' },
          { text: '架构设计', link: '/notes/B.sa/B5.architecture/' },
        ]
      },
      {
        text: '质量与项目',
        items: [
          { text: '软件测试', link: '/notes/B.sa/B6.testing/' },
          { text: '运行维护', link: '/notes/B.sa/B7.maintenance/' },
          { text: '系统可靠性', link: '/notes/B.sa/B8.reliability/' },
          { text: '项目管理', link: '/notes/B.sa/B9.project/' },
        ]
      },
      {
        text: '综合知识',
        items: [
          { text: '企业信息化', link: '/notes/B.sa/B10.enterprise/' },
          { text: '组成原理', link: '/notes/B.sa/B11.computer/' },
          { text: '计算机网络', link: '/notes/B.sa/B12.network/' },
          { text: '操作系统', link: '/notes/B.sa/B13.os/' },
          { text: '数据库系统', link: '/notes/B.sa/B14.database/' },
          { text: '信息安全', link: '/notes/B.sa/B15.security/' },
          { text: '法律法规', link: '/notes/B.sa/B16.law/' },
          { text: '嵌入式系统', link: '/notes/B.sa/B17.embedded/' },
        ]
      },
    ]
  },
  {
    text: '系统安全',
    items: [
        {
          text: '密码学',
          items: [
            { text: '加解密算法', link: '/notes/C.safe/C1.cipher/algorithm/' },
            { text: 'PKI 体系', link: '/notes/C.safe/C1.cipher/pki/' }, 
          ]
        },
        {
          text: '网络安全',
          items: [
            { text: 'Web 安全', link: '/notes/C.safe/C2.network/attack/' },
          ]
        },
        {
          text: '安全合规',
          items: [
            { text: '密码标准', link: '/notes/C.safe/C3.standards/algorithm/' },
            { text: '法律法规', link: '/notes/C.safe/C3.standards/regulation/' },
            
          ],  
        },
      // { text: '安全基础', link: '/notes/C.sec/basics/' }, 
      // { text: '身份认证', link: '/notes/C.sec/authentication/' }, 
      // { text: '访问控制', link: '/notes/C.sec/access-control/' }, 
      // { text: '数据保护', link: '/notes/C.sec/data-protection/' }, 
      // { text: '密码学', link: '/notes/C.safe/C1.cipher/'}, 
      // { text: '网络安全', link: '/notes/C.safe/C2.network/'}, 
      // { text: '标准规范', link: '/notes/C.safe/C3.standards/'}
      // { text: '应用安全', link: '/notes/C.sec/application/' },
      // { text: '安全运维', link: '/notes/C.sec/operations/' },
      // { text: '安全合规', link: '/notes/C.sec/compliance/' }
    ]
  },
  { text: '技术之外', link: '/notes/Z.outlook/'},
])
