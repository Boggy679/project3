<template>
   <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      img-src= "https://images.unsplash.com/photo-1603117031430-3c117b92ed00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80"
    ></b-carousel-slide>
        <b-carousel-slide
        img-src="https://images.unsplash.com/photo-1591754060004-f91c95f5cf05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        ></b-carousel-slide>
            <b-carousel-slide
            img-src="https://images.unsplash.com/photo-1457573557536-6b4b6ca9a05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      
    }
  }
</script>

<style >
 
 
</style>