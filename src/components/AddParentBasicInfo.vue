<template>
    <div class="card height-auto">
        <div class="heading-layout1">
            <div class="item-title">
                <h3>Students Information</h3>
            </div>                 
        </div>
        <form v-on:submit="AddNewParent" class="new-added-form">
        <div class="card-body">

			<div class="row">
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (English)*</label>
                    <input type="text" placeholder="" name="first_name_en" v-model="form.first_name_en" class="form-control">
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (English) *</label>
                    <input type="text" placeholder="" name="middle_name_en" v-model="form.middle_name_en" class="form-control">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (English) *</label>
                    <input type="text" placeholder="" name="last_name_en" v-model="form.last_name_en" class="form-control">
                </div>


                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (Arabic) *</label>
                    <input type="text" placeholder="" name="first_name_ar" v-model="form.first_name_ar" class="form-control">
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (Arabic)*</label>
                    <input type="text" placeholder="" name="middle_name_ar" v-model="form.middle_name_ar" class="form-control">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (Arabic)*</label>
                    <input type="text" placeholder="" name="last_name_ar" v-model="form.last_name_ar" class="form-control">
                </div>
                <MaritalStatus @maritalStatus_change="MaritalStatusChange"/>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>University*</label>
                    <input type="text" placeholder="" name="university" v-model="form.university" class="form-control">
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Occupation *</label>
                    <input type="text" placeholder="" class="form-control" name="occupation" v-model="form.occupation">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>employer *</label>
                    <input type="text" placeholder="" class="form-control" name="employer" v-model="form.employer">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type OF Business *</label>
                    <input type="text" placeholder="" class="form-control" name="type_of_business" v-model="form.type_of_business">
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Business Address</label>
                    <input type="text" placeholder="" class="form-control" name="business_address" v-model="form.business_address">
				</div>
				

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Mobile*</label>
                    <input type="text" placeholder="" name="business_mobile" v-model="form.business_mobile" class="form-control">
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Email *</label>
                    <input type="email" placeholder="" class="form-control" name="business_email" v-model="form.business_email">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Class Off *</label>
                    <input type="text" placeholder="" class="form-control" name="class_off" v-model="form.class_off">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type *</label>
                    <input type="text" placeholder="" class="form-control" name="type" v-model="form.type">
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Tchool</label>
                    <input type="text" placeholder="" class="form-control" name="school" v-model="form.school">
				</div>                
                <FormSaveResetBtns />
                            </div> 
</div>
        </form>       
    </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import MaritalStatus from '@/components/MaritalStatus.vue'
import FormSaveResetBtns from '@/components/FormSaveResetBtns.vue'
export default {
    name: 'AddStudentBasicInfo',
    props: ['formType','StdId'],
    components : {
        MaritalStatus,FormSaveResetBtns
    },
    data: function () {
        return{
            form: {
                "id" : "",
                "first_name_en": "",
                "middle_name_en": "",
                "last_name_en": "",
                "first_name_ar": "",
                "middle_name_ar": "",
                "last_name_ar": "",
                "marital_status_id": 0,
                "university": "",
                "occupation": "",
                "employer": "",
                "type_of_business": "",
                "business_address": "",
                "business_mobile": "",
                "business_email": "",
                "alumni": true,
                "class_off": "",
                "type": "",
                "school": "",
            }
        }
    } ,
    async created () {
        //console.log(this.formType)
        //console.log(this.$route.params.stdid)
        
        this.formType === 'edit'? this.GetStudentData() : ''
  },
    methods: {
        GetStudentData() {
        axios.get('http://3.219.94.115/api/v1/students/'+this.StdId,{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (response.status === 200 ? this.form = response.data.data : alert('Error')))
      .catch(error => console.log(error))
        },
    // submit the form to our backend api
        async AddNewParent(e) {
            e.preventDefault()     
            axios.post('http://3.219.94.115/api/v1/parents',
            this.form,
            {
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            //'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then((response)=> {
                response.status === 200 ? alert('Parent Saved successfully') : alert('Error')
            })
        .catch(error => console.log(error))
        //reset the form

        },
        MaritalStatusChange(valueId) {
            this.form.marital_status_id = valueId
        }      
    },
    computed : {
    findData() {
      return this.academic_years.filter(academic_year => {
        return academic_year.title.match(this.searchData)
      } )
    }
  }
}
</script>
