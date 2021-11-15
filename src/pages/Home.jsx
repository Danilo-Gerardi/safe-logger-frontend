import React, { useEffect } from "react";
import { useHistory } from 'react-router';
import moment from 'moment';
import getTodayLogs from "../service/getTodayLogs";
import 'moment/locale/pt-br'
import '../styles/session.scss';
import { useAuth } from "../providers/auth";
import logTime from "../service/logTime";


const Home = props => {
    const { user } = useAuth();

    const history = useHistory();

    function toUpperCaseInTheFirstLetter(str) {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }


    function findTodayLogs() {
        getTodayLogs((data) => {
            console.log(data)
            document.getElementById("start").innerText = data.start ? data.start : "--:--"
            document.getElementById("end").innerText = data.finish ? data.finish : "--:--"
        })
    }

    useEffect(() => {
        findTodayLogs()
    }, []);


    function log(e) {
        e.preventDefault();
        let ornganizationDocument = JSON.parse(localStorage.getItem('user')).organizations[0].document;
        const token = JSON.parse(localStorage.getItem('jwt')).token;

        logTime(
            ornganizationDocument,
            token,
            () => {
                findTodayLogs();
                console.log('DEU BOM')
            },
            () => {
                console.log('DEU RUIM')
            });
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
                        <div class="greeting">Olá, {
                            JSON.parse(localStorage.getItem('user')).name
                        }!</div>
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
                                    <div id="start" class="log-time">--:--</div>
                                </span>
                                <span>
                                    <div>Fim</div>
                                    <div id="end" class="log-time">--:--</div>
                                </span>
                            </div>

                        </div>

                        <div class="buttons">
                            <button
                                onClick={log}
                            >Registrar tempo</button>
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