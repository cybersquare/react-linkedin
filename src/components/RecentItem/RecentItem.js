import "./RecentItem.css";
import React from 'react';

const RecentItem = (props)=> {
    return(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p  key={props.index}>{props.topic}</p>
        </div>
    );
}

export default RecentItem;