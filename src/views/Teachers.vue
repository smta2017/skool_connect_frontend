<template>
<div>
    <DashboardSummery  :user_desc="user_desc"/>
<!-- Exam Result Area Start Here -->
<AllTeachers />
<!-- Exam Result Area End Here -->
</div>
</template>

<script>
// @ is an alias to /src
import AllTeachers from '@/components/AllTeachers.vue'
import DashboardSummery from '@/components/DashboardSummery.vue'
export default {
    name: 'Students',
    components : {
        AllTeachers,DashboardSummery
    },
    data: function () {
        return {
            user_desc : 
                {'user_name' : 'Teachers','user_count' : '4500','user_type' : 'teacher'}
            
        }
    }
}
</script>
