'use client'

import axios from "axios"
import { useState } from "react";

const createAnimal = (nome: string, idade: number, raca: string, sexo: string, porte: string,
   peso: number, observacoes: string | null, castracao: boolean, imagem: File | null) =>{
    axios.post("http://localhost/animais", {
        nome: nome,
        idade: idade,
        raca: raca,
        sexo: sexo,
        porte: porte,
        peso: peso,
        observacoes: observacoes,
        castracao:castracao,
        imagem: imagem,
    })
    .then((res) => {
      console.log(JSON.stringify(res.data));
      if (res.status === 201) {
        alert("Animal cadastrado com sucesso!");
      } else {
        alert("Falha ao tentar cadastrar o animal");
      }
    })
    .catch(() => {
      alert("Falha ao tentar cadastrar o animal");
    });
};

const Inserir=()=> {
    const [nomeAnimal, setNomeAnimal] = useState<string>("");
    const [racaAnimal, setRacaAnimal] = useState<string>("");
    const [imgAnimal, setImgAnimal] = useState<File | null>(null);

    return(
        <>
        <div className="m-4" >
            <label className="m-4" htmlFor="nome">Nome</label>
            <input type="text" id="nome"
            value={nomeAnimal}
            onChange={(event)=>{
              setNomeAnimal(event.target.value);
            }}/>

            <label htmlFor="raca">Raça</label>
            <input type="text" id="raca"
            value={racaAnimal}
            onChange={(event)=>{
              setRacaAnimal(event.target.value);
            }} />

            <label htmlFor="imagem"></label>
            <input type="file" id="imagem" 
            onChange={(event)=>{
              const file = event.target.files[0];
              setImgAnimal(file);
            }}/>
        </div>
        <input className="m-4" type="button" id="cadastrar" value={"cadastrar"} 
        onClick={()=>{
          createAnimal(nomeAnimal, racaAnimal, imgAnimal)}}/>
        </>
    )
};
export default Inserir;