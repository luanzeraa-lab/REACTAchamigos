'use client'

import axios from "axios"
import { IAnimal } from "./IAnimal"
import { useEffect, useState } from "react"

 const Animal=()=> {

    const [animal, setAnimal] = useState<IAnimal[]>([]);

    useEffect(()=>{
        const listaAnimal = async ()=>{
            const response = await axios.get("http://localhost/animais");

            setAnimal(response.data);
            console.log(response.data);
        };
        listaAnimal();
    }, []);


    return(
        <>
            {animal.map(ani=>{
                return(
                    <div key={ani.id}>
                        <p>{`Nome: ${ani.nome}`}</p>
                        <p >{`Raça: ${ani.raca}`}</p>
                        <img src="{ani.imagem}" alt="" />
                    </div>
                )
            })}
        </>
    )
};
export default Animal;