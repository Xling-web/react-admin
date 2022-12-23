import { lazy } from 'react'
import loadComp from '../components/nprogress'

const router = [
  {
    path: '/',
    redirect:"/",
    component: loadComp(lazy(() => import('@/layout/index'))),
    children:[
      {
        path: '/',
        title:"首页",
        icon:"DesktopOutlined",
        component: loadComp(lazy(() => import('@/pages/home'))),
      },
      {
        path: '/ceshi',
        title:"测试",
        icon:"ExperimentOutlined",
        component: loadComp(lazy(() => import('@/pages/promise'))),
        children:[
          {
            path: '/ceshi/promise',
            title:"测试子",
            icon:"ExperimentOutlined",
            component: loadComp(lazy(() => import('@/pages/promise')))
          }
        ]
      },
      {
        path: '/error',
        title:"错误页面",
        icon:"CloseCircleOutlined",
        component: loadComp(lazy(() => import('@/pages/error'))),
        children:[
          {
            path: '/error/403',
            title:"403",
            icon:"CloseCircleOutlined",
            component: loadComp(lazy(() => import('@/pages/error')))
          },
          {
            path: '/error/404',
            title:"404",
            icon:"CloseCircleOutlined",
            component: loadComp(lazy(() => import('@/pages/error')))
          },
          {
            path: '/error/500',
            title:"500",
            icon:"CloseCircleOutlined",
            component: loadComp(lazy(() => import('@/pages/error')))
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    component: loadComp(lazy(() => import('@/pages/login')))
  }
]

export default router