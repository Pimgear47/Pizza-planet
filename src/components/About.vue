<template>
  <div>
    <p>Click on the links below for more info:</p>
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="nav">
        <router-link :to="historyLink" tag="li">
          <a class="nav-link">Our history</a>
        </router-link>
        <router-link :to="contactLink" tag="li">
          <a class="nav-link">Contact us</a>
        </router-link>
        <router-link :to="orderingGuideLink" tag="li">
          <a class="nav-link">Ordering guide</a>
        </router-link>
        <router-link :to="deliveryLink" tag="li">
          <a class="nav-link">Delivery</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
    data(){
        return{
            historyLink: '/history',
            contactLink: '/contact',
            orderingGuideLink: '/ordering-guide',
            deliveryLink: '/delivery'
        }
    }
}
</script>