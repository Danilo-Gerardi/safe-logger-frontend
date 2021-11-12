import axios from 'axios';
import signIn from './signIn'


const url = 'http://localhost:8080/v1/user';

const createUser = (user) => {
    axios.post(url, user)
        .then(res => {
            console.log('Conta criada com êxito!')
            signIn({
                email: user.email,
                password: user.password
            });
            return res;
        })
        .catch(res => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
            console.log(res)
        })
}

export default createUser;