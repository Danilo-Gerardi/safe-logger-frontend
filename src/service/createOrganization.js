import axios from 'axios';
import organizationSignIn from './organizationSignIn'


const url = 'http://localhost:8080/v1/organization';

const createOrganization = (organization) => {
    axios.post(url, organization)
        .then(res => {
            console.log('Conta criada com êxito!')
            organizationSignIn({
                email: organization.email,
                password: organization.password
            });

        })
        .catch(err => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
            console.log(err)
        })
}

export default createOrganization;