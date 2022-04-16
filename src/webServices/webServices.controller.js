import urlWebServices from "./servicesUrl.enum";

//retorna todas las solicitudes de prestamo
export const getApplications = async function () {
    const url = urlWebServices.getApplications;
    
    let result = await fetch(url, {
        method: 'GET',
        mode: "cors"
    })
        .then(res => res.json())
        .then(data => { return { data: data, ok: true } })
        .catch(error => { console.error('Error:', error); return { data: {}, ok: false } })
    return (result)
};