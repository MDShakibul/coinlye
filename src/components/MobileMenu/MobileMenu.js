import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import { NavLink, useNavigate } from 'react-router-dom'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    }


]

const MobileMenu = ({loggedInInfo, mobailActive}) => {
    const push = useNavigate();

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="mobail-menu main_menu_list unordered_list text-uppercase" style={{ display: !mobailActive ? 'none' : '' }}>
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="menu-item menu-item-has-children active">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <NavLink onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</NavLink>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <NavLink className="active"
                                to={item.link}>{item.title}</NavLink>
                        }
                    </ListItem>
                )
            })}
            
            <ul className='MuiList-root MuiList-padding css-h4y409-MuiList-root'>
                {
                                            loggedInInfo?.walletAddress &&
										<li>
											<Link to="dashboard" className="nav-link" onClick={()=>{push('/dashboard')}}>
												<span className="nav_link_label" data-text="Dashboard">
													Dashboard
												</span>
											</Link>
										</li>
                                        }
            </ul>
        </ul>
    )
}

export default MobileMenu;