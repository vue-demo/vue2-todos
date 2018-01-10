import App from '../App.vue'

export default[
  {
    path: '/',
    redirect:{
      name:'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: App.components.Home
  },
  {
    path: '/photo',
    name: 'photo',
    component: App.components.Photo
  },
  {
    path: '/list',
    name: 'list',
    component: App.components.List
  }
]
