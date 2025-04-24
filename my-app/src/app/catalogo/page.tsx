
"use client";
 
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";
 
const Catalogo= () => {


  return (
    <>
 
      
        <Nav2/>
    
        <div className="bg-[#ffeccf]">
            <div className="flex flex-row">

              <nav className="col-2 mt-8 px-4 flex flex-col"
                      
                      style={{backgroundColor:'#FFCCBC'}}>
                              <h1 id="h1filtro">Filtro</h1>
                          <div id="Filtro">
                              <h2 id="h2filtro">Animais</h2>
                              <div>
                                  <input className="form-check-input" type="checkbox"/>
                                  <label className="form-check-label">Gato</label>
                              </div>
                              <div>
                                  <input className="form-check-input" type="checkbox"/>
                                  <label className="form-check-label" >Cachorro</label>
                              </div>
                              <div>
                                  <input className="form-check-input" type="checkbox"/>
                                  <label className="form-check-label">Outros</label>
                              </div>
                          
                          </div>
                          <div id="Filtro">
                                  <h2 id="h2filtro">Porte</h2>
                          
                              <div>
                                  <input className="form-check-input" type="checkbox"/>
                                  <label className="form-check-label" >P</label>
                              </div>
                              <div>
                                  <input className="form-check-input" type="checkbox" />
                                  <label className="form-check-label" >M</label>
                              </div>
                              <div>
                                  <input className="form-check-input" type="checkbox"/>
                                  <label className="form-check-label">G</label>
                              </div>
                          </div>
                          <div id="Filtro">
                                  <h2 id="h2filtro">Cidade</h2>
                          
                              <div>
                                  <input className="form-check-input" type="checkbox" />
                                  <label className="form-check-label">Sorocaba</label>
                              </div>
                              <div>
                                  <input className="form-check-input" type="checkbox" />
                                  <label className="form-check-label" >Votorantim</label>
                              </div>
                              <div>
                                  <input className="form-check-input" type="checkbox" />
                                  <label className="form-check-label" >Outras</label>
                              </div>
                          </div>
                              <input className="border-2 rounded-full bg-[#ff8110] w-20 mt-2" type="button" value="Filtrar"/>
                      </nav>


                      
                <div className="col-10 mt-8" >
                    <div className="px-4 " >
                        <div className="flex flex-row bg-[#E1BEE7] mb-4">
                          <Image className="py-5 px-2" src="/images/cachorroteste.jfif" alt=""
                          width={400}
                          height={200}/>
                            <div id="paragrafocatalogo" >
                                <p>Nome:</p>
                                <p> Espécie: Cachorro</p>
                                <p>Raça: </p>
                                <p>Idade: </p>
                                <p>Sexo: </p>
                                <p>Temperamento: </p>
                                <p>Tamanho: </p>
                                <p>Vacinas: </p>
                                <p>Desparasitação: </p>
                                <p>Comportamento:</p>
                            </div>
                        </div>

                        <div className="flex flex-row bg-[#E1BEE7] mb-4">
                          <Image className="py-5 px-2" src="/images/cachorroteste.jfif" alt=""
                          width={400}
                          height={200}/>
                            <div id="paragrafocatalogo" >
                                <p>Nome:</p>
                                <p> Espécie: Cachorro</p>
                                <p>Raça: </p>
                                <p>Idade: </p>
                                <p>Sexo: </p>
                                <p>Temperamento: </p>
                                <p>Tamanho: </p>
                                <p>Vacinas: </p>
                                <p>Desparasitação: </p>
                                <p>Comportamento:</p>
                            </div>
                        </div>

                        <div className="flex flex-row bg-[#E1BEE7] mb-4">
                          <Image className="py-5 px-2" src="/images/cachorroteste.jfif" alt=""
                          width={400}
                          height={200}/>
                            <div id="paragrafocatalogo" >
                                <p>Nome:</p>
                                <p> Espécie: Cachorro</p>
                                <p>Raça: </p>
                                <p>Idade: </p>
                                <p>Sexo: </p>
                                <p>Temperamento: </p>
                                <p>Tamanho: </p>
                                <p>Vacinas: </p>
                                <p>Desparasitação: </p>
                                <p>Comportamento:</p>
                            </div>
                        </div>

                        <div className="flex flex-row bg-[#E1BEE7] mb-4">
                          <Image className="py-5 px-2" src="/images/cachorroteste.jfif" alt=""
                          width={400}
                          height={200}/>
                            <div id="paragrafocatalogo" >
                                <p>Nome:</p>
                                <p> Espécie: Cachorro</p>
                                <p>Raça: </p>
                                <p>Idade: </p>
                                <p>Sexo: </p>
                                <p>Temperamento: </p>
                                <p>Tamanho: </p>
                                <p>Vacinas: </p>
                                <p>Desparasitação: </p>
                                <p>Comportamento:</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            

        
        

        <Footer/>
      
 
    
    </>
  );
};
 
export default Catalogo;
 