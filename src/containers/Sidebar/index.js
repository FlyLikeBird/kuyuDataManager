import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Button, Icon } from 'antd';
import { actions } from '../../actions/menuActions'
import style from './sidebar.style.css'

const { SubMenu } = Menu;
const { toggle_collapse, change_current } = actions;

class Sidebar extends PureComponent {
    
    componentDidMount(){
        //console.log(this.props.location);
        var pathname = this.props.location.pathname;
        this.props.onChangeMenu(pathname.substring(1,pathname.length));
    }

    render(){
        //console.log(this.props);
        var { menus, currentMenu, collapsed, onToggleCollapsed } = this.props;
        console.log(currentMenu);
        return (
            <div className={style.container} style={{ width:collapsed ? '40px':'200px'}}>
                <Menu 
                    theme="dark" 
                    className="sidebar"
                    onClick={(e)=>this.props.onChangeMenu(e.key)}
                    selectedKeys={[currentMenu]} 
                    defaultOpenKeys={['product']}
                    mode="inline"
                    inlineCollapsed={collapsed}
                >
                    {
                        menus.map(menu=>(
                            <SubMenu
                                key={menu.key}
                                title={menu.title}
                            >
                                {
                                    menu.subMenu.map(sub=>(
                                        <Menu.Item key={sub.path}><Link to={`/${sub.path}`}>{sub.text}</Link></Menu.Item>
                                    ))
                                }
                            </SubMenu>
                        ))
                    }
                </Menu>
                <Button type="primary" className={style.collapse} onClick={()=>onToggleCollapsed()}><Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} /></Button>
            </div>
        )
    }
}

Sidebar.propTypes = {
    menus:PropTypes.array.isRequired,
    currentMenu:PropTypes.string.isRequired,
    collapsed:PropTypes.bool.isRequired,
    onToggleCollapsed:PropTypes.func.isRequired,
    onChangeMenu:PropTypes.func.isRequired
};

function mapStateToProps(state) {
    
    return {
        menus:state.menus.data,
        currentMenu:state.menus.currentMenu,
        collapsed:state.menus.collapsed
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleCollapsed:bindActionCreators(toggle_collapse, dispatch),
        onChangeMenu:bindActionCreators(change_current, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

