<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand @click="goHome" href="#">
       <b-icon-brightness-fill-high></b-icon-brightness-fill-high>
      Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
        <b-nav-item  @click="gotocart" active>Shopping Cart </b-nav-item>
    

        <b-nav-item-dropdown right >
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Admin</em>
          </template>
          <b-dropdown-item v-b-modal.modal-1>Sign in</b-dropdown-item>
          
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


  <div>
  

  <b-modal hide-footer ref="my-modal"  id="modal-1" title="Admin">
     <b-form @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="User:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-1"
          v-model="form.user"
          type="text"
          required
          placeholder="Enter User"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.pass"
           type="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>



      <b-button type="submit" block variant="primary">Submit</b-button>
     
    </b-form>
   
    
  </b-modal>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cart:'',
      form: {
          user:'',
          pass:''
        }
    }
  },
  created(){
    if (JSON.parse(localStorage.getItem('products'))) {
      this.cart = JSON.parse(localStorage.getItem('products'))
    } else {
      return
    }
  },
  methods:{
    gotocart(){
      this.$router.push('/cart')
    },
    goHome(){
      this.$router.push('/')
    },
    onSubmit(e){
      e.preventDefault();
      if (this.form.user=='admin' && this.form.pass=='admin') {
        this.$refs['my-modal'].hide()
        this.$router.push('/admin')
        localStorage.setItem('admin',JSON.stringify('true'))
      } else {
        return false;
      }
    }
  }
}
</script>


<style>

</style>