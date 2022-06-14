import React, {createContext, useReducer, useState, useEffect} from "react";
import {listReducer, listActions} from '../reducers/listReducer';

export const AppContext = createContext();

const AppContextProvider=({children})=>{
    

    const getUserFromLS = ()=>{
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }
     const getListFromLS = ()=>{
           let list = localStorage.getItem('list')
           if (list){
               return JSON.parse(list)
           }
}

    const [user, _setUser] = useState(getUserFromLS()??{})
    const [alert, setAlert] = useState({})
    const [list, dispatch]=useReducer(listReducer,getListFromLS()??[])

     useEffect(
         ()=>{
             localStorage.setItem('list', JSON.stringify(list))
         },[list]
    )

    //this will set user and save to local storage
    const setUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }

    const values = {
        user,
        setUser,
        alert,
        setAlert,
        list,
        addToList:(book)=>{
            dispatch({type:listActions.addToList, book})
        },
        removeFromList:(book)=>{
            dispatch({type:listActions.removeFromList, book})
        },
        clearList:()=>{
            dispatch({type:listActions.clearList})}
       
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>    
    )
}

export default AppContextProvider