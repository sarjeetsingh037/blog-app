import React, { useContext } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Single from './pages/Single';
import Write from './pages/Write';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopBar from './components/TopBar';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
   <BrowserRouter>
   <TopBar />
    <Routes>
        <Route path='/'>
            <Route index element={user ? <Home />:<Register />} />
            {/* <Route index element={<Home  />} /> */}
            <Route path='login' element={user ?<Home />:<Login />} />
            <Route path='register' element={user ? <Home />:<Register />} />
            <Route path='write' element={user ? <Write />:<Register />} />
            <Route path='settings' element={user ? <Settings />:<Register />} />
            <Route path='post/:postId' element={user ? <Single />:<Register />} />
        </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
