import axios from 'axios';

const getCollaborator = (resolve, userDocument, token) => {

    const url = process.env.REACT_APP_BACK_END_API + `/v1/organization/collaborator/${userDocument}`;

    axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            console.log('Erro ao obter as informações do collaborador.');
        })
}

export default getCollaborator;