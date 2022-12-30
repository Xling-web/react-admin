import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import router from '@/router'
import './App.css';
import 'antd/dist/reset.css';

function App() {

  return (
    <>
      <Routes>
        {
          router.map(router => renderRouter(router))
        }
        <Route path="*" element={<Navigate to="/error/404" />} />;
      </Routes>
    </>
  );
}

function renderRouter(router) {
    // 如果遇到子路由，则调用自身的函数遍历子路由
    if (router.children) {
      return (
        <Route path={router.path} element={<router.component/>} key={router.path}>
          {router.children.map(item => renderRouter(item))}
        </Route>
      )
    }
    // 如果遇到重定向，使用<Navigate to='' />直接跳转
    return <Route key={router.path} path={router.path} element={<router.component/>} />;
}

export default App;
