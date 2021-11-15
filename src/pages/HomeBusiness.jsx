import React, { useState } from "react";
import { useHistory } from 'react-router';
import moment from 'moment';

import 'moment/locale/pt-br'
import '../styles/session.scss';
import '../styles/home.scss';
import { useAuth } from "../providers/auth";
import admitCollaborator from "../service/admitCollaborator";
import { cpf } from 'cpf-cnpj-validator';


const HomeBusiness = props => {

    const [classe, setClasse] = useState('')
    const { organization } = useAuth();
    const [cpfNum, setCpfNum] = useState('');
    const history = useHistory();

    function toUpperCaseInTheFirstLetter(str) {
        let array = str.split('');
        array[0] = array[0].toUpperCase();
        return array.join('');
    }

    function admitColaborator(e) {
        e.preventDefault();
        admitCollaborator(
            { userDocument: cpfNum },
            onSuccessMessage,
            onErrorMessage)
    }

    function onSuccessMessage() {
        let el = document.getElementById("cpfInput");
        el.style.color = "green";
    }

    function onErrorMessage(errorMessage) {
        let el = document.getElementById("cpfInput");
        el.style.color = "black";
        if (errorMessage === "No message available") {
            el.innerText = "";
        } else if (errorMessage === "Collaborator already admitted") {
            el.innerText = "Este usuário já é um colaborador.";
        } else if (errorMessage === "User does not exist") {
            el.innerText = "Colaborador não encontrado.";
        }
    }

    function validateCpf(cpfNumber) {
        setCpfNum(cpfNumber)
        setClasse("red-border")

        if (cpf.isValid(cpfNumber)) {
            setClasse("green-border")
        } else {
            setClasse("red-border")
        }
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
                        <div class="greeting">Olá, {
                            JSON.parse(localStorage.getItem('organization')).name
                        }!</div>
                        <div class="date-info">
                            <span>{dayOfTheWeek}, </span>
                            <span>{moment().format('LL')}</span>
                            <div>Digite o Cpf do colaborador a ser admitido</div>
                        </div>
                    </div>

                    <div class="container-form">
                        <div class="times">
                            <input
                                className={classe}
                                type="text"
                                onChange={e => validateCpf(e.target.value)}
                                value={cpfNum}
                                onClick={e => e.target.value = ""}
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