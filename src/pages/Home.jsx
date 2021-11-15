import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import moment from 'moment';
import getTodayLogs from "../service/getTodayLogs";
import 'moment/locale/pt-br'
import '../styles/session.scss';
import { useAuth } from "../providers/auth";
import logTime from "../service/logTime";
import getTime from "../utils/GetTime";


const Home = _props => {

    const history = useHistory();

    const [start, setStart] = useState("--:--");
    const [finish, setFinish] = useState("--:--");

    const organizationDocument = JSON.parse(localStorage.getItem('user')).organizations[0].document;
    const token = JSON.parse(localStorage.getItem('jwt')).token;

    function toUpperCaseInTheFirstLetter(str) {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }


    function findTodayLogs(_organizationDocument, _token) {

        getTodayLogs((data) => {
            console.log(data)
            data.start ? setStart(getTime(data.start)) : setStart("--:--");
            data.finish ? setFinish(getTime(data.finish)) : setFinish("--:--");
        }, _organizationDocument, _token)
    }

    useEffect(() => {
        findTodayLogs(organizationDocument, token)
    }, []);


    function log(e) {
        e.preventDefault();
        logTime(
            organizationDocument,
            token,
            () => {
                findTodayLogs(organizationDocument, token)
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
                                    <div id="start" class="log-time">{start}</div>
                                </span>
                                <span>
                                    <div>Fim</div>
                                    <div id="end" class="log-time">{finish}</div>
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