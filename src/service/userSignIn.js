import axios from 'axios';
import getUserInfo from './getUserInfo';
import getOrganizationInfo from './getOrganizationInfo';


const url = process.env.REACT_APP_BACK_END_API + '/authenticate';

const signIn = (data, goHome, goHomeBusiness,error) => {
    console.log(process.env.REACT_APP_BACK_END_API)
    axios.post(url, data)
        .then(res => {
            console.log('Success Authenticating.')
            localStorage.setItem('jwt', JSON.stringify(res.data))

            if (res.data.role === "USER") {
                getUserInfo(res.data.token);
            }

            if (res.data.role === "ORGANIZATION") {
                getOrganizationInfo(res.data.token);
            }
        })
        .then(() => {
            setTimeout(() => {
                if (JSON.parse(localStorage.getItem('jwt')).role === "USER") {
                    goHome();
                }
                if (JSON.parse(localStorage.getItem('jwt')).role === "ORGANIZATION") {
                    goHomeBusiness();
                }
            }, 600)
        })
        .catch(res => {
            console.log('E-mail ou senha incorretos.')
            error()
        })
}

export default signIn;