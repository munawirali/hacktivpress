<template lang="html">
  <div class="">
    <div class="list-group-item list-group-item-action widget">
      <h4>Lates Articles</h4>
    </div>
    <div v-for="(article, index) in articles" class="list-group">
      <router-link :to="'/articles/'+ article._id" class="list-group-item list-group-item-action">
        <h5 class="list-group-item-heading">{{ article.title }}</h5>
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
.list-group-item.list-group-item-action.widget {
    background-color: #054b5d;
}
.list-group {
  margin-bottom: 0px;
}
</style>
