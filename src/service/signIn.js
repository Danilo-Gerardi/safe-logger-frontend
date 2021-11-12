import axios from 'axios';
import getUserInfo from './getUserInfo';

const url = 'http://localhost:8080/authenticate';

const signIn = (data) => {
    axios.post(url, data)
        .then(res => {
            //getUserInfo(res.data.token);
            localStorage.setItem('jwt', res.data.token)

        })
        .catch(res => {
            console.log('Usuário ou senha incorretos.')
        })
}

export default signIn