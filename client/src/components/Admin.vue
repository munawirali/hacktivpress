<template>
  <div class="">
    <PostArticle :frmArticle=frmArticle  @emitArticle="addArticle"></PostArticle>
    <UpdateArticle :frmArticle=frmArticle  @emitArticle="updateArticle"></UpdateArticle>
    <button @click="resetFrmArticle()" type="button" name="button" class="btn btn-primary" data-toggle="modal" data-target="#postArticle">Add Article</button>
    <table class="table">
      <thead>
        <th></th>
        <th>Category</th>
        <th>Title</th>
        <th>Content</th>
        <th>Author</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(article, index) in articles">
          <td>
            <img v-bind:src="article.imageUrl" alt="" style="width:100px">
          </td>
          <td>{{ article.category }}</td>
          <td>{{ article.title }}</td>
          <td>{{ article.content.substring(0,150) }} ...</td>
          <td>{{ article.author.username }}</td>
          <td>
            <a href="#" @click="editData({_id:article._id, category:article.category, title:article.title,content:article.content,imageUrl:article.imageUrl, author:userLogin.userId})" data-toggle="modal" data-target="#updateArticle">Edit</a> |
            <a href="#" @click="removeArticle(article._id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import PostArticle from '@/components/PostArticle'
  import UpdateArticle from '@/components/UpdateArticle'
  export default {
    components: {
      PostArticle,
      UpdateArticle
    },
    data () {
      return {
        isEdit: false,
        frmArticle: {
          _id: '',
          title: '',
          category: '',
          content: '',
          imageUrl: '',
          author: ''
        }
      }
    },
    methods: {
      ...mapActions([
        'getAllArticle',
        'addArticle',
        'removeArticle',
        'updateArticle',
        'getUserActive',
        'getArticleByAuthor'
      ]),
      editData (data) {
        // console.log('masuk ', this.frmArticle)
        this.frmArticle._id = data._id
        this.frmArticle.category = data.category
        this.frmArticle.title = data.title
        this.frmArticle.content = data.content
        this.frmArticle.imageUrl = data.imageUrl
        this.frmArticle.author = data.author
        this.isEdit = true
      },
      resetFrmArticle () {
        this.frmArticle._id = ''
        this.frmArticle.title = ''
        this.frmArticle.content = ''
        this.frmArticle.imageUrl = ''
        this.frmArticle.category = ''
        this.frmArticle.author = this.userLogin.userId
        this.isEdit = false
      },
      submitData (data) {
        if (this.isEdit) {
          this.updateArticle(data)
          // this.isEdit = false
        } else {
          this.addArticle(data)
        }
      }
    },
    computed: {
      ...mapState([
        'articles',
        'userLogin'
      ])
    },
    mounted () {
      this.getAllArticle()
      this.getUserActive()
      // this.getArticleByAuthor()
      this.frmArticle.author = this.userLogin.userId
    },
    created () {
      // this.getAllArticle()
      this.getUserActive()
      // this.getArticleByAuthor()
      // console.log(this.userLogin)
      // this.getAllArticle()
    }
  }
</script>
