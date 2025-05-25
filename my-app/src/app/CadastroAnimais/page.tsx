'use client'
import styles from './CadastroAnimais.module.css';
import { useRouter } from "next/navigation";
import { Container, Image, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const CadastroAnimais = () => {
    const router = useRouter();

    return (
        <>
            <Container fluid id={styles['allpage']}>
                <div id={styles['main_']}>
                    <div className={styles['main-container']}>
                        <div className={styles['back']}>
                            <Image src="/icons/arrow-left-02.svg" alt="Icone de Voltar"
                                width={32}
                                height={32}
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    router.push("/login")
                                }}
                            />
                            <span>Voltar</span>

                        </div>
                        <h1>Formulário de cadastro</h1>
                        <p className='my-6'>Preencha os dados abaixo para cadastrar o amiguinho no achamigos &hearts;</p>

                        <Form>

                            <div className={styles['dog-info']}>
                                <h5> 🐾 Informações do amiguinho</h5>


                                <div className={styles['input-wrapper']}>
                                    <Form.Label htmlFor="name">Nome</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Insira o nome" />
                                </div>


                                <div className={styles['input-wrapper']}>
                                    <Form.Label htmlFor="age">Idade</Form.Label>
                                    <Form.Control id="age" type="number" placeholder="Insira a idade" />
                                </div>

                                <div className={styles['input-wrapper']}>
                                    <Form.Label htmlFor="race">Raça</Form.Label>
                                    <Form.Control id="race" type="text" placeholder="Insira a raça" />
                                </div>

                                <div className={styles['select-wrapper']}>
                                    <Form.Label htmlFor='gender'>Sexo</Form.Label>
                                    <Form.Select id='gender'>
                                        <option value="">Selecione...</option>
                                        <option value="macho">Macho</option>
                                        <option value="femea">Fêmea</option>
                                    </Form.Select>
                                </div>

                                <div className={styles['select-wrapper']}>
                                    <Form.Label htmlFor='size'>Porte</Form.Label>
                                    <Form.Select id='size'>
                                        <option value="">Selecione...</option>
                                        <option value="pequeno">Pequeno</option>
                                        <option value="medio">Médio</option>
                                        <option value="grande">Grande</option>
                                    </Form.Select>
                                </div>

                                <div className={styles['input-wrapper']}>
                                    <Form.Label htmlFor='weight'>Peso (kg)</Form.Label>
                                    <Form.Control id='weight' type="number" step="0.1" placeholder="Peso em kg" />
                                </div>

                            </div>

                            <div className={styles['dog-health']}>
                                <h5 className='mb-4'> 🐾 Saúde do amiguinho</h5>

                                <div className={styles['checkbox-wrapper']} >
                                    <Form.Label>💉 Vacinas</Form.Label>

                                    <Form.Check
                                        type="checkbox"
                                        label="V8 ou V10"
                                        value="v8"
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Antirrábica"
                                        value="antirrabica"
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Giardíase"
                                        value="giardiase"
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Tosse dos Canis"
                                        value="tosse"
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Outras - Se sim, especificar nas observações do animal "
                                        value="others"
                                    />

                                    <Form.Label htmlFor='observations' className='mt-3 mb-0.5'> 🐶 Observações</Form.Label>
                                    <Form.Control
                                        id='observations'
                                        as="textarea"
                                        rows={5}
                                        placeholder="Escreva informações adicionais sobre o animal, possui outras vacinas? possui alergias? É Vermifugado? Possui doenças pré-existentes?"
                                    />

                                    <Form.Label className='mt-3 mb-0.5'>✂️ Castração</Form.Label>

                                    <Form.Check
                                        type="radio"
                                        id="castrado-sim"
                                        name="castracao"
                                        value="sim"
                                        label="Sim"
                                    />

                                    <Form.Check
                                        type="radio"
                                        id="castrado-nao"
                                        name="castracao"
                                        value="nao"
                                        label="Não"
                                    />

                                </div>

                            </div>
                            <div className="droparea-wrapper">
                             <h5>📷 Foto do animal </h5>
                            <div className={styles['droparea']} >
                                    
                                    <Form.Control className={styles['inputcontrol']}
                                        type="file"
                                        id="foto-animal"
                                        name="fotoAnimal"
                                        accept="image/*"
                                    />
                                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M34.9552 18.0221C34.97 18.022 34.985 18.022 35 18.022C39.9706 18.022 44 22.0588 44 27.0386C44 31.6796 40.5 35.5016 36 36M34.9552 18.0221C34.9848 17.6921 35 17.3579 35 17.0202C35 10.9339 30.0752 6 24 6C18.2465 6 13.5247 10.4253 13.0408 16.0638M34.9552 18.0221C34.7506 20.2952 33.8572 22.3692 32.4856 24.033M13.0408 16.0638C7.96796 16.5475 4 20.8278 4 26.0366C4 30.8834 7.43552 34.9264 12 35.8546M13.0408 16.0638C13.3565 16.0337 13.6765 16.0183 14 16.0183C16.2516 16.0183 18.3295 16.7639 20.001 18.022"
                                        stroke="#D6D3D1"  
                                       />
                                    <path
                                        d="M24 26V42M24 26C22.5996 26 19.9831 29.9886 19 31M24 26C25.4004 26 28.017 29.9886 29 31"
                                        stroke="#D6D3D1" 
                                         />
                                </svg>
                                    <p>Clique aqui para <br /> selecionar arquivos</p>
                                    </div>
                                </div>

                        <div className={styles['action-wrapper']}>

                        <Button className={styles['btn-secondary']} type="button">Salvar respostas</Button>
                        <Button className={styles['btn-primary']} type="submit">Finalizar cadastro</Button>

                     </div>

                        </Form>

                    </div>
                </div>

                <aside className={styles['asideee']}>
                    <div className={styles['aside-container']}>
                        <header>
                            <div className='flex items-center gap-2'>
                                <Image src="/images/logoprojetoachamigos_processed.png"
                                    alt="Logo achamigos" width={32}
                                    height={32}
                                />
                                <h3 className='my-auto'>achamigos</h3>
                            </div>

                            <h2>Porque, para nós, toda <span> adoção </span> importa</h2>

                            <p>Cadastre um amiguinho para que possamos ajudá-lo a encontrar um ambiente acolhedor, seguro e cheio de amor.</p>

                        </header>
                        <Image
                            className=""
                            src="/images/logocerto.png"
                            width={650}
                            height={200}
                            alt="logo"
                        />
                    </div>
                </aside>


            </Container>
        </>
    );

};

export default CadastroAnimais;