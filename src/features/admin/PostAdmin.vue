<template>
    <div class="admin-content">
        <div class="admin-content-header">
            <h4>Admin / Post</h4>
        </div>
        <div class="admin-content-body">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Tiêu đề</th>
                        <th>Tóm tắt</th>
                        <th>Nội dung</th>
                        <th>Ngày đăng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(p, index) in posts" v-bind:key="p.id">
                        <td>{{p.id}}</td>
                        <td>{{p.title}}</td>
                        <td>{{p.sub_body}}</td>
                        <td>{{p.body}}</td>
                        <td>{{p.time_stamp}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: 'PostsAdmin',
    computed: mapState({
        posts: state => state.posts
    }),
    beforeMount(){
        this.$store.dispatch('loadPosts')
    }
}
</script>

<style scoped>
    .admin-content{
        width: 100%;
    }
    .admin-content-header{
        background-color: #f7f7f7;
        padding: 12px 16px;
        border-bottom: 1px silver solid;
        border-top: 1px silver solid;
    }
    .admin-content-header h4{
        margin: 0;
    }
    .admin-content-body{
       background-color: aliceblue; 
       padding: 16px;
    }
</style>

