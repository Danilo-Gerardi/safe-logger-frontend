import '../styles/home.scss';
import { useHistory } from 'react-router';
import signIn from '../service/userSignIn';
import organizationSignIn from '../service/organizationSignIn';
import { useState } from 'react';
import errorStyles from '../styles/errors/errorStyle';
import Carousel from 'react-material-ui-carousel'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleSignIn(e) {
        e.preventDefault();
        signIn({ email, password }, 
            () => {
                if (JSON.parse(localStorage.getItem('user')).organizations[0]) {
                    history.push('/home')
                } else {
                    history.push('/not-a-collab-yet')
                }
            },
            () => {
                e.preventDefault();
                organizationSignIn({ email, password }, () => history.push('/home/business'), errorStyles[1]);
            }, 
            errorStyles[1]);
    }

    return (
        <main>
            <section className="login-container">
                
            <div class="time-track">
                <div className="login-form">

                    <text class="title-mini">
                        LOGG3R
                    </text>

                    <h1>Bem vindo!</h1>
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
                        <div class="create-account">
                            <span>Não tem conta? </span>
                            <span class="click-here"
                                onClick={() => history.push('/signup')}
                            >Crie uma aqui</span>
                        </div>
                    </form>
                </div>
                </div>

            </section>

            <section class="right-container">
                <div class="time-track">

                    <text class="title">
                        LOGG3R
                    </text>

                    <Carousel className='carousel' autoPlay="true" animation='slide' duration="1000" interval="6000">
                            <div>
                                <text class="quote">
                                    Registre seu tempo com segurança e de forma simples!
                                </text>
                                <img src="mobile_posts.svg" alt="" srcset="" width={350}/>
                            </div>

                            <div>
                                <text class="quote">
                                    Controle seu tempo com poucos cliks!
                                </text>
                                <img src="time_management.svg" alt="" srcset="" width={350}/>
                            </div>
                    </Carousel>
                </div>
            </section>
            
        </main>
    )
}

export default SignIn;