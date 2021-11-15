import React, { useState, useEffect } from "react";
import '../styles/session.scss';
import '../styles/logs.scss';
import getAllUserLogs from '../service/getAllUserLogs';
import Log from '../components/LogsComponent';
import { useHistory } from 'react-router';
import getDate from '../utils/GetDate';
import getTime from '../utils/GetTime';

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
              {logList.map((value) => <Log data={getDate(value.start)} start={getTime(value.start)} finish={getTime(value.finish)}/>)}
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

            {renderLogs()}

            <footer class="session-footer"></footer>

        </div>

    )
}

export default Logs;