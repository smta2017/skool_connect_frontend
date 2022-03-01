<template>
    <div class="col-xl-3 col-lg-6 col-12 form-group">
        <label>Gender *</label>
        <select class="" name="gender_id" @change="updateValue($event)">
            <option value="">Please Select Gender *</option>
            <option :key="gender.id" v-for="gender in genders" :value="gender.id">{{ gender.name }}</option>                                       
        </select>        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Gender',
    data() {
        return {
            genders: [],
        }
    },
  methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('gender_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/genders',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.genders = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>