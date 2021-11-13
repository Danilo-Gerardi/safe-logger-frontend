import '../styles/home.scss';
import { useHistory } from 'react-router';
import organizationSignIn from '../service/organizationSignIn';
import { useState } from 'react';
import errorStyle from '../styles/errors/errorStyle';


const SignInBusiness = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSignIn(e) {
        e.preventDefault();
        organizationSignIn({ email, password }, () => history.push('/home/business'), errorStyle[1]);
    }

    return (
        <main>
            <section className="login-container">
                <div className="login-form">

                    <h2>Conta Business</h2>
                    <form onSubmit={handleSignIn}>
                        <input
                            id="email"
                            type="text"
                            placeholder="Login"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            onClick={errorStyle[0]}

                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Senha"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            onClick={errorStyle[0]}

                        />
                        <button>
                            Entrar
                        </button>
                        <button onClick={() => history.push('/signin')}>
                            Entrar como usuário
                        </button>
                        <div class="create-account">
                            <span>Não tem conta? </span>
                            <span class="click-here"
                                onClick={() => history.push('/signup/business')}
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
                        Business account
                    </text>
                </div>

            </section>
        </main>
    )
}


export default SignInBusiness;