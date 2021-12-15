import axios from 'axios';

const getTodayLogs = (resolve, organizationDocument, token) => {

    const url = process.env.REACT_APP_BACK_END_API + `/v1/log/${organizationDocument}/today`;

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