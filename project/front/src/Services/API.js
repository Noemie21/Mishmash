let baseUrl = 'http://127.0.0.1:7777'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const getQuote = async () => {

    let response = await fetch(`https://api.api-ninjas.com/v1/quotes}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'YOUR_API_KEY'
        }
    })

    let json = await response.json()

    return json.data

}

export const getLikes = async () => {

    let response = await fetch(`${baseUrl}/likes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    let json = await response.json()

    return json.data
}

export const editLikes = async () => {

    let response = await fetch(`${baseUrl}/likes`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json
}