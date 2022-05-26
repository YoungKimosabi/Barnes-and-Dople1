import logo from './logo_transp.png';
import './App.css';
import Button from './components/Button';
// import Error from './components/Error';
import Nav from './components/Nav';

import {getUser} from './api/apiBasicAuth';
import {CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import EditForm from './forms/EditForm';
import RegisterForm from './forms/RegisterForm';
// import * as React from 'react';
// import ReactDOM from 'react-dom';
// import { red } from '@mui/material/colors';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#2C2927",
//     },
//     secondary: {
//       main: "#007A7A",
//     },
//     tertiary: {
//       main: "#C9B79C",
//     },
//   },
// });

// function App() {
//   return <ThemeProvider theme={theme}>...</ThemeProvider>;
// }


// const handleAPITest=async ()=>{
//   const source = CancelToken.source()
//   const response_object = await getUser("ADD EMAIL HERE", "ADD PASSWORD HERE", source.token)

// }

function App() {
  return(
    <div>
      <Nav></Nav>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
          <LoginForm id="loginform"></LoginForm>
          <RegisterForm id="registerform"></RegisterForm>
          <EditForm id="editform"></EditForm>
          </div>
          <p></p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
