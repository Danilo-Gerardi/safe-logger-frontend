import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import moment from 'moment';
import getTodayLogs from "../service/getTodayLogs";
import getCollaborator from "../service/getCollaborator";
import 'moment/locale/pt-br'
import '../styles/session.scss';
import logTime from "../service/logTime";
import getTime from "../utils/GetTime";
import Button from '@mui/material/Button';

const Home = _props => {

    const history = useHistory();

    const [start, setStart] = useState("--:--");
    const [finish, setFinish] = useState("--:--");
    const [collaboratorType, setCollaboratorType] = useState("PRESENTLY");

    const organizationDocument = JSON.parse(localStorage.getItem('user')).organizations[0].document;
    const userDocument = JSON.parse(localStorage.getItem('user')).document;
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

    function findCollaborator(_userDocument, _token) {
        getCollaborator((data) => {
            data.collaboratorType ? setCollaboratorType(data.collaboratorType) : setStart("");
        }, _userDocument, _token);
    }

    function IsCollaboratorRemotely() {
        if ("REMOTELY" === collaboratorType) {
            return <Button className='button' variant="contained" type='submit' onClick={log}> Registrar tempo </Button >
        }
        return <div></div>
    }

    useEffect(() => {
        findTodayLogs(organizationDocument, token);
        findCollaborator(userDocument, token);
    }, []);

    function log(e) {
        e.preventDefault();
        logTime(
            organizationDocument,
            token,
            () => {
                findTodayLogs(organizationDocument, token)
                console.log('Sucesso ao registrar tempo')
            },
            () => {
                console.log('Falha ao registrar tempo')
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
                    <span class="color-blue">
                        LOGG3R
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
                            <IsCollaboratorRemotely/>

                            <Button className='button' variant="contained" type='submit' onClick={() => history.push('/logs')}>
                                Ver minhas horas
                            </Button >
                        </div>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Home;