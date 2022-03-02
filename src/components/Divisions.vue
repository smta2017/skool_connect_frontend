<template>
    <div class="col-xl-3 col-lg-6 col-12 form-group">
        <label>Division *</label>
        <select name="division_id" class="" @change="updateValue($event)">
            <option value="">Please Select Division *</option>
            <option value="5" selected>pppp</option>
            <option :key="division.id" v-for="division in divisions" :value="division.id">{{ division.name }}</option>                                       
        </select>      
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Divisions',
    data () {
        return {
        divisions: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('division_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/divisions',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.divisions = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>