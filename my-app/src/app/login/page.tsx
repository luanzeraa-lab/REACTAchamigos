"use client";

import Cadastrar from "@/components/Cadastrar";
import Logar from "@/components/Logar";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";


const Login =()=>{

    return(
        <div className='bg-[#ffeccf]'>
            <Nav2/>
            
            <Logar/>
        
                <div className="mt-4 justify-items-center">
                    <p id="ou">OU</p>
                    <p className="mt-2 font-bold">Cadastre-Se</p>
                </div>
                
            <Cadastrar/>
            <Footer/>
            
    

    
        </div>
    )
};
export default Login;