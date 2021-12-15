import axios from 'axios';


const admitCollaborator = (document, successMessage, errorMessage) => {

    const userDocument = document.userDocument;

    const url = process.env.REACT_APP_BACK_END_API + `/v1/organization/collaborator/${userDocument}`;

    let token = JSON.parse(localStorage.getItem('jwt')).token;

    const headers = { 'Authorization': 'Bearer ' + token }

    axios.post(
        url, null, { headers: headers }
    )
        .then((res) => {
            console.log('Colaborador admitido com êxito!');
            successMessage();

        })
        .catch((err) => {
            console.log('Erro ao admitir colaborador');
            console.error(err.response.data.message);
            errorMessage(err.response.data.message);

        })
}

export default admitCollaborator;