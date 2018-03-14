<template>
<el-row :gutter="30" 
        class="list" 
        :mType="mType"
        v-loading.fullscreen.lock="loading">
        <el-col :span="6" 
        v-for="item in data" 
        class="list-item"
        @click.native="jump(item.url)">
          <el-row class="grid-content" :class="[mType]" :gutter="10" >
              <el-col :span="12">
                <img v-lazy="item.cover" width="115" height="173" v-if="mType==='bg-movie'">
                <img v-lazy="item.cover.url"  width="115" height="173" v-if="mType==='bg-book'">
              </el-col>
              <el-col :span="12" class="text">
                <div class="title" >{{item.title}}</div>
                <div class="rate"  v-if="mType==='bg-movie'"> {{item.rate}}
                  <span class="small">分</span>
                  </div>
                  <div class="rate"  v-if="mType==='bg-book'"> {{item.rating.value}}
                  <span class="small">分</span>
                  </div>
              </el-col>
          </el-row>
        </el-col>
      </el-row>
</template>

<script>
export default {
  //接受数据
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    mType: {
      type: String,
      default: "bg-movie"
    }
  },
  data() {
    return {
      loading: true
    };
  },
  watch: {
    data() {
      if (this.data) {
        this.loading = false;
      }
    }
  },
  methods: {
    jump(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped >
.list {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .list-item {
    border-radius: 4px;
    margin-bottom: 20px;
    
    .grid-content {
      cursor: pointer;
      .text {
        padding-top: 50px;
        margin-left: -15px;
        .title {
          font-size: 20px;
          color: #a2a7ad;
          text-align: center;
          font-weight: lighter;
        }
        .rate {
          color: #a6924b;
          text-align: center;
          font-size: 20px;
          margin-top: 15px;
          font-weight: lighter;
          .small {
            font-size: 14px;
          }
        }
      }
    }
  }
}

.bg-movie {
  background: #f2f6fc;
}
.bg-book {
  background: #f2f6fc;
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
