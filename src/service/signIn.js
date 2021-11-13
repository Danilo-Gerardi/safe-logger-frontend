import axios from 'axios';
import getUserInfo from './getUserInfo';
import jwtDecode from 'jwt-decode';

const url = 'http://localhost:8080/authenticate';

const signIn = (data) => {
    axios.post(url, data)
        .then(res => {
            console.log('Success Authenticating.')
            console.log(jwtDecode(res.data.token))

            getUserInfo(res.data.token);


        })
        .catch(res => {
            console.log('Usuário ou senha incorretos.')
        })
}

export default signIn