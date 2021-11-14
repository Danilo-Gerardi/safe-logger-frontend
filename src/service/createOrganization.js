import axios from 'axios';
import organizationSignIn from './organizationSignIn'


const url = 'http://localhost:8080/v1/organization';

const createOrganization = (organization, goHome, error) => {
    axios.post(url, organization)
        .then(res => {
            organizationSignIn({
                email: organization.email,
                password: organization.password
            }, goHome, error);
        })
        .then(() => console.log('Conta criada com êxito!'))
        .catch(err => {
            console.log('Ocorreu um erro ao criar a conta. Por favor, tente mais tarde')
        })
}

export default createOrganization;