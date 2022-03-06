<template>
    <div>
        <AddStudentBasicInfo />
    </div>
</template>

<script>
// @ is an alias to /src
import AddStudentBasicInfo from '@/components/AddStudentBasicInfo.vue'
//import DashboardSummery from '@/components/DashboardSummery.vue'
export default {
    name: 'AddStudent',
    components : {
        AddStudentBasicInfo
    },
    /*data: function () {
        return {
            user_desc : 
                {'user_name' : 'Students','user_count' : '20','user_type' : 'student'}
            
        }
    }*/
}
</script>
