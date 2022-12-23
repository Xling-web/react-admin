import React, { Component } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

//子组件
function Home () {
  const num = useSelector((state) => {
    return state
  })
  const dispatch = useDispatch()

  const isAdd = ()=>{
    dispatch({ type: "add" })
  }

  return (
    <div>
      主页
      <Button type="primary" onClick={isAdd}>Primary Button</Button>
    </div>
  );
}

export default Home
