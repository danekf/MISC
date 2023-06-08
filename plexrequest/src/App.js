import logo from './logo.svg';
import './App.css';

console.log(process.env)
function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_P_CLUSTER_USERNAME}
      <br/>
      {process.env.REACT_APP_P_CLUSTER_PASSWORD}
    </div>
  );
}

export default App;
