import axios from 'axios';

const getTodayLogs = (organizationDocument, resolve) => {

    const url = process.env.REACT_APP_BACK_END_API + '/v1/log/${organizationDocument}/today';

    // const organizationDocument

    const token = JSON.parse(localStorage.getItem('jwt')).token;

    axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            console.log('Erro ao obter os registro de hoje.');

        })
}

export default getTodayLogs;