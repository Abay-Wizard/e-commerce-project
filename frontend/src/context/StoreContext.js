import {createContext,useState,useEffect} from 'react'
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
    const url ='http://localhost:5000'
    const [token,setToken] =useState('')
    const values={
        url,
        token,
        setToken
    }
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
    },[])
    return (
        <StoreContext.Provider value={values}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider