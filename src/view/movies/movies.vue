<template>
 <div class="movie-panel">
   <h2 class="title">近期热门电影推荐</h2>
   
      <el-row :gutter="20" class="movie-list">
        <el-col :span="6">
          <el-row class="grid-content bg-purple" :gutter="10">
              <el-col :span="12">
                <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2515594937.jpg" alt="" width="115" height="173">
              </el-col>
              <el-col :span="12" class="text">
                <div class="title">水形物语</div>
                <div class="rate"> 7.3
                  <span class="small">分</span>
                  </div>
              </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
   
 </div>
</template>

<script>
import { getMovies } from "api/movies";
export default {
  created() {
    // this._getMovies()
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    _getMovies() {
      getMovies().then(res => {
        console.log(res.subjects);
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

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    .text {
      padding-top: 40px;
      margin-left: -15px;
      .title {
        font-size: 24px;
        color: #a2a7ad;
        text-align: center;
      }
      .rate {
        color: #a6924b;
        text-align: center;
        font-size: 20px;
        margin-top: 5px;
        font-weight: lighter;
        .small{
          font-size: 14px;
        }
      }
    }
  }
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 184px;
  padding-top: 5px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
