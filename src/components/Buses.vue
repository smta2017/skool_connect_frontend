<template>
    <div class="col-xl-3 col-lg-6 col-12 form-group">
        <label>Bus *</label>
        <select name="bus_id" class="" @change="updateValue($event)">
            <option value="">Please Select Bus *</option>
            <option value="5" selected>pppp</option>
            <option :key="bus.id" v-for="bus in buses" :value="bus.id">{{ bus.bus_no }}</option>                                       
        </select>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Buses',
    data () {
        return {
        buses: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('bus_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/buses',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.buses = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>