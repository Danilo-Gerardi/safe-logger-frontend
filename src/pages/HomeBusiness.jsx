import React, { useState } from "react";
import { useHistory } from 'react-router';
import moment from 'moment';

import 'moment/locale/pt-br'
import '../styles/session.scss';
import { useAuth } from "../providers/auth";
import admitCollaborator from "../service/admitCollaborator";


const HomeBusiness = props => {

    const { organization } = useAuth();
    const [cpf, setCpf] = useState('');
    const history = useHistory();

    function toUpperCaseInTheFirstLetter(str) {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }

    function admitColaborator(e) {
        e.preventDefault();
        admitCollaborator({
            userDocument: cpf,
            organizationDocument:
                JSON.parse(localStorage.getItem('organization')).document
        }, () => turnMessageGreen(), () => hideMessage())
    }

    function turnMessageGreen() {
        let el = document.getElementById("cpfInput");
        el.style.color = "green";
    }

    function hideMessage() {
        let el = document.getElementById("cpfInput");
        el.style.color = "";
    }

    const dayOfTheWeek = toUpperCaseInTheFirstLetter(moment().format('dddd'));

    return (
        <div class="entire-view">

            <header class="session-header">
                <div class="session-header-inner">
                    <span>
                        Business
                    </span>

                    <span
                        onClick={
                            () => {
                                localStorage.clear();
                                history.push('/signin/business');
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
                        <div class="greeting">Olá, {organization.name}!</div>
                        <div class="date-info">
                            <span>{dayOfTheWeek}, </span>
                            <span>{moment().format('LL')}</span>
                            <div>Digite o Cpf do colaborador a ser admitido</div>
                        </div>
                    </div>

                    <div class="container-form">
                        <div class="times">
                            <input
                                type="text"
                                onChange={e => setCpf(e.target.value)}
                                value={cpf}
                            />
                        </div>
                        <div id="cpfInput" className="msg-colaborator-admitted">Coloborador admitido!</div>
                        <div class="buttons">
                            <button
                                onClick={admitColaborator}
                            >Admitir Colaborador</button>
                        </div>
                    </div>

                </form>
            </div>


            <footer class="session-footer"></footer>

        </div>

    )
}

export default HomeBusiness;