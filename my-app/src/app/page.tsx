"use client";

import Header from '../components/Header'
import Navbarr from '@/components/Navbarr';
import Navbarr2 from '@/components/Navbarr2';
import Main from '../components/Main'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/App.css'




 const App = () => {

    
  return (
    <div className='bg-[#ffeccf]'>
      
      

      <Header/>
      <Navbarr/>
      <Main/>
      <Navbarr2/>
      <Footer/>
    </div>
      
    
  );
}

export default App;