import { useHistory } from 'react-router';
import { useState } from 'react';
import createUser from '../service/createUser';
import '../styles/home.scss';
import '../styles/login.scss';
import { cpf } from 'cpf-cnpj-validator';


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
        })
        history.push('/home/business');
    }



    let regex = "([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})"
    let pattern = "$1.$2.$3-$4"

    function handleChangeStyle(cpfNumber) {
        setClasse("red-border")

        setDocument(cpfNumber.replaceAll(regex, pattern))

        if (cpf.isValid(cpfNumber)) {
            setClasse("green-border")
        } else {
            setClasse("red-border")
        }
    }


    return (
        <main>
            <section className="right-container">
                <text
                    onClick={() => history.goBack()}
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
                            placeholder="CPNJ"
                            onChange={e => handleChangeStyle(e.target.value)}
                            value={document}

                        />
                        <input
                            type="text"
                            placeholder="Digite seu email"
                            onChange={e => {
                                setLogin(e.target.value)
                            }}
                            value={email}

                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => {
                                setPassword(e.target.value)
                            }}
                            value={password}

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