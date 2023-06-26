import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import Home from './pages/Home/Home';
import RequestNew from './pages/RequestNew/RequestNew';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/requestNew' element={<RequestNew />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
