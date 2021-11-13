import React from "react";
import { useHistory } from 'react-router';
import moment from 'moment';

import 'moment/locale/pt-br'
import '../styles/session.scss';
import { useAuth } from "../providers/auth";

const Home = props => {

    const { user } = useAuth();

    const history = useHistory();

    function toUpperCaseInTheFirstLetter(str) {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }

    setTimeout(() => {
        if (!localStorage.getItem('user')) {
            history.push('/')
        }
    }, 0)

    const dayOfTheWeek = toUpperCaseInTheFirstLetter(moment().format('dddd'));

    return (
        <div class="entire-view">

            <header class="session-header">
                <div class="session-header-inner">
                    <span>
                        Safe Logger
                    </span>

                    <span
                        onClick={
                            () => {
                                localStorage.clear();
                                history.push('/signin');
                            }
                        }
                        class="logout"
                    >
                        Logout
                    </span>

                </div>
            </header>
            <div class="middle">
                <form class="session-form">

                    <div>
                        <div class="greeting">Olá, {user.name}!</div>
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