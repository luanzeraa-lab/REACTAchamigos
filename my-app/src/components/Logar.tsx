import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
const Logar =()=>{


    return (
        <>
            
            <div className='mt-4 d-flex justify-center'>
                <div className="text-center col-4">
                    <p className='font-bold'>Login</p>
                    <Form.Label htmlFor="login">Email ou CPF</Form.Label>
                    <Form.Control
                        type="text"
                        id="login"
                    />
                    <Form.Label htmlFor="senha">Senha</Form.Label>
                    <Form.Control
                        type="password"
                        id="senha"
                        aria-describedby="passwordHelpBlock"
                    />
                    <input className="border-2 rounded-full bg-[#ff8110] w-20 mt-2" type="button" value="Entrar"/>
                </div>
            </div>
  
        </>
    )
}

export default Logar;