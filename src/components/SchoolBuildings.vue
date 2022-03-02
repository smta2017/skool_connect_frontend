<template>
  <div class="col-xl-3 col-lg-6 col-12 form-group">
    <label>School Buildings *</label>
    <select name="religion_id" class="select2" @change="updateValue($event)">
      <option value="">Please Select School Building *</option>
      <option :key="building.id" v-for="building in schoolBuildings" :value="building.id">{{ building.name }}</option>                                       
    </select>    
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SchoolBuildings',
    props: ['reason'],
    data () {
        return {
          schoolBuildings: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.reason === 'assessment1' ? this.$emit('assessmentOneBuildingChange', e.target.value) : ( this.reason === 'assessment2' ? this.$emit('assessmentTwoBuildingChange', e.target.value) : this.$emit('parentMeetingBuildingChange', e.target.value))
      this.$emit('schoolBuildings_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/schoolBuildings',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.schoolBuildings = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>