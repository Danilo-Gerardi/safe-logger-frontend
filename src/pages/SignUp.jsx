import { useHistory } from 'react-router';
import { useState } from 'react';
import createUser from '../service/createUser';
import '../styles/home.scss';
import '../styles/login.scss';
import { cpf } from 'cpf-cnpj-validator';
import errorStyles from '../styles/errors/errorStyle';


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
        }, () => history.push('/home'), errorStyles[1])

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
                        <input
                            type="text"
                            placeholder="Nome"
                            onChange={e => {
                                setName(e.target.value)
                            }}
                            value={name}
                        />
                        <input
                            type="text"
                            placeholder="Sobrenome"
                            onChange={e => {
                                setLastname(e.target.value)
                            }}
                            value={lastName}

                        />
                        <input
                            className={classe}
                            type="text"
                            placeholder="Cpf"
                            onChange={e => handleChangeStyle(e.target.value)}
                            value={document}

                        />
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            onChange={e => {
                                setLogin(e.target.value)
                            }}
                            value={email}
                            onClick={errorStyles[0]}

                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Senha"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            onClick={errorStyles[0]}

                        />
                        <input
                            type="password"
                            placeholder="Confirme a senha"

                        />
                        <button onClick={handleCreateUser}>
                            Criar
                        </button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            history.push('/signup/business')

                        }}>
                            Criar Conta Business
                        </button>
                    </form>
                </div>
            </section>
        </main >

    )
}

export default SignUp;