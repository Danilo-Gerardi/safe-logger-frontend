import axios from 'axios';
import getOrganizationInfo from './getOrganizationInfo';


const url = process.env.REACT_APP_BACK_END_API + '/authenticate';

const organizationSignIn = (data, goHome, error) => {
    axios.post(url, data)
        .then(res => {
            console.log('Organization Success Authenticating.')
            localStorage.setItem('jwt', JSON.stringify(res.data))
            getOrganizationInfo(res.data.token);
        })
        .then(() => {
            setTimeout(() => goHome(), 300)
        })
        .catch(res => {
            console.log('Email de organização ou senha incorretos.')
            error()
        })
}

export default organizationSignIn;