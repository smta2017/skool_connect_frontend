<template>
    <div>
        <AddStudentBasicInfo :formType="formType" :StdId="this.$route.params.stdid"/>
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
    data: function () {
        return {
            formType : 'edit'            
        }
    }
}
</script>
