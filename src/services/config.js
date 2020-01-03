import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://apirest-produto-gar.herokuapp.com/api/'
})