/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const musicRouter = {
  path: '/music',
  component: Layout,
  redirect: '/music/page',
  alwaysShow: true, // will always show the root menu
  name: 'Music',
  meta: {
    title: 'music',
    icon: 'list'
  },
  children: [
    {
      path: 'album',
      component: () => import('@/views/music/album'),
      name: 'Album',
      meta: {
        title: 'album'
      }
    },
    {
      path: 'music',
      component: () => import('@/views/music/music'),
      name: 'Music',
      meta: {
        title: 'music'
      }
    }
  ]
}

export default musicRouter
