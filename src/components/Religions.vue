<template>
  <div class="col-xl-3 col-lg-6 col-12 form-group">
    <label>Religion *</label>
    <select name="religion_id" class="" @change="updateValue($event)">
      <option value="">Please Select Religion *</option>
      <option :key="religion.id" v-for="religion in religions" :value="religion.id">{{ religion.name }}</option>                                       
    </select>    
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Religions',
    data () {
        return {
          religions: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('religion_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/religions',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.religions = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>