import logo from './logo_transp.png';
import './App.css';
import Button from './components/Button';
// import Error from './components/Error';
import Nav from './components/Nav';
import { getUser } from './api/apiBasicAuth';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import EditForm from './forms/EditForm';
import RegisterForm from './forms/RegisterForm';
import apiSubject from './api/apiSubject';
import apiBook from './api/apiBook';
import theme from './components/primaryTheme';
import clientBasicAuth from './api/clientBasicAuth';
import clientNoAuth from './api/clientNoAuth';
import clientTokenAuth from './api/clientTokenAuth';
import Avatar from './components/Avatar';

const my_token = "bT_zUtIDQJ9qC_0SjYQ1Uu-N8pE9nTbkBWwAL0xWe2E"

const handleAPITest = async (email, password)=>{
  const source = CancelToken.source()
  // const response_object = await getUser(email, password, source.token);
  // console.log(response_object)
  const response_object = await apiBook.get(source.token);
  console.log(response_object)
}

function App(theme) {
  return(
    <div>
      <Nav>
        <Button color="success" onClick={handleAPITest}>Test API Call</Button>
      </Nav>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <div>
          <LoginForm id="loginform">
            <Button id="registerHome">Register</Button>
          </LoginForm>
          </div>
          <p></p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        
      </div>
    </div>
  );
}

export default App;
