import axios from 'axios';


const url = process.env.REACT_APP_BACK_END_API + '/v1/organization';


const getOrganizationInfo = (token) => {
    axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            localStorage.setItem('organization', JSON.stringify(res.data));
        })
        .catch(err => {
            console.log('Erro ao obter dados da organização.')
            console.log(err)
        })
}

export default getOrganizationInfo;