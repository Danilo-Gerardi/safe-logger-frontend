import axios from 'axios';
import getCoordinates from './geolocation/getCoordinates';

const url = process.env.REACT_APP_BACK_END_API + '/v1/log/';

const logTime = (organizationDocument, token, resolve, reject) => {

    getCoordinates((latitude, longitude) => {

        let lat = latitude
        let long = longitude

        console.log(lat)
        console.log(long)

        const headers = { 'Authorization': "Bearer " + token }

        const body = {
            organizationDocument: organizationDocument,
            latitude: lat,
            longitude: long
        }

        axios.post(url, body, { headers })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log('Erro ao obter os registros de hoje.');
                console.error(err.response.data);
                reject(err)
            })
    });
}

export default logTime;