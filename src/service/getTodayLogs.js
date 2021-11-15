import axios from 'axios';

const getTodayLogs = (resolve) => {

    const organizationDocument = JSON.parse(localStorage.getItem('user'))
        .organizations[0].document ? JSON.parse(localStorage.getItem('user'))
            .organizations[0].document : "";

    const url = `http://localhost:8080/v1/log/${organizationDocument}/today`;

    const token = JSON.parse(localStorage.getItem('jwt')).token;


    console.log(url, token, organizationDocument)


    axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            console.log('Erro ao obter os registros de hoje.');
        })
}

export default getTodayLogs;