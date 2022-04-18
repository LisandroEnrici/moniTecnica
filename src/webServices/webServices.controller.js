import urlWebServices from "./servicesUrl.enum";

//retorna todas las solicitudes de prestamo
export const getApplications = async function () {
    const url = urlWebServices.apiApplications;

    let result = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
        .then(res => res.json())
        .then(data => { return { data: data, ok: true } })
        .catch(error => { console.error('Error:', error); return { data: {}, ok: false } })
    return (result)
};

//Evalúa la solicitud de préstamo a un dni
export const scorePerson = async function (dni) {
    const url = urlWebServices.scorePerson + dni;

    let result = await fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
        .then(res => res.json())
        .then(data => { return data })
        .catch(error => { console.error('Error:', error); return { has_error: true } })
    return (result)
};

//Evalúa la solicitud de prestamo y almacena los datos
export const createApplication = async function (data) {
    const { name, last, genre, email, dni } = data
    const status = await scorePerson(dni)
    if (status.has_error) {
        return { data: {}, ok: false }
    } else {
        //Transforma el status para almacenarlo
        const loanStatus = status.status === "approve" ? "APROVED" : status.status === "rejected" ? "REJECTED" : "UNKNOWN"

        //Almacena los datos de la solicitud
        const url = urlWebServices.apiApplications
        const bodyData = {
            'name': name,
            'last': last,
            'email': email,
            'genre': genre,
            'dni': dni,
            'loanStatus': loanStatus
        }
        
        let result = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(bodyData)
        })
            .then(res => res.json())
            .then(data => { return { data: {}, ok: true } })
            .catch(error => { console.error('Error:', error); return { data: {}, ok: false } })
        return (result)
    }

}