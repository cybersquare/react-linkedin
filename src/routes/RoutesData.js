import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";

const RouteData = {
    login: {
        path: "/",
        component: Login,
        menuText:"Login",
        isPrivate: false
    },
    signup: {
        path: "/signup",
        component: Signup,
        menuText:"Sign Up",
        isPrivate: false
    },
    dashboard: {
        path: "/feed",
        component: Dashboard,
        menuText:"Feed",
        isPrivate: false
    },
}

export default RouteData;