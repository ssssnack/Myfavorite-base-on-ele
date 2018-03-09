<template>
 <el-menu :default-active="activeIndex" 
 class="el-menu-demo"
 mode="horizontal"
 @select="handleSelect"
 :router="true">
    <el-menu-item index="movies" > 电影</el-menu-item>
    <el-menu-item index="books"> 图书</el-menu-item>
    <el-menu-item index="recommend"> 资讯</el-menu-item>


 </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 'movies'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
};
</script>

<style>

</style>
