import React, { useState, useEffect } from "react";
import '../styles/session.scss';
import '../styles/logs.scss';
import getAllUserLogs from '../service/getAllUserLogs';
import Log from '../components/LogsComponent';
import { useHistory } from 'react-router';

const Logs = props => {
    const history = useHistory();
    const [logList, setLogList] = useState([]) 

    useEffect(() => {
        getAllUserLogs((logs) => {
            console.log(logs)
            setLogList(logs)
        })
    }, []);

    function renderLogs() {
        return (
            <div class="teste">
                <section class="log-table">
                    <div class="date">Data</div>
                    <div class="teste2">E1</div>
                    <div class="teste2">S1</div>
                    <div class="teste2">E2</div>
                    <div class="teste2">S2</div>
                    <div class="teste2">E3</div>
                    <div class="teste2">S3</div>
                    <div class="teste2">E4</div>
                    <div class="teste2">S4</div>
                    <div class="teste2">E5</div>
                    <div class="teste2">S5</div>
                    <div class="teste2">E6</div>
                    <div class="teste2">S6</div>
                    <div class="teste2">E7</div>
                    <div class="teste2">S7</div>
                </section>

                {logList.map((value) => <Log date={value.date} times={value.times}/>)}
            </div>
          )
    }
    
    return (
        <div class="entire-view">

            <header class="session-header">
                <div class="session-header-inner">
                    <span
                        onClick={() => history.goBack()}
                        class="logout"
                    >
                        Voltar
                    </span>

                    <span
                        onClick={() => history.push('/signin')}
                        class="logout"
                    >
                        Logout
                    </span>

                </div>
            </header>

            {renderLogs()}

            <footer class="session-footer"></footer>

        </div>

    )
}

export default Logs;