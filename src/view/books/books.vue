<template>
 <div class="book-panel">
  <h2 class="title">最受关注图书推荐 / 虚构类</h2>
    <m-list :data="books" :mType="mType"></m-list>
 </div>
</template>

<script>
import MList from 'components/mList/mList'
import {getXgBooks} from 'api/movies'
export default {
  created() {
    this._getXgBooks()
  },
  data() {
    return {
      books:[],
      mType: 'bg-book'
    };
  },
  components: {
    MList
  },
  
  methods:{
    _getXgBooks() {
      getXgBooks().then(res =>{
        this.books = res.subject_collection_items
      })
    }
  }
};
</script>

<style lang="scss" scoped >
.book-panel {
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
