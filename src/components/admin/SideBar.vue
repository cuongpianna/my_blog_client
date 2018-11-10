<template>
    <ul class="admin">
        <li class="sidebar-header">
            <a href="#">Dashboard</a>
        </li>

        <li class="sidebar-body">
            <a href="#">Danh mục</a>
        </li>
        <li class="sidebar-body">
            <a href="#">Bài viết</a>
        </li>
        <li class="sidebar-body">
            <a href="#">Lượt xem</a>
        </li>
    </ul>
</template>

<style scoped>
.admin{
    padding: 0;
    margin: 0;
    width: 200px;
    list-style: none;

}

.sidebar-header{
    background-color: #2f353a !important;
    padding: 12px 16px;
}

.sidebar-body{
    padding: 12px 16px;
}

.admin a{
    font-size: 13px;
    font-weight: 100;
    margin: 0;
    color: white;
    text-decoration: none;   
}
</style>

