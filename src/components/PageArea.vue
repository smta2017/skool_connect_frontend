<template>
    <div class="dashboard-page-one">
        <!-- Sidebar Area Start Here -->
        <SidebarArea />
        <!-- Sidebar Area End Here -->
        <div class="dashboard-content-one">
            <!-- Breadcubs Area Start Here -->
            <BreadcubsArea />
            <!-- Breadcubs Area End Here -->

            <router-view/>
                
            <!-- Footer Area Start Here -->
            <FooterArea />
            <!-- Footer Area End Here -->
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import SidebarArea from '@/components/SidebarArea.vue'
import BreadcubsArea from '@/components/BreadcubsArea.vue'
//import DashboardSummery from '@/components/DashboardSummery.vue'
import FooterArea from '@/components/FooterArea.vue'
export default {
  name: 'PageArea',
  components : {
      SidebarArea,BreadcubsArea,/*DashboardSummery,*/FooterArea
  }

}
</script>
<style scoped>

</style>
