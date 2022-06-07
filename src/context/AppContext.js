// import {createContext, useState} from "react";

// export const AppContext = createContext();

// const AppContextProvider=({children})=>{
    

//     const getUserFromLS = ()=>{
//         let user = localStorage.getBook('user')
//         if (user){
//             return JSON.parse(user)
//         }
//     }

//     const [user, _setUser] = useState(getUserFromLS())

//     //this will set user and save to local storage
//     const setUser = (user)=>{
//         localStorage.setItem('user', JSON.stringify(user))
//         _setUser(user)
//     }

//     const values = {
//         user,
//         setUser
//     }

//     return (
//         <AppContext.Provider value={values}>
//             {children}
//         </AppContext.Provider>    
//     )
// }

// export default AppContextProvider