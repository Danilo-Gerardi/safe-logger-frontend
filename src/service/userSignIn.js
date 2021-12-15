import axios from 'axios';
import getUserInfo from './getUserInfo';


const url = process.env.REACT_APP_BACK_END_API + '/authenticate';

const userSignIn = (data, goHome, error) => {
    console.log(process.env.REACT_APP_BACK_END_API)
    axios.post(url, data)
        .then(res => {
            console.log('Success Authenticating.')
            localStorage.setItem('jwt', JSON.stringify(res.data))
            getUserInfo(res.data.token);
        })
        .then(() => {
            setTimeout(() => goHome(), 600)
        })
        .catch(res => {
            console.log('Usuário ou senha incorretos.')
            error()
        })
}

export default userSignIn;