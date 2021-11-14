import axios from 'axios';
import userSignIn from './userSignIn'


const url = 'http://localhost:8080/v1/user';

const createUser = (user, goHome, error) => {
    axios.post(url, user)
        .then(res => {
            userSignIn({
                email: user.email,
                password: user.password
            }, goHome, error);
        })
        .then(() => console.log('Conta criada com êxito!'))
        .catch(err => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
        })
}

export default createUser;