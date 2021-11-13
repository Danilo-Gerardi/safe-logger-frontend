import axios from 'axios';


const url = 'http://localhost:8080/v1/user';


const getUserInfo = async (token) => {
    await axios.get(url, {
        headers: { 'Authorization': "Bearer " + token }
    })
        .then(res => {
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))


        })
        .catch(err => {
            console.log('Erro ao obter dados do usuário.')
            console.log(err)
        })
}

export default getUserInfo;