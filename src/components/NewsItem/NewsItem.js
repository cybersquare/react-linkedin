import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import "./NewsItem.css";
import React from 'react';

function NewsItem(props) {
    return(<div className="widgets__article">
        <div className='widgets__article_left'>
            <FiberManualRecord style={{width:10, height:10,color:'#636363'}}/>
        </div>
        <div className='widgets__article_right'>
            <h4>{props.data.title}</h4>
            <p>{props.data.subtitle}</p>
        </div>
    </div>);
}

export default NewsItem;