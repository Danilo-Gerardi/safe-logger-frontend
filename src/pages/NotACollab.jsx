import React, { useEffect } from "react";
import { useHistory } from 'react-router';
import moment from 'moment';
import getTodayLogs from "../service/getTodayLogs";
import 'moment/locale/pt-br'
import '../styles/session.scss';
import { useAuth } from "../providers/auth";
import logTime from "../service/logTime";
import getTime from "../utils/GetTime";


const NotACollab = props => {
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
            document.getElementById("start").innerText = data.start ? getTime(data.start) : "--:--"
            document.getElementById("end").innerText = data.finish ? getTime(data.finish) : "--:--"
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
            <div class="not-a-collab-yet-msg">
                <h1 >Você ainda não pode logar horas</h1>
                <h2>É preciso que uma empresa te indique como seu colaborador</h2>
            </div>



            <footer class="session-footer"></footer>

        </div>

    )
}

export default NotACollab;