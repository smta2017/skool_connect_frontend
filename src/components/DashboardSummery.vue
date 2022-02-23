<template>
    <div class="col-xl-3 col-sm-6 col-12">
        <div class="dashboard-summery-one mg-b-20">
            <div class="row align-items-center">
               <div class="col-6">
                    <div v-bind:class="getIconColor(this.user_desc.user_type)">
                        <i v-bind:class="getIcon(this.user_desc.user_type)"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="item-content">
                        <div class="item-title">
                            {{this.user_desc.user_name}}
                        </div>
                        <div class="item-number">
                            <span class="counter" data-num="150000">{{this.user_desc.user_count}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'DashboardSummery',
  props: ['user_desc'],
    methods: {
        getIconColor(user_type) {
            switch(user_type) {
            case 'student':
                return 'item-icon bg-light-green';
            case 'parent':
                return 'item-icon bg-light-blue';
            case 'teacher':
                return 'item-icon bg-light-yellow';
            default:
                return 'item-icon bg-light-green';
            }
        },
        getIcon(user_type) {
            switch(user_type) {
            case 'student':
                return 'flaticon-classmates text-green';
            case 'parent':
                return 'flaticon-multiple-users-silhouette text-blue';
            case 'teacher':
                return 'flaticon-couple text-orange';
            default:
                return 'flaticon-classmates text-green';
            }
        }        
    }
}
</script>
<style scoped>

</style>