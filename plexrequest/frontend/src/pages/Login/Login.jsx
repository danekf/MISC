import {useState, useEffect} from "react";
import './login.css';


import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const updateState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }


  const submitForm = (event) => {
      event.preventDefault();
  }
  return (
      <div className="loginContainer">     
      <h2>Login to Plex Request</h2>
      <form>
          <input type="text" value={state.username} title='Enter title' name='username' placeholder='Username' onChange={(event) => updateState(event)} required/> <br/>
          <input type='text' value={state.password} title='Enter password.' name='year' placeholder= 'Password' onChange={(event) => updateState(event)}></input> <br/>
          <button onClick={event => submitForm(event)}>Submit Request</button>
      </form>
      </div>
  );
}
export default Login;