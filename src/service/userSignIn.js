import axios from 'axios';
import getUserInfo from './getUserInfo';


const url = 'http://localhost:8080/authenticate';

const userSignIn = (data, goHome, error) => {
    axios.post(url, data)
        .then(res => {
            console.log('Success Authenticating.')
            localStorage.setItem('jwt', JSON.stringify(res.data))
            getUserInfo(res.data.token);
        })
        .then(() => {
            setTimeout(() => goHome(), 300)
        })
        .catch(res => {
            console.log('Usuário ou senha incorretos.')
            error()
        })
}

export default userSignIn;