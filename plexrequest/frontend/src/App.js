import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import Home from './pages/Home/Home';
import RequestNew from './pages/RequestNew/RequestNew';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/requestNew' element={<RequestNew />} />
            <Route path='/login' element={<Login />} />

            <Route path='*' element={<h1>Page not found.</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
