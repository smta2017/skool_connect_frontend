<template>
    <div class="col-xl-3 col-lg-6 col-12 form-group">
        <label>MaritalStatus *</label>
        <select name="marital_status_id" class="select2" @change="updateValue($event)">
            <option value="">Please Select Marital Status *</option>
            <option :key="mstatus.id" v-for="mstatus in maritalStatus" :value="mstatus.id">{{ mstatus.name }}</option>                                       
        </select>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MaritalStatus',
    data () {
        return {
          maritalStatus: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('maritalStatus_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/maritalStatuses',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.maritalStatus = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>