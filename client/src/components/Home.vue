<template lang="html">
  <div class="">
    <!-- <h1>welcome home</h1> -->

      <div class="col-md-4">
        <Widget :articles=articles></Widget>
      </div>
      <div class="col-md-8">
        <ArticleSummary :articles=articles></ArticleSummary>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import ArticleSummary from '@/components/ArticleSummary'
  import Widget from '@/components/Widget'
  export default {
    components: {
      ArticleSummary,
      Widget
    },
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
    }
  }
</script>

<style lang="css">
</style>
