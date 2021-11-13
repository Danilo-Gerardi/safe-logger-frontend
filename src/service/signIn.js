import axios from 'axios';
import getUserInfo from './getUserInfo';
import getOrganizationInfo from './getOrganizationInfo';


const url = 'http://localhost:8080/authenticate';

const signIn = (data, goHome, error) => {
    axios.post(url, data)
        .then(res => {
            console.log('Success Authenticating.')
            getUserInfo(res.data.token);
            getOrganizationInfo(res.data.token);
            goHome();
        })
        .catch(res => {
            console.log('Usuário ou senha incorretos.')
            error()
        })
}

export default signIn