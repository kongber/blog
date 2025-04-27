// import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// const csNote = defineNoteConfig({
//   dir: 'cs',
//   link: '/notes/cs',
//   sidebar: ['', 'architecture', 'database', 'network', 'os']
// })

// const seNote = defineNoteConfig({
//   dir: 'se',
//   link: '/notes/se',
//   sidebar: ['', 'design', 'manager', 'method', 'quality']
// })

// const secNote = defineNoteConfig({
//   dir: 'sec',
//   link: '/notes/sec',
//   sidebar: ['', 'cipher', 'network', 'standards', 'system']
// })

// const techNote = defineNoteConfig({
//   dir: 'tech',
//   link: '/notes/tech',
//   sidebar: ['', 'ai', 'cloud-computing', 'iot', 'virtualization']
// })

// const outlookNote = defineNoteConfig({
//   dir: 'outlook',
//   link: '/notes/outlook',
//   sidebar: ['', 'future-tech']
// })

// export const notes = defineNotesConfig({
//   dir: 'notes',
//   link: '/',
//   notes: [csNote, seNote, secNote, techNote, outlookNote],
// })

import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote],
})
