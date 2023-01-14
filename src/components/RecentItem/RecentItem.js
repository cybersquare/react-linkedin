import "./RecentItem.css"

const RecentItem = (props)=> {
    return(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{props.topic}</p>
        </div>
    );
}

export default RecentItem;