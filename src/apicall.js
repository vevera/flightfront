import axios from 'axios'


async function postData(url, data) {
    console.log(url)
    console.log(data)
    try {
        const response = await axios.post(url, data)
        return response
    } catch (error) {
        console.log(error.message)
    }
}


export { postData }