import axios from 'axios';

const url = 'http://localhost:8080/v1/organization/collaborator';

const admitCollaborator = (documents, successMessage, errorMessage) => {

    let token = localStorage.getItem('jwt');

    const headers = { 'Authorization': 'Bearer ' + token }

    axios.post(
        url, documents, { headers }
    )
        .then((res) => {
            console.log('Colaborador admitido com êxito!');
            successMessage();

        })
        .catch((err) => {
            console.log('Erro ao admitir colaborador');
            errorMessage();

        })
}

export default admitCollaborator;