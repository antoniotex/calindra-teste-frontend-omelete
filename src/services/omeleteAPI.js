import axios from 'axios'

const omeleteAPI = axios.create({
    baseURL: 'https://store.omelete.com.br'
})

export default omeleteAPI