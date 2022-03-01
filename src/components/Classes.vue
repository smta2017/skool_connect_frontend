<template>
    <div class="col-xl-3 col-lg-6 col-12 form-group">
        <label>Class *</label>
        <select name="class_id" class="" @change="updateValue($event)">
            <option value="">Please Select Class *</option>
            <option :key="one_class.id" v-for="one_class in classes" :value="one_class.id">{{ one_class.name }}</option>                                     
        </select>     
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Classes',
    data () {
        return {
        classes: [],
        }  
    },
    methods: {
    updateValue(e) {
      // Emitting a `change` event with the new
      // value of the `<select>` field, updates
      // all values bound with `v-model`.
      this.$emit('class_change', e.target.value);
    },
  },
    async created () {
        axios.get('http://3.219.94.115/api/v1/classes',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.classes = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
<style scoped>

</style>