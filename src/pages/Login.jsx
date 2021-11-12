import '../styles/home.scss';
import { useHistory } from 'react-router';
import signIn from '../service/signIn';
import { useState } from 'react';
import { useAuth } from '../providers/auth'


const Login = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSignIn(e) {
        e.preventDefault();
        signIn({ email, password });

        if (localStorage.getItem('jwt')) {
            history.push('/home');
        }
    }

    return (
        <main>
            <section className="login-container">
                <div className="login-form">

                    <h2>Bem vindo!</h2>
                    <form onSubmit={handleSignIn}>
                        <input
                            id="login"
                            type="text"
                            placeholder="Login"
                            onChange={e => setEmail(e.target.value)}
                            value={email}

                        />
                        <input
                            id="login"
                            type="password"
                            placeholder="Senha"
                            onChange={e => setPassword(e.target.value)}
                            value={password}

                        />
                        <button>
                            Entrar
                        </button>
                        <div class="create-account">
                            <span>Não tem conta? </span>
                            <span class="click-here"
                                onClick={() => history.push('/signup')}
                            >Crie uma aqui</span>
                        </div>
                    </form>
                </div>

            </section>
            <section class="right-container">
                <div class="time-track">
                    <text >
                        Time Track
                    </text>
                    <text class="quote">
                        Registre seu tempo.
                    </text>
                </div>

            </section>
        </main>
    )
}


export default Login;