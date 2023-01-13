import React from "react";
import Search from '@mui/icons-material/Search';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Home from '@mui/icons-material/Home';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';
import HeaderOption from "../HeaderOption/HeaderOption";
import logo from '../../logo.svg'

import "./Header.css";

const Header = ()=>{
    return(
    <div className="header">
        <div className="header__left">
            <img src={logo} alt="logo"/>
            <div className="header__search">
                <Search/>
                <input type="text"/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={Home} title="Home"/>
            <HeaderOption Icon={SupervisorAccount} title="My Network"/>
            <HeaderOption Icon={BusinessCenter} title="Jobs"/>
            <HeaderOption Icon={Chat} title="Messaging"/>
            <HeaderOption Icon={Notifications} title="Notifications"/>
            <HeaderOption avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" title="me"/>
        </div>
    </div>);
}

export default Header;