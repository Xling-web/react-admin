import React from 'react'
import { useLocation } from 'react-router-dom'
import { Result } from 'antd'
import './index.scss'

function Error(){
    const lcation = useLocation(),
          title = lcation.pathname.split('/')[2],
          errTitle = {403:"抱歉，你无权访问该页面",404:"抱歉，你访问的页面不存在",500:"抱歉，服务器出错了"}
    
    return(
        <>
            <div className="fathar">
            <Result
                className='wrapper'
                status={title}
                title={title}
                subTitle={errTitle[title]}
            />
            </div>
        </>
    )
}

export default Error