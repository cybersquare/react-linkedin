import NewsItem from "../NewsItem/NewsItem";
import Info from "@mui/icons-material/InfoSharp";
import "./Widget.css";

function Widget(){

    const news = [
        {title:"After bitcoin surge",subtitle:"Top news, 782 readers"},
        {title:"After bitcoin surge",subtitle:"16h ago 4148 readers"},
        {title:"After bitcoin surge",subtitle:"18h ago 3627 readers"},
        {title:"After bitcoin surge",subtitle:"3h ago 47 readers"}
    ];

    return (<div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        {news.map((item,index) => <NewsItem data={item}/>)}
    </div>);
}

export default Widget;