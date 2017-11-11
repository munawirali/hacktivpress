<template lang="html">
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li v-if="userLogin.length==0">
        </li>
        <li v-else>
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><Login :frmLogin=frmLogin @emitLogin="signIn"></Login></li>
        <li v-if="userLogin.length==0"><a @click="setBlankForm" href="" data-toggle="modal" data-target="#login">Login</a></li>
        <li v-else><a @click="logout" href="">Logout</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><Signup :frmSignup=frmSignup @emitSignup="addUser"></Signup></li>
        <li v-if="userLogin.length==0">
          <a @click="setBlankForm" :disabled="!userLogin.length" href="" data-toggle="modal" data-target="#signup">Signup</a>
        </li>
        <li v-else>
          <a href="#">Username : {{ userLogin.username }}</a>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import Login from '@/components/login'
import Signup from '@/components/Signup'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    Login,
    Signup
  },
  data () {
    return {
      frmSignup: {
        username: '',
        password: '',
        email: '',
        imageUrl: ''
      },
      frmLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addUser',
      'signIn',
      'getUserActive'
    ]),
    logout () {
      // console.log('asdfasd')
      localStorage.removeItem('HCKPRS-Token')
    },
    setBlankForm () {
      this.frmSignup.username = ''
      this.frmSignup.password = ''
      this.frmSignup.email = ''
      this.frmLogin.username = ''
      this.frmLogin.password = ''
    }
  },
  computed: {
    ...mapState([
      'userLogin'
    ])
  },
  mounted () {
    this.getUserActive()
  }
}
</script>

<style lang="css">
</style>
