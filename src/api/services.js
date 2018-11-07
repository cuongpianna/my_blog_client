import api from './api'


export function getPost() {
  return api().get('http://127.0.0.1:5000/api/posts').then(
    res => res.data.data
  )
}
