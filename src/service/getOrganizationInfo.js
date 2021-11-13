import axios from 'axios';


const url = 'http://localhost:8080/v1/organization';


const getOrganizationInfo = async (token, goHome) => {
    await axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            console.log(res.data)
            localStorage.setItem('organization', JSON.stringify(res.data));
            localStorage.setItem('jwt', token);

        })
        .then(() => goHome())
        .catch(err => {
            console.log('Erro ao obter dados da organização.')
            console.log(err)
        })
}

export default getOrganizationInfo;