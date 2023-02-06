import Avatar from "@mui/material/Avatar";
import "./HeaderOption.css";
import React from 'react';

const HeaderOption = ({avatar,Icon,title,isSelected}) => {
    return(
    <div className={isSelected?"headerOption selected":"headerOption"}>
        {Icon && <Icon/>}
        {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
        <h3 className="headerOption__title">{title}</h3>
    </div>);
}

export default HeaderOption;