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
            <div>
              {logList.map((value) => <Log data={"asdasd"} start={value.start} finish={value.finish}/>)}
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
                        onClick={() => history.push('/signup')}
                        class="logout"
                    >
                        Logout
                    </span>

                </div>
            </header>
            <section class="log-table">
                <div>Data</div>
                <div>Inicio</div>
                <div>Fim</div>
            </section>

            <div class="log-table">
                <div>09/09/2022</div>
                <div>08:00</div>
                <div>17:00</div>
            </div>

            {renderLogs()}

            <footer class="session-footer"></footer>

        </div>

    )
}

export default Logs;