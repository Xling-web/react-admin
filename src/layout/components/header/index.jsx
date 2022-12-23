import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import {connect} from "react-redux"

class Head extends React.Component {

    render(){
        const { collapsed, MENUFOLD } = this.props
        return(
            <>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    style:{fontSize: '18px'},
                    onClick: () => {MENUFOLD()},
                })}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collapsed: state.config.collapsed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        MENUFOLD: () => { dispatch({type:'MENUFOLD'}) }
    }
}


export default connect( mapStateToProps , mapDispatchToProps )(Head)