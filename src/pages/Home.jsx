import React from "react";
import { useHistory } from 'react-router';
import moment from 'moment';

import 'moment/locale/pt-br'
import '../styles/session.scss';

const Home = props => {

    const history = useHistory();

    function toUpperCaseInTheFirstLetter(str) {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }

    const dayOfTheWeek = toUpperCaseInTheFirstLetter(moment().format('dddd'));

    function validate() {
        if (!localStorage.getItem('jwt')) {
            history.push('/signup')
        }
    }

    validate();

    return (
        <div class="entire-view">

            <header class="session-header">
                <div class="session-header-inner">
                    <span>
                        Time Track
                    </span>

                    <span
                        onClick={() => history.push('/signin')}
                        class="logout"
                    >
                        Logout
                    </span>

                </div>
            </header>
            <div class="middle">
                <form class="session-form">

                    <div>
                        <div class="greeting">Boa tarde, Danilo!</div>
                        <div class="date-info">
                            <span>{dayOfTheWeek}, </span>
                            <span>{moment().format('LL')}</span>
                        </div>
                    </div>

                    <div class="container-form">
                        <div class="times">
                            <div class="time">{moment().format('LT')}</div>
                            <div class="logs">
                                <span>
                                    <div>Inicio</div>
                                    <div class="log-time">08:00</div>
                                </span>
                                <span>
                                    <div>Fim</div>
                                    <div class="log-time">17:00</div>
                                </span>
                            </div>

                        </div>

                        <div class="buttons">
                            <button>Registrar tempo</button>
                            <button
                                onClick={() => history.push('/logs')}
                                class="second-button">Ver minhas horas
                            </button>
                        </div>
                    </div>

                </form>
            </div>


            <footer class="session-footer"></footer>

        </div>

    )
}

export default Home;