<template>
  <div>
    <section v-if="currentUser">
      <div class="row">
        <div class="col-xs-12 col-lg-6">
          <pp-new-pizza></pp-new-pizza>
        </div>
        <div class="col-xs-12 col-lg-6">
          <h3>Menu</h3>
          <table class="table table-hover">
            <thead class="thead-default">
              <tr>
                <th>Item</th>
                <th>Remove from menu</th>
              </tr>
            </thead>
            <tbody v-for="item in getMenuItems" :key="item['.key']">
              <tr>
                <td>{{item.name}}</td>
                <td>
                  <button
                    class="btn btn-sm btn-outline-danger"
                    @click="removeMenuItem(item['.key'])"
                  >x</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-sm-12">
        <h3>Current orders: {{numberOfOrders}}</h3>
        <table class="table" v-for="(orders,index) in getOrders" :key="orders['.key']">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <div class="order-number">
              <strong>
                <em>Order Number: {{index + 1}}</em>
              </strong>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="removeOrderItem(orders['.key'])"
              >x</button>
            </div>
            <tr v-for="orderItems in orders">
              <td>{{orderItems.name}}</td>
              <td>{{orderItems.size}}</td>
              <td>{{orderItems.quantity}}</td>
              <td>{{orderItems.price | currency}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr />
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <pp-login></pp-login>
      </div>
    </div>
  </div>
</template>

<script>
import NewPizza from "./NewPizza";
import Login from "./Login";
import { mapGetters } from "vuex";
import { dbMenuRef, dbOrdersRef } from "../firebaseConfig";
export default {
  components: {
    ppNewPizza: NewPizza,
    ppLogin: Login
  },
  methods: {
    removeMenuItem(key) {
      dbMenuRef.child(key).remove();
    },
    removeOrderItem(key) {
      dbOrdersRef.child(key).remove();
    }
  },
  computed: {
    // getMenuItems() {
    //   // return this.$store.state.menuItems;
    //   return this.$store.getters.getMenuItems;
    // },
    // numberOfOrders(){
    //   return this.$store.getters.numberOfOrders;
    // }
    ...mapGetters([
      // ใช้ตัวนี้แทน getters ทั้งหมด
      "getMenuItems",
      "numberOfOrders",
      "getOrders",
      "currentUser"
    ])
  },
  // beforeRouteEnter: (to, from, next) => {
  //   next(vm => {
  //     alert("Hello " + vm.name);
  //   });
  // }
  beforeRouteLeave(to, from, next) {
    if (confirm("Have you remembered to log out") == true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style>
  .order-number {
    margin: 10px 0;
  }

</style>