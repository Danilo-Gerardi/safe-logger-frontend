import { useHistory } from 'react-router';
import { useState } from 'react';
import createUser from '../service/createUser';
import '../styles/home.scss';
import '../styles/login.scss';
import { cnpj } from 'cpf-cnpj-validator';
import errorStyles from '../styles/errors/errorStyle';


const SignUpBusiness = props => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [lastName] = useState('');
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
        }, () => history.push('/home/business'), errorStyles[1])

    }

    function handleChangeStyle(cnpjNum) {
        setClasse("red-border")

        setDocument(cnpjNum)

        if (cnpj.isValid(cnpjNum)) {
            setClasse("green-border")
        } else {
            setClasse("red-border")
        }
    }


    return (
        <main>
            <section className="right-container">
                <text
                    onClick={() => history.push("/signin/business")}
                    class="quote2"
                >
                    VOLTAR AO LOGIN
                </text>
            </section>
            <section className="login-container">

                <div className="login-form">

                    <h2>Conta Business</h2>
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
                            className={classe}
                            type="text"
                            placeholder="Cpnj"
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
                            history.push('/signup');

                        }}>
                            Criar Conta Usuário
                        </button>
                    </form>
                </div>
            </section>
        </main >

    )
}

export default SignUpBusiness;