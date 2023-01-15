import { Avatar } from "@mui/material";
import "./Sidebar.css";
import RecentItem from "../RecentItem/RecentItem";

const Sidebar = ()=> {

    const keywords = [
        'js',
        'react',
        'html'
      ];


    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://shorturl.at/hiwJY" alt="background"/>
                <Avatar className="sidebar_avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
                <h2>Muhammad</h2>
                <h4>shahid@medisheets.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,777</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className="sidebar__statNumber">2,123</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {keywords.map(keyword => <RecentItem topic={keyword}/>)}
            </div>
        </div>
    );
}

export default Sidebar;