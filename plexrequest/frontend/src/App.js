import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './Components/Menu/Menu';
import AdminProtectedRoute from './utils/AdminProtectedRoutes';

//public route imports
import Home from './Pages/Home/Home';
import RequestNew from './Pages/RequestNew/RequestNew';
import Login from './Pages/Login/Login';

//protected route imports
import Review from './Pages/Admin/AdminReview/Review';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="pages">
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/requestNew' element={<RequestNew />} />
            <Route path='/login' element={<Login />} />

            {/* Protected routes */}
            <Route path='admin' element={
              <AdminProtectedRoute>
                <Review  />
              </AdminProtectedRoute>
            } />

            <Route path='*' element={<h1>Page not found.</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
