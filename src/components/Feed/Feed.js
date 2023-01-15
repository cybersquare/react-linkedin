import Image from '@mui/icons-material/Image';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import Create from '@mui/icons-material/Create';
import EventNote from '@mui/icons-material/EventNote';
import Subscriptions from '@mui/icons-material/Subscriptions';
import InputOption from "../InputOption/InputOption";
import "./Feed.css";
import { Avatar } from '@mui/material';

const Feed = () => {
    return(
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <form>
                        <Avatar src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'/>
                        <input type="text" placeholder='Start a post'/>
                        {/* <button>Send</button> */}
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title="Photo" Icon={Image} color="#378fe9"/>
                    <InputOption title="Video" Icon={Subscriptions} color="#5f9a41"/>
                    <InputOption title="Event" Icon={EventNote} color="#a871e8"/>
                    <InputOption title="Write Article" Icon={CalendarViewDay} color="#e16744"/>
                </div>
            </div>
        </div>
    );
}

export default Feed;