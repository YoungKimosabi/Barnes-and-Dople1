import logo from './logo_transp.png';
import './App.css';
import Button from './components/Button';
// import Error from './components/Error';
import { getUser } from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
// import LoginForm from './forms/LoginForm';
// import EditForm from './forms/EditForm';
// import RegisterForm from './forms/RegisterForm';
// import apiSubject from './api/apiSubject';
// import apiBook from './api/apiBook';
// import theme from './themes/primaryTheme';
// import clientBasicAuth from './api/clientBasicAuth';
// import clientNoAuth from './api/clientNoAuth';
// import clientTokenAuth from './api/clientTokenAuth';
// import Avatar from './components/Avatar';
// import SubjectBar from './components/SubjectBar';
// import SpeedDial from './components/SpeedDial';
// import Select from './components/SelectSubject';
import NewNav from './components/NewNav';
// import SelectBook from './components/SelectBook';
// import ListBook from './components/list/ListBook';
import OneBook from './components/OneBook';
import UserList from './components/list/UserList';
import AllBooks from './components/AllBooks';

const my_token = "bT_zUtIDQJ9qC_0SjYQ1Uu-N8pE9nTbkBWwAL0xWe2E"

const handleAPITest = async (email, password)=>{
  const source = CancelToken.source()
  const response_object = await getUser(email, password, source.token);
  // console.log(response_object)
  // const response_object = await apiBook.del(my_token, 6, source.token);
  console.log(response_object)
}

function App(theme) {
  return(
    <div>
      <NewNav>
        {/* <Button color="success" onClick={handleAPITest}>Test API Call</Button> */}
      </NewNav>
      
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      {/* <OneBook></OneBook> */}
      {/* <AllBooks></AllBooks> */}
      {/* <UserList></UserList> */}
    </div>
  );
}

export default App;
