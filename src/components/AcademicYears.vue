<template>
  <div class="col-xl-3 col-lg-6 col-12 form-group">
    <label>Year *</label>
    <select name="academic_year_applying_id" class="" @change="updateValue($event)">
      <option value="">Please Select School *</option>
      <option value="5" selected>pppp</option>
      <option :key="academic_year.id" v-for="academic_year in academic_years" :value="academic_year.id">{{ academic_year.name }}</option>                                       
    </select>    
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'AcademicYears',
    data () {
        return {
          academic_years: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('academicyear_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/applyYears',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.academic_years = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>