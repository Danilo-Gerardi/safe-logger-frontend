import '../styles/home.scss';
import { useHistory } from 'react-router';
import organizationSignIn from '../service/organizationSignIn';
import { useState } from 'react';
import errorStyles from '../styles/errors/errorStyle';
import Carousel from 'react-material-ui-carousel'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignInBusiness = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSignIn(e) {
        e.preventDefault();
        organizationSignIn({ email, password }, () => history.push('/home/business'), errorStyles[1]);
    }

    return (
        <main>
            <section className="login-container">
                <div className="login-form">

                    <h1>Conta Business</h1>
                    <form onSubmit={handleSignIn}>
                        <TextField 
                            className="input"
                            id="email"
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            onClick={errorStyles[0]}
                            label="Email" 
                            variant="outlined" 
                        />
                        <TextField 
                            className="input"
                            id="password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            onClick={errorStyles[0]}
                            label="Senha" 
                            variant="outlined" 
                        />
                        <Button className='button' variant="contained" type='submit'>
                            Entrar
                        </Button >
                        <Button className='button' variant="contained" onClick={() => history.push('/signin')}>
                            Sou colaborador
                        </Button>
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
                    <text className="title">
                        Safe Logger
                    </text>
                    <text class="quote">
                        Business account
                    </text>
                    <Carousel className='carousel' autoPlay="true" animation='slide' duration="1000" interval="6000">
                            <div>
                                <text class="quote">
                                    Registre seu tempo com segurança e de forma simples!
                                </text>
                                <img src="google_analytics.svg" alt="" srcset="" width={500}/>
                            </div>

                            <div>
                                <text class="quote">
                                    Controle seu tempo com poucos cliks!
                                </text>
                                <img src="time_management.svg" alt="" srcset="" width={400}/>
                            </div>
                    </Carousel>
                </div>

            </section>
        </main>
    )
}


export default SignInBusiness;