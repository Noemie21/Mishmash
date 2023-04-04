import React, { createContext, useState, useEffect } from 'react';
import { getLikes } from '../Services/API';

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    let [user, setUser] = useState([])
    let [likes, setLikes] = useState([])
    function refresh() {
        getLikes().then((data) => {
            setLikes(data.like)  
        })

    }

    useEffect(() => {
  
        // getUser().then((data) => {
        //     setUser(data) 
        // })
        getLikes().then((data) => {
            setLikes(data.like)  
        })
    }, [])

    return (
        <StoreContext.Provider value={{ user, setUser, likes, setLikes, refresh }} >
            {props.children}
        </StoreContext.Provider>
    )

}