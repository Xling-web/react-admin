import React,{ lazy, Suspense } from 'react';
import { Router, Routes, Route, Navigate } from "react-router-dom";
import router from '@/router'
import './App.css';
import 'antd/dist/reset.css';
import NProgress from './components/nprogress'

function App() {
  return (
    <>
        <Routes>
          {
            router.map((router, index) => renderRouter(router, index))
          }
        </Routes>
    </>
  );
}

function renderRouter(router, index) {
    // 如果遇到子路由，则调用自身的函数遍历子路由
    if (router.children) {
      return (
          <Route path={router.path} element={<router.component/>} key={router.path}>
            {router.children.map(item => renderRouter(item))}
          </Route>
      )
    }
    // 如果遇到重定向，使用<Navigate to='' />直接跳转
    return <Route key={router.path} path={router.path} element={router.index ? <Navigate to={router.redirect}/> : <router.component/>} index={router.index} />;
}

export default App;
