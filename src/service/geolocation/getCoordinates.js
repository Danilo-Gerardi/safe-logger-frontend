const getCoordinates = (resolve) => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("passou aqui")
                resolve(position.coords.latitude, position.coords.longitude)
            },
            (error) => {
                console.log('passou aqui erro')
                console.log(error)
            }
        )
    } else {
        alert('Não é possível pegar localização.')
    }
}

export default getCoordinates;