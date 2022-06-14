import logo from './logo_transp.png';
import './App.css';
// import SpeedDial from './components/SpeedDial';
import NewNav from './components/NewNav';
import OneBook from './components/OneBook';
import AllBooks from './components/AllBooks';
import {Route, Routes} from 'react-router-dom'
import React, {useContext} from 'react'
import {AppContext} from './context/AppContext';
import LoginView from './views/LoginView'
import LogoutView from './views/LogoutView'
import ListPageView from './views/ListPageView'
import RegisterView from './views/RegisterView'
import EditProfileView from './views/EditProfileView'
import Box from '@mui/material/Box'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  const {user} = useContext(AppContext)
  return(
    <>
      <NewNav>
        <Box sx={{minHeight:'90vh'}}>
          <div onClick={()=>navigate('/')}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </header>
            <div display="flex"></div>
            <p></p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
            </a>    
          </div>
          <Routes>
            <Route path="/" element={<AllBooks/>}/>
            <Route path="/list" element={<ListPageView/>}/>
            <Route path="/search" element={<AllBooks/>}/>
            <Route path="/search/:id" element={<OneBook/>}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/logout" element={<LogoutView/>}/>
            <Route path="/register" element={<RegisterView/>}/>
            <Route path="/editprofile" element={<EditProfileView/>}/>
          </Routes>
        </Box>
      </NewNav>
    </>
  );
}

export default App;
