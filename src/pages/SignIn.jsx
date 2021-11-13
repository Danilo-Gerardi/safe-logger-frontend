import '../styles/home.scss';
import { useHistory } from 'react-router';
import signIn from '../service/signIn';
import { useState } from 'react';


const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSignIn(e) {
        e.preventDefault();
        signIn({ email, password }, () => history.push('/home'), error);
    }

    function error() {
        document.getElementById("email").style.borderColor = "yellow"
        document.getElementById("password").style.borderColor = "yellow"
        document.getElementById("email").placeholder = "Email incorreto"
        document.getElementById("password").placeholder = "Senha incorreta"

    }

    function removeYellowBorder() {
        document.getElementById("email").style.borderColor = ""
        document.getElementById("password").style.borderColor = ""
        document.getElementById("email").placeholder = "Email"
        document.getElementById("password").placeholder = "Senha"
    }

    return (
        <main>
            <section className="login-container">
                <div className="login-form">

                    <h2>Bem vindo!</h2>
                    <form onSubmit={handleSignIn}>
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            onClick={removeYellowBorder}
                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Senha"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            onClick={removeYellowBorder}


                        />
                        <button>
                            Entrar
                        </button>
                        <button onClick={() => history.push('/signin/business')}>
                            Entrar como Business
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
                        Safe Logger
                    </text>
                    <text class="quote">
                        Registre seu tempo.
                    </text>
                </div>

            </section>
        </main>
    )
}


export default SignIn;