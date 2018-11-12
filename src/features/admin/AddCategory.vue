<template>
    <div class="add-category">
        <form action="">
            <div class="form-group">
                <label for="name">Thể loại</label>
                <input type="text" class="form-control" id="name" v-model="name">
                {{name}}
            </div>
            <button type="submit" class="btn btn-primary" @click="createCategory">Đăng</button>
        </form>
        <div>
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cate, index) in categories" v-bind:key="cate.id">
                        <td>{{cate.id}}</td>
                        <td>{{cate.name}}</td>
                        <td>{{cate.slug_name}}</td>
                        <td>
                            <a href="#">
                                <i class="fas fa-edit"></i>
                            </a>
                            <i class="fas fa-trash" style="color:red" @click="deleteCategory(cate.id)"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    data(){
        return{
            name: '',
        }
    },
    methods: {
        createCategory (){
            this.$store.dispatch('createCategory', {
                name: this.name
            }).then(response =>{
                console.log(response);
                this.$store.dispatch('getCategories');
            }).catch(error => {
                console.log(error.response.data.msg)
            })
        },
        deleteCategory(id){
            this.$store.dispatch('deleteCategory', id)
            .then(response =>{
                console.log(response);
                this.$store.dispatch('getCategories');
            })
        }
    },
    beforeMount(){
        this.$store.dispatch('getCategories')
    },
    computed: mapState({
        categories: state => state.categories
    })
}
</script>

<style>
    .add-category{
        padding: 12px 16px;
    }
</style>

