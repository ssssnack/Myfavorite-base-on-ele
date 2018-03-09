<template>
 <div>
推荐电影
 </div>
</template>

<script>
import {getMovies} from 'api/movies'
export default {
  created() {
      this._getMovies()
  },
  data() {
    return {};
  },
  components: {},
  methods: {
      _getMovies() {
         getMovies().then((res) =>{
            console.log(res.subjects)
         })
      }
  }
};
</script>

<style>

</style>
