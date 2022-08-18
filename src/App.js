import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';

const App = () => {
    
    const user = useSelector(state => state.auth.user)
    const showRoutes = useRoutes(routes)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => { //user'ın gelmesini 2 saniye bekliyor gelmez ise login sayfasına
      let timeout = setTimeout(() =>{
        setRedirect(true)
      },2000)
        return () =>{
            clearTimeout(timeout)
        }
    }, [])
    
    
    if(!user && !redirect){
        return(
            <Loader></Loader>
        )
    }
    return( //user varsa döndürüyor
        <>
            <Toaster position='top-right'></Toaster>
            {showRoutes}
        </>
    )
}

export default App