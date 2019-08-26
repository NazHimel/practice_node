<template>
<div>
  <b-navbar toggleable="lg" b-navbar type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav b-navbar type="dark" variant="dark">
        <ul class="nav navbar-nav">
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link to="/add-user" v-if="!loggedin">Register</router-link></li>
            <li><router-link to="/login" v-if="!loggedin">Login</router-link></li>
            <li><router-link to="/chat" v-if="loggedin">Chat</router-link></li>
          </ul>
         
        <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>
       

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" v-if="loggedin" @click="onlogout">Sign Out</b-dropdown-item>
           
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
</div>

  <!-- <div>

    <nav class="navbar navbar-default" role="navigation">
      <div class="container">

        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>
            A sample project
          </a>

          
        </div>

      </div>
    </nav>
    
      
    
  </div> -->
</template>

<script>
export default {
  name: 'app',
  
  data () {
      return {
        
        user: JSON.parse(localStorage.getItem('user')),
         }
  },
  created () {
    this.loggedin()
  },

  watch: {
    '$route': 'loggedin'
  },

  method: {
    
    onlogout(e){
     
     
     localStorage.removeItem('jwt');
     this.$router.push('Home');

    },
    loggedin(){
    if (user.localStorage.getItem('jwt')!=null) return true;
    else return false;
    
    
  },
  
}
}
</script>