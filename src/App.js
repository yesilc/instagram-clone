import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';

const App = () => {
    
    const user = useSelector(state => state.auth.user)
    const showRoutes = useRoutes(routes)
    
    if(user === null){
        return(
            <Loader></Loader>
        )
    }

    console.log(user.fullName)
    return( //user varsa döndürüyor
        <>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre>  kullanıcı datası kontrol*/}
            <Toaster position='top-right'></Toaster>
            {showRoutes}
        </>
    )
}

export default App