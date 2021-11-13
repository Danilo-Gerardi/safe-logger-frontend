import axios from 'axios';
import getUserInfo from './getUserInfo';
import getOrganizationInfo from './getOrganizationInfo';


const url = 'http://localhost:8080/authenticate';

const signIn = (data) => {
    axios.post(url, data)
        .then(res => {
            console.log('Success Authenticating.')
            getUserInfo(res.data.token);
            getOrganizationInfo(res.data.token);
        })
        .catch(res => {
            console.log('Usuário ou senha incorretos.')
        })
}

export default signIn