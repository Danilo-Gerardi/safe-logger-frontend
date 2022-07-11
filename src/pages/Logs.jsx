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
            <div class="headerLogs">
                <section class="log-table">
                    <div class="date">Data</div>
                    <div class="column">E1</div>
                    <div class="column">S1</div>
                    <div class="column">E2</div>
                    <div class="column">S2</div>
                    <div class="column">E3</div>
                    <div class="column">S3</div>
                    <div class="column">E4</div>
                    <div class="column">S4</div>
                    <div class="column">E5</div>
                    <div class="column">S5</div>
                    <div class="column">E6</div>
                    <div class="column">S6</div>
                    <div class="column">E7</div>
                    <div class="column">S7</div>
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
                    
                    <span class="color-blue">
                        LOGG3R
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