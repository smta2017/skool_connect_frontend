<template>
    <div>
        <AddParentBasicInfo />
    </div>
</template>

<script>
// @ is an alias to /src
import AddParentBasicInfo from '@/components/AddParentBasicInfo.vue'
//import DashboardSummery from '@/components/DashboardSummery.vue'
export default {
    name: 'AddParent',
    components : {
        AddParentBasicInfo
    },
    /*data: function () {
        return {
            user_desc : 
                {'user_name' : 'Students','user_count' : '13000','user_type' : 'student'}
            
        }
    }*/
}
</script>
