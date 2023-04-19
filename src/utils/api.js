
const BASE_URL="https://api.themoviedb.org/3";
const TMBD_TOKEN=import.meta.env.VITE_APP_FILMY_TB;
const headers={
    Authorization:"bearer "+TMBD_TOKEN,

};
export const fetchData=async(url,params)=>{
const options={
    headers:headers,
    params:params
}
    try{
        const data=await fetch(BASE_URL+url,options)
        const response= await data.json();
        return response;

    }catch(err){
        console.log(err);
        return err;

    }
}