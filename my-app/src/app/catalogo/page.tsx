

import Image from "next/image";

import styles from './Catalogo.module.css';
import { Container } from "react-bootstrap";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";

const Catalogo = () => {


    return (
        <>

            <Container fluid className={styles['gridcate']}>
                <div className= {styles['Navc']}><Nav2 /> </div>

                <div className= {styles['apresentacao']}>
                    <h1 className="text-4xl text-[#2F5D3F]">Encontre o seu novo <br /> melhor amigo!</h1>
                    <h5>Esses são os amigos que estão esperando por um <br /> lar cheio de amor e carinho &hearts;</h5>
                </div>

                <div className= {styles['asfiltro']}>
                    <h2>Filtro</h2>
                    <div className= {styles['animais']}>
                          <h2>Animais</h2>
                        <ul>
                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Gato</label></li>

                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" >Cachorro</label></li>

                       <li> <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Outros</label></li>
                          </ul>
                    </div>

                    <div className= {styles['porte']}>
                        <h2>Porte</h2>
                        <ul>
                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">P</label></li>

                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" >M</label></li>

                       <li> <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">G</label></li>
                          </ul>
                    </div>
                
                    <div className= {styles['cidade']}>
                        <h2>Cidade</h2>
                       <ul>
                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Sorocaba</label></li>

                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" >Votorantim</label></li>

                       <li> <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Outras</label></li>
                          </ul>

                    </div>
              
                    <div className= {styles['idadepesq']}>
                          <h2>Idade</h2>
                      <ul>
                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">0-10 anos</label></li>

                        <li><input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" >10 anos+</label></li>
                        </ul>

                    <input className="botao" type="button" value="Filtrar"/>

                    <Image  
                                    className='my-5 border rounded-2xl'
                                    src="/images/abandono-de-animais---crime-federal-dyp64t3hrm.webp" 
                                    alt="Crime-related image"
                                     width={350} height={500} />
                 </div>
                </div>

                <div className= {styles['descricaoani']}>
                   
                    <figure className= {styles['figures']}>
                        <Image className="py-3 px-3 rounded-[2vw]" src="/images/dog-.jpg" alt=""
                          width={400}
                          height={200}/>
                        <figcaption>
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
                        </figcaption>
                    </figure>

                    <figure className= {styles['figures']}>
                        <Image className="py-3 px-3 rounded-[2vw]" src="/images/dog-.jpg" alt=""
                          width={400}
                          height={200}/>
                        <figcaption>
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
                        </figcaption>
                    </figure>

                    <figure className= {styles['figures']}>
                        <Image className="py-3 px-3 rounded-[2vw]" src="/images/dog-.jpg" alt=""
                          width={400}
                          height={200}/>
                        <figcaption>
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
                        </figcaption>
                    </figure>

                    <figure className= {styles['figures']}>
                        <Image className="py-3 px-3 rounded-[2vw]" src="/images/dog-.jpg" alt=""
                          width={400}
                          height={200}/>
                        <figcaption>
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
                        </figcaption>
                    </figure>
               
                </div>

                <div className= {styles['footercat']}> <Footer /> </div>
            </Container>



        </>
    );
};

export default Catalogo;
