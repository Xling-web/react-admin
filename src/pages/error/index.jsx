import React from 'react'
import { useLocation } from 'react-router-dom'
import icon from '../../assets/images/403.svg'

function Error(){
    const lcation = useLocation(),
          title = lcation.pathname.split('/')[2]

    return(
        <>
            {title}
            <img src={icon} alt="" style={{width:'100px',height:"100px"}} />
        </>
    )
}

export default Error