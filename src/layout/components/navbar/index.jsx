import React, { useState, useEffect, useRef } from 'react';
import * as icon from '@ant-design/icons';
import { Menu, Layout } from 'antd';
const { Sider } = Layout
import {connect} from 'react-redux'
import routers from '@/router'
import { useNavigate,useLocation } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

function Navbar (props){
    const {collapsed} = props;
    const [openKeys,setOpenKeys] = useState([]);
    const navigate = useNavigate();
    const lcation = useLocation()

    useEffect(() => {
        setOpenKeys('/'+[lcation.pathname.split('/')[1]])
    }, []);

    return(
        <>
            <Sider collapsed={collapsed}>
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>后台管理模板</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={[openKeys]}
                    selectedKeys={[lcation.pathname]}
                    onClick={({ key }) => navigate(key)}
                    onOpenChange={(openKeys)=>{setOpenKeys(openKeys[1])}}
                    items={menuList()}
                /> 
            </Sider>
        </>
    )
}

// 循环渲染menu列表
const menuList = () => {
    let routes = routers[0].children
    return routes.map((item,index) => ({
        key:item.path,
        icon: React.createElement(icon[item.icon]),
        label: item.title,
        children:item.children === undefined ? undefined : item.children.map((item) => {
            return {
              key: item.path,
              label: item.title,
            };
          }),
    }))
}

const mapStateToProps = (state) => {
    return {
        collapsed: state.config.collapsed
    }
}

export default connect(mapStateToProps)(Navbar)