import { useEffect, useState } from 'react'
import { fetchData } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getAPiconfig } from './store/homeSlice';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Search from './Pages/Search/Search';
import Detail from './Pages/Details/Detail';

import Explore from './Pages/Explore/Explore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';



const appRouter=createBrowserRouter([{
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
    children:[
      {
         path:'/',
         element:<Banner/>

      },
      {
      path:'/:mediaType/:id',
      element:<Detail/>,

    },{
      path:'/search/:query',
      element:<Search/>
    }
    ,{
      path:'/explore/:mediaType',
      element:<Explore/>
    }
  ]
}])


function App() {
   
  const dispatch=useDispatch();
  const url=useSelector((store)=>store.home.url);
console.log(url);
  useEffect(()=>{
    fetchDataapi();
  },[])
  const fetchDataapi=()=>{
    fetchData("/movie/popular").then((res)=>{
    
     dispatch(getAPiconfig(res));
    })
  }

  return (
    <div className="App">
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
