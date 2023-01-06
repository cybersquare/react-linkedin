import axios from "axios";
import { baseUrl } from "../../constants/constant";


const axiosInstance = axios.create({ // Instnce of axios
    baseURL: `${baseUrl}/api/`,
    headers: {
        "Content-Type": "application/json"
    }
});

// interceptor for request
axiosInstance.interceptors.request.use(
    function(config,event){
        const token = JSON.parse(localStorage.getItem("user"))
        config.headers.accesstoken = token;
        return config;
    },
    function(error){
        console.log(error);
    }
)

// interceptor for response
axiosInstance.interceptors.response.use(
    function(response){
        console.log(response);
        return response;
    },
    function(error){
        console.log(error);
    }
)


const axiosApiHandler = async(args)=>{
   const option = {url:"",data:{},method:"post",...args}
   
    const response  = await axiosInstance({
        method:option.method,
        url:option.url,
        data:option.data,
        headers:option.headers,
        params:option.params
    });
    console.log("Response in axiosInstance");
    console.log(response);
    return response;

}


export default axiosApiHandler;




