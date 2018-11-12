import axios from 'axios'

const API_URL  = 'http://127.0.0.1:5000/api'

export function createCategory(category){
    return axios.post(`${API_URL}/category`, category)
}

export function getCategories(){
    return axios.get(`${API_URL}/categories`)
}

export function deleteCategory(id){
    return axios.delete(`${API_URL}/category/${id}`)
}

export function createPost(post){
    // return axios.post(`${API_URL}/upload`, post)
    return axios({
        url: API_URL+ '/upload',
        method: 'post',
        data: post,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

export function getPosts(){
    return axios.get(`${API_URL}/posts`)
}