import axios from 'axios';
import signIn from './signIn'


const url = 'http://localhost:8080/v1/user';

const createUser = (user, goHome, error) => {
    axios.post(url, user)
        .then(res => {
            console.log('Conta criada com êxito!')
            signIn({
                email: user.email,
                password: user.password
            });
            goHome();

        })
        .catch(err => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
            error()

        })
}

export default createUser;