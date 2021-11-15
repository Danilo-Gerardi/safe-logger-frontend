import axios from 'axios';

const getAllUserLogs = (callBack) => {

    const organizationDocument = JSON.parse(localStorage.getItem('user'))?.organizations[0]?.document;

    const url = `http://localhost:8080/v1/log/` + organizationDocument;

    const token = JSON.parse(localStorage.getItem('jwt')).token;

    axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            callBack(res.data.loggingTimes);
        })
        .catch(err => {
            console.log('Erro ao obter os registro de hoje.');
        })
}

export default getAllUserLogs;