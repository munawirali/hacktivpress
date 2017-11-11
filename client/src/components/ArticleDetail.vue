<template lang="html">
  <div class="">
    <div class="col-md-4">
      <Widget :articles=articles></Widget>
    </div>
    <div class="col-md-8">
      <div class="list-group-item list-group-item-action">
        <h4 class="list-group-item-heading">{{ article.title }}</h4><br>
        <img v-bind:src="article.imageUrl" class="img-responsive"><br>
        <div class="list-group-item list-group-item-action content">
          <p class="list-group-item-text">{{ article.content }} asdfasdf</p>
        </div>
        </div>
      </div>
    </div>
    </div>
  <!-- </div> -->
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Widget from '@/components/Widget'
export default {
  props: ['id'],
  components: {
    Widget
  },
  methods: {
    ...mapActions([
      'getAllArticle',
      'getDetailArticle'
    ])
  },
  computed: {
    ...mapState([
      'articles',
      'article'
    ])
  },
  mounted () {
    this.getDetailArticle(this.id)
    this.getAllArticle()
  },
  watch: {
    id (newId) {
      this.getDetailArticle(newId)
    }
  }
}
</script>

<style lang="css">
img {
  border-color: #054b5d;
}
.list-group-item.list-group-item-action.content {
  border-color: #054b5d;
}
</style>
