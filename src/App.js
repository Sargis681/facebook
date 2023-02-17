import { lazy, Suspense } from 'react';

import {  Route, Routes } from 'react-router-dom';
import './App.css';
const HomeWraper = lazy(() => import('./HomeWrapper/HomeWraper'));

const Login = lazy(() => import('./components/Login/Login'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const Home = lazy(() => import('./components/Home/Home'));



function App() {
  return (
    <div className="App">
      
      <Suspense fallback={<div>loading..</div>}>
        <Routes>
          <Route path='login' element={<Login />}/>
          <Route path='/'element={<HomeWraper/>}>
          <Route path='home' element={<Home/>} />
          <Route index element={<Profile/>} />
        </Route>
        </Routes>


      </Suspense>
    </div>
  );
}

export default App;
