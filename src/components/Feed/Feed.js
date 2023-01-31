import Image from '@mui/icons-material/Image';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import Create from '@mui/icons-material/Create';
import EventNote from '@mui/icons-material/EventNote';
import Subscriptions from '@mui/icons-material/Subscriptions';
import InputOption from "../InputOption/InputOption";
import "./Feed.css";
import { Avatar } from '@mui/material';
import Post from "../Post/Post"

const Feed = () => {

    let posts = [
        {name:"Shahid", description:"inting and typesetting", message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",photoUrl:""},
        {name:"Malik Sha", description:"Lorem Ipsum is simply dummy text of the", message:"",photoUrl:""},
        {name:"Vishnu Gopal", description:"printing and typesetting industry.", message:"",photoUrl:""},
        {name:"Ravi Pillai", description:" Lorem Ipsum has been the industry's", message:"",photoUrl:""},
        {name:"Menon ", description:" Lorem Ipsum has been the industry's", message:"",photoUrl:""},
        {name:"Devaraj", description:"inting and typesetting ", message:"",photoUrl:""}
    ];

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
            {
            posts.map((post,index) => <Post description={post.description} name={post.name} message={post.message} />)}
        </div>
    );
}

export default Feed;