<template lang="html">
  <div class="">
    <div v-for="(article, index) in articles" class="list-group">
      <router-link :to="'/articles/'+ article._id" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-md-2">
            <img v-bind:src="article.imageUrl" alt="" style="width:100px; height:100px" class="img-responsive">
          </div>
          <div class="col-md-10">
            <h4 class="list-group-item-heading">{{ article.title }}</h4>
            <p class="list-group-item-text">{{ article.content.substring(0,150) }}... </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['articles']
}
</script>

<style lang="css">
.list-group {
    margin-bottom: 0;
}
</style>
