export default [
  {
    path: '/',
    name: 'home',
    component: require('components/HomeView')
  },
  {
    path: '/files',
    name: 'files',
    component: require('components/FilesView')
  },
  {
    path: '/settings',
    name: 'settings',
    component: require('components/SettingsView')
  },
  {
    path: '/conversational',
    name: 'conversational',
    component: require('components/ConversationalView')
  },
  {
    path: '/probe',
    name: 'probe',
    component: require('components/ProbeView')
  },
  {
    path: '/offsets',
    name: 'offsets',
    component: require('components/OffsetsView')
  },
  {
    path: '/status',
    name: 'status',
    component: require('components/StatusView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
