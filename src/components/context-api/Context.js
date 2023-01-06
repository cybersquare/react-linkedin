import { useContext } from "react";
import Login from "../../pages/auth/login/Login";

function GrandParent(){
    return(<Parent story="Once upon a time..."/>)
}

function Parent(props){
    return(<Child story={props.story}/>)
}


function Child(props){
    // return(<div><h1>History from gradpa</h1>{props.story}</div>);
    const val = useContext(Login.StoryTellerContext)
    return(
        <div><h1>History from gradpa</h1>{val}</div>
    )

}


export default GrandParent;