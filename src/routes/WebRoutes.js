import { Route, Routes } from "react-router-dom"
import RouteData from "./RoutesData";
import React from 'react';

const WebRoutes = ()=>{
    return(
        <Routes>
        {
            Object.keys(RouteData).map((routeName, index)=>{
                let route = RouteData[routeName];
                return(<Route key={`web-route${index}`} path={route.path} element={<route.component/>}/>);
            })
        }
        </Routes>
    );
}

export default WebRoutes;