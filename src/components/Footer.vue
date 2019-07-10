<template>
  <footer class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="nav">
        <router-link :to="homeLink" tag="li">
          <a class="nav-link">home</a>
        </router-link>
        <router-link :to="aboutLink" tag="li">
          <a class="nav-link">about</a>
        </router-link>
        <router-link :to="adminLink" tag="li">
          <a class="nav-link">admin</a>
        </router-link>
      </ul>
    </nav>
  </footer>
</template>


<script>
export default {
    data(){
        return{
            homeLink: '/',
            aboutLink: '/about',
            adminLink: '/admin'
        }
    }
}
</script>