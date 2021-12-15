import { useHistory } from 'react-router';
import { useState } from 'react';
import createUser from '../service/createUser';
import '../styles/home.scss';
import '../styles/login.scss';
import { cpf } from 'cpf-cnpj-validator';
import errorStyles from '../styles/errors/errorStyle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignUp = props => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [document, setDocument] = useState('');
    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [classe, setClasse] = useState('')

    function handleCreateUser(e) {
        e.preventDefault()
        createUser({
            name,
            lastName,
            document,
            email,
            password
        }, () => {
            if (JSON.parse(localStorage.getItem('user')).organizations[0]) {
                history.push('/home')
            } else {
                history.push('/not-a-collab-yet')
            }
        }, errorStyles[1])

    }

    function handleChangeStyle(cpfNum) {
        setClasse("red-border")

        setDocument(cpfNum)

        if (cpf.isValid(cpfNum)) {
            setClasse("green-border")
        } else {
            setClasse("red-border")
        }
    }

    return (
        <main>
            <section className="right-container">
                <text
                    onClick={() => history.push('/signin')}
                    class="quote2"
                >
                    VOLTAR AO LOGIN
                </text>
            </section>
            
            <section className="login-container">

                <div className="login-form">

                    <h2>Crie sua conta</h2>
                    <form>
                        <TextField 
                            className="input"
                            type="text"
                            onChange={e => {
                                setName(e.target.value)
                            }}
                            value={name}
                            label="Nome" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="input"
                            type="text"
                            onChange={e => {
                                setLastname(e.target.value)
                            }}
                            value={lastName}
                            label="Sobrenome" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="input"
                            type="text"
                            onChange={e => handleChangeStyle(e.target.value)}
                            value={document}
                            label="Cpf" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="input"
                            id="email"
                            type="text"
                            onChange={e => {
                                setLogin(e.target.value)
                            }}
                            value={email}
                            onClick={errorStyles[0]}
                            label="Email" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="input"
                            id="password"
                            type="password"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            onClick={errorStyles[0]}
                            label="Senha" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="input"
                            type="password"
                            label="Confirme a senha" 
                            variant="outlined" 
                        />
                        <Button className='button' variant="contained" type='submit' onClick={handleCreateUser}>
                            Criar
                        </Button >
                        <Button className='button' variant="contained" onClick={() => history.push('/signup/business')}>
                            Criar Conta Business
                        </Button>
                    </form>
                </div>
            </section>
        </main >

    )
}

export default SignUp;