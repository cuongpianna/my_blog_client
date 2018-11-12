<template>
    <div class="create-post">
        <div class="admin-content-header">
            <h4>Admin / Post / Create</h4>
        </div>
        <div class="content">
            <form action="" class="form">
                <div class="post-header" style="margin-top:10px">
                    <input type="text" class="form-control" placeholder="Tiêu đề" style="margin-bottom:15px" v-model="title">
                    <select class="form-control" v-model="selected">
                        <option v-for="cate in categories" :value="cate.id">{{cate.name}}</option>
                    </select>
                </div>
                <div style="margin: 20px 0">
                    <mavon-editor v-model="body" ref=md @imgAdd="$imgAdd"/>
                </div>
                <button class="btn btn-primary" @click="upload">Đăng bài</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data (){
        return{
            selected: 2,
            body : '',
            title: '',
            img_file: {}
        }
    },
    beforeMount(){
        this.$store.dispatch('getCategories');
    },
    computed: mapState({
        categories: state => state.categories,
    }),
    methods: {
        createPost(){
            // this.$store.dispatch('createPost', {
            //     title: this.title,
            //     body: this.body,
            //     category_id: this.selected
                            console.log(this.title);
                            console.log(this.body);
        },
        $imgAdd(pos, $file){
            this.img_file[pos] = $file;
        },
        upload($e){
            var formdata = new FormData ();
            for(var _img in this.img_file ){
            formdata.append(_img, this.img_file[_img]);
            this.$store.dispatch('createPost', formdata)
            .then((res)=>{
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
        }}
    }
    
}
</script>


<style scoped>
    .create-post{
        width: 100%;
    }
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

    .content{
        padding: 12px 16px;
    }
</style>
