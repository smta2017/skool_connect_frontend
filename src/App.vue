<template>
    <!-- Preloader Start Here -->
   <!-- <div id="preloader"></div>-->
    <!-- Preloader End Here -->
    <div id="wrapper" class="wrapper bg-ash">
        
       <!-- Header Menu Area Start Here -->
        <HeaderMenu />
        <!-- Header Menu Area End Here -->

        <!-- Page Area Start Here -->
        <PageArea />
        <!-- Page Area End Here -->
    </div>
</template>


<script>
// @ is an alias to /src
import HeaderMenu from '@/components/HeaderMenu.vue'
import PageArea from '@/components/PageArea.vue'
export default {
  components: {
    HeaderMenu,
    PageArea
  }
}
</script>

<style>

</style>
