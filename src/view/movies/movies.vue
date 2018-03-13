<template>
 <div class="movie-panel">
   <h2 class="title">近期热门电影推荐</h2>
      <m-list :data="movies"></m-list>
 </div>
</template>

<script>
import MList from "components/mList/mList"
import { getMovies } from "api/movies";
export default {
  created() {
    this._getMovies()
  },
  data() {
    return {
      movies: []
    };
  },
  components: {
    MList
  },
  methods: {
    _getMovies() {
      getMovies().then(res => {
        this.movies = res.subjects;
      });
    }
  }
};
</script>

<style lang="scss" scoped >
.movie-panel {
  margin-top: 10px;

  .title {
    font-family: "PingFang SC";
    font-size: 15px;
    color: #333;
    font-weight: lighter;
    padding: 10px 0px;
  }
}

</style>
