import axios from 'axios';
import signIn from './signIn'


const url = 'http://localhost:8080/v1/organization';

const createUser = (organization) => {
    axios.post(url, organization)
        .then(res => {
            console.log('Conta criada com êxito!')
            signIn({
                email: organization.email,
                password: organization.password
            });

        })
        .catch(err => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
            console.log(err)
        })
}

export default createUser;