<template>
  <div class="row gutters-20">
    <DashboardSummery  :user_desc="user_desc[0]"/>
    <DashboardSummery  :user_desc="user_desc[1]"/>
    <DashboardSummery  :user_desc="user_desc[2]"/>

  </div>
</template>

<script>
// @ is an alias to /src

import DashboardSummery from '@/components/DashboardSummery.vue'
export default {
  name: 'Home',
  components : {
        DashboardSummery
    },  
    data: function () {
        return {
            user_desc :[ 
              {'user_name' : 'Students','user_count' : '13000','user_type' : 'student'},
              {'user_name' : 'Parents','user_count' : '150000','user_type' : 'parent'},
              {'user_name' : 'Teachers','user_count' : '4500','user_type' : 'teacher'}
            ]
            
        }
    }
}
</script>
