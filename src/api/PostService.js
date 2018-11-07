import Api from './api'

export default{
  getPost (){
     return Api().get('http://127.0.0.1:5000/api/posts');
  }
}
