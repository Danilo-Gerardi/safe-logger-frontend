import axios from 'axios';
import getOrganizationInfo from './getOrganizationInfo';


const url = 'http://localhost:8080/authenticate';

const organizationSignIn = (data, goHome, error) => {

    axios.post(url, data)
        .then(res => {
            //console.log('Success Authenticating.')
            // localStorage.setItem('jwt', JSON.parse(res.data))
            // console.log(localStorage.getItem('jwt'))
            // console.log(res.data.token);
            getOrganizationInfo(res.data.token, goHome);
        })
        .then(() => console.log(localStorage.getItem('jwt')))

        .catch(res => {
            console.log('Email de organização ou senha incorretos.')
            error()
        })
}

export default organizationSignIn;