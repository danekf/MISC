import {useState, useEffect} from "react";
import './login.css';

//redux testing
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../Redux/Slice/userSlice';




const Login = () => { 

  const dispatch = useDispatch();

  const [pageState, setPageState] = useState({
    username: '',
    password: '',
  });

  

  const updateState = (event) => {
    setPageState({
      ...pageState,
      [event.target.name]: event.target.value,
    })
  }


  const submitForm = (event) => {
      event.preventDefault();
      dispatch(setUser({
        username: pageState.username,
        isAdmin: true,
      }));

  }
  
  return (
      <div className="loginContainer">
      <h2>Login to Plex Request</h2>
      <form>
          <input type="text" value={pageState.username} title='Enter title' name='username' placeholder='Username' onChange={(event) => updateState(event)} required/> <br/>
          <input type='password' value={pageState.password} title='Enter password.' name='password' placeholder= 'Password' onChange={(event) => updateState(event)}></input> <br/>
          <button onClick={event => submitForm(event)}>Submit Request</button>
      </form>
      </div>
  );
}
export default Login;