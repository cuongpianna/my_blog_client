<template>
    <div class="main">
        <header-admin class="header-admin"></header-admin>
        <div class="admin-body">
            <side-bar-admin class="sidebar-admin"></side-bar-admin>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import SideBarAdmin from '@/components/admin/SideBar'
import HeaderAdmin from '@/components/admin/Header'
export default {
    name: 'Admin',
    components: {SideBarAdmin, HeaderAdmin}
}
</script>

<style>
    .admin-body{
        display: flex
    }
    .header-admin{
        width: 200px;
        height: 55px;
    }
    .sidebar-admin{
        width: 200px;
        background-color: #2f353a;
        height: 100%;
        color: white;
        /* padding: 12px 16px; */
    }
</style>

