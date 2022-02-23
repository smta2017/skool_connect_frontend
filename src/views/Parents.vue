<template>
    <div>
        <div class="row gutters-20">
            <DashboardSummery  :user_desc="user_desc"/>
        </div>
        
        <!-- Exam Result Area Start Here -->
        <AllParents />
        <!-- Exam Result Area End Here -->
    </div>
</template>

<script>
// @ is an alias to /src
import AllParents from '@/components/AllParents.vue'
import DashboardSummery from '@/components/DashboardSummery.vue'
export default {
    name: 'Students',
    components : {
        AllParents,DashboardSummery
    },
    data: function () {
        return {
            user_desc : 
                {'user_name' : 'Parents','user_count' : '150000','user_type' : 'parent'}
            
        }
    } 
}
</script>
