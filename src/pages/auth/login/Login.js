

import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";
import axiosApiHandler from "../../../utils/axios/Axios";
import GrandParent from "../../../components/context-api/Context";
import React from "react";


const StoryTellerContext = React.createContext("Light")

 function Login(){

    async function login(){
        console.log("Callig axios handler");
        const response =await axiosApiHandler({
            method:"get",
            url: "people/1" // it is still working without "api" string in URL
        });
        console.log("response.data");
        console.log(response.data);

    }
    login();
    
    return(
        <ErrorBoundary>
            
            <StoryTellerContext.Provider value="this is new value">
                <GrandParent/>
            </StoryTellerContext.Provider>
        </ErrorBoundary>
        
        // <ErrorBoundary>
        //     Login
        //     <button onClick={login}>Click here</button>
        // </ErrorBoundary>
    );
}



function BadComponent(){
    return(
        {
            name:"Cybersquare"
        }
    );
}

const comp = {Login, StoryTellerContext}

export default comp;