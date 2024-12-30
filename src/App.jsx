import config from './config/config';
import './App.css'
import { useEffect, useState } from 'react';
import authService from './appwrite/auth';
import { useDispatch } from 'react-redux';
import { Header,Footer } from './component';
import { Outlet } from 'react-router-dom';
import {login,logout} from './feature/authSlice'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{

    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));

      }else{
        dispatch(logout());
      }

    }).finally(()=>{
      setLoading(false);
    })
  },[])
 
  return !loading ? (
    <div className='bg-gray-700'>
      <div>
        <Header />
        <main>
        <Outlet />
        </main>
        
        <Footer />

      </div>

    </div>

  ): null;
}

export default App
