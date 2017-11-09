<template lang="html">
  <div class="">
    <!-- <h1>welcome home</h1> -->
    <div v-for="(article, index) in articles" class="list-group">
      <div class="col-md-2">
        <img v-bind:src="article.imageUrl" alt="" style="width:100px">
      </div>
      <div class="col-md-10">
        <a href="#" class="list-group-item list-group-item-action">
          <h4 class="list-group-item-heading">{{ article.title }}</h4>
          <p class="list-group-item-text">{{ article.content }} asdfasdf</p>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'getAllArticle'
      ])
    },
    computed: {
      ...mapState([
        'articles'
      ])
    },
    created () {
      this.getAllArticle()
      console.log(this.articles)
    }
  }
</script>

<style lang="css">
</style>
