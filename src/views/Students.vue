<template>
<div>
    <DashboardSummery  :user_desc="user_desc"/>
<!-- Exam Result Area Start Here -->
<AllStudents />
<!-- Exam Result Area End Here -->
</div>
</template>

<script>
// @ is an alias to /src
import AllStudents from '@/components/AllStudents.vue'
import DashboardSummery from '@/components/DashboardSummery.vue'
export default {
    name: 'Students',
    components : {
        AllStudents,DashboardSummery
    },
    data: function () {
        return {
            user_desc : 
                {'user_name' : 'Students','user_count' : '13000','user_type' : 'student'}
            
        }
    }
}
</script>
