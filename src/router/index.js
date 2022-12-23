import { lazy } from 'react'

const router = [
  {
    path: '/',
    redirect:"/",
    component: lazy(() => import('@/layout/index')),
    children:[
      {
        path: '/',
        title:"首页",
        icon:"DesktopOutlined",
        component: lazy(() => import('@/pages/home')),
      },
      {
        path: '/ceshi',
        title:"测试",
        icon:"ExperimentOutlined",
        component: lazy(() => import('@/pages/promise')),
        children:[
          {
            path: '/ceshi/promise',
            title:"测试子",
            icon:"ExperimentOutlined",
            component: lazy(() => import('@/pages/promise'))
          }
        ]
      },
      {
        path: '/error',
        title:"错误页面",
        icon:"CloseCircleOutlined",
        component: lazy(() => import('@/pages/error'))
      },
    ]
  },
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
  }
]

export default router