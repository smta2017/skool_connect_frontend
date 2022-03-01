<template>
    <div class="card height-auto">
        <div class="heading-layout1">
            <div class="item-title">
                <h3>Students Information</h3>
            </div>                 
        </div>
        <form v-on:submit="AddNewStudent" class="new-added-form">
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

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>National Number*</label>
                    <input type="text" placeholder="" name="national_no" v-model="form.national_no" class="form-control">
                </div>

				<Gender @gender_change="genderChange"/> 

                <Nationality @nationality_change="nationalityChange"/>

                <Religions @religion_change="religionChange"/>           
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Date Of Birth *</label>
                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                        data-position='bottom right' name="birth_date" v-model="form.birth_date">
                    <i class="far fa-calendar-alt"></i>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Place of Birth *</label>
                    <input type="text" placeholder="" class="form-control" name="birth_place" v-model="form.birth_place">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Residential Address *</label>
                    <input type="text" placeholder="" class="form-control" name="address" v-model="form.address">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>City *</label>
                    <input type="text" placeholder="" class="form-control" name="city" v-model="form.city">
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Communication E-Mail</label>
                    <input type="email" placeholder="" class="form-control" name="email" v-model="form.email">
				</div>
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Communication Mobile</label>
                    <input type="tel" id="phone" name="mobile"  v-model="form.mobile" class="form-control">
                </div>
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Custodial Parent Name</label>
                    <input type="txt" placeholder="" class="form-control" name="custody" v-model="form.custody">
                </div>
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Passport No.</label>
                    <input type="txt" placeholder="" class="form-control" name="passport_no" v-model="form.passport_no" >
                </div>
                <AcademicYears @academicyear_change="academicYearChange"/>
				<Divisions @division_change="divisionChange"/>
                <Grades @grade_change="gradeChange"/>
				<Classes @class_change="classChange"/>

				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Previous School/Nursery *</label>
                    <input type="text" placeholder="" name="previous_school_nursery" v-model="form.previous_school_nursery" class="form-control">
                </div>
                <Buses @bus_change="busChange"/>
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                    <label>Code</label>
                    <input type="txt" placeholder="" name="code" v-model="form.code" class="form-control">
                </div>
                <Languages @language_change="languageChange"/>               
								
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                    <label>Birth Certificate</label>
                    <input type="txt" placeholder="" name="birth_certificate" v-model="form.birth_certificate" class="form-control">
                </div>
								
				<div class="row">
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Academic House</label>
                        <input type="txt" placeholder="" name="academic_house" v-model="form.academic_house" class="form-control">
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Report Cards</label>
                        <input type="txt" placeholder="" name="report_cards" v-model="form.report_cards" class="form-control">
                    </div>
                </div>
				<div class="row">
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Photo</label>
                        <input type="txt" placeholder="" name="photo" v-model="form.photo" class="form-control">
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Letter</label>
                        <input type="txt" placeholder="" name="referance_letter" v-model="form.referance_letter" class="form-control">
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Name</label>
                        <input type="txt" placeholder="" name="referance_name" v-model="form.referance_name" class="form-control">
                    </div>

                </div>

                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Email</label>
                        <input type="email" placeholder="" name="referance_email" v-model="form.referance_email" class="form-control">
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Phone</label>
                        <input type="txt" placeholder="" name="referance_phone" v-model="form.referance_phone" class="form-control">
                    </div>

                </div> 
                
                <div class="">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Foreigner ?</label>
                        <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="foreigner" v-model="form.foreigner" id="foreignerinlineRadio1" value="1">
                           <label class="form-check-label " for="foreignerinlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline Custom_Radio">
                            <input class="form-check-input" type="radio" name="foreigner" v-model="form.foreigner" id="foreignerinlineRadio2" value="0">
                            <label class="form-check-label" for="foreignerinlineRadio2">No</label>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Egypt Returning ?</label>
                        <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="egy_returning" v-model="form.egy_returning" id="inlineRadio1" value="1">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline Custom_Radio">
                            <input class="form-check-input" type="radio" name="egy_returning" v-model="form.egy_returning" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Transfer From Cairo ?</label>
                        <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="transfer_from_cairo" v-model="form.transfer_from_cairo" id="inlineRadio1" value="1">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline Custom_Radio">
                            <input class="form-check-input" type="radio" name="transfer_from_cairo" v-model="form.transfer_from_cairo" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>                                        
                </div>  
                <div class="row">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Staff Child ?</label>
                        <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="staff_child" v-model="form.staff_child" id="inlineRadio1" value="1">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline Custom_Radio">
                            <input class="form-check-input" type="radio" name="staff_child" v-model="form.staff_child" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Staff Number</label>
                        <input type="txt" placeholder="" name="staff_no" v-model="form.staff_no" class="form-control">
                    </div>                                                            
                </div>

                <div class="row">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Learn Support ?</label>
                        <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="learn_support" v-model="form.learn_support" id="inlineRadio1" value="1">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline Custom_Radio">
                            <input class="form-check-input" type="radio" name="learn_support" v-model="form.learn_support" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Learn Support Details</label>
                        <input type="txt" placeholder="" name="learn_support_details" v-model="form.learn_support_details" class="form-control">
                    </div>                                                            
                </div>
                            </div> 
</div>
        </form>       
    </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
import Gender from '@/components/Gender.vue'
import Nationality from '@/components/Nationality.vue'
import Religions from '@/components/Religions.vue'
import AcademicYears from '@/components/AcademicYears.vue'
import Divisions from '@/components/Divisions.vue'
import Grades from '@/components/Grades.vue'
import Classes from '@/components/Classes.vue'
import Buses from '@/components/Buses.vue'
import Languages from '@/components/Languages.vue'

export default {
    name: 'AddStudentBasicInfo',
    props: ['formType','StdId'],
    components : {
        Gender,Nationality,Religions,AcademicYears,Divisions,Grades,Classes,Buses,Languages
    },
    data: function () {
        return{
            form: {
                "first_name_en": "",
                "middle_name_en": "",
                "last_name_en": "",
                "first_name_ar": "",
                "middle_name_ar": "",
                "last_name_ar": "",
                "division_id": "",
                "grade_id": "",
                "class_id": "",
                "national_no": "",
                "passport_no": "",
                "birth_date": "000-00-00",
                "birth_place": "",
                "october_age_date": "000-00-00",
                "academic_year_applying_id": "",
                "nationality_id": "",
                "gender_id": "",
                "bus_id": "",
                "religion_id": "",
                "previous_school_nursery": "",
                "address": "",
                "city": "",
                "email": "",
                "mobile": "",
                "submit_date": "000-00-00",
                "photo": "",
                "code": "",
                "lang_id": "",
                "user_id": "150",
                "birth_certificate": "",
                "academic_house": "",
                "report_cards": "",
                "referance_letter": "",
                "referance_name": "",
                "referance_email": "",
                "referance_phone": "",
                "enroll_date": "000-00-00",
                "custody": "",
                "foreigner": true,
                "egy_returning": false,
                "transfer_from_cairo": false,
                "staff_child": false,
                "staff_no": "",
                "learn_support": false,
                "learn_support_details": ""
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
        async AddNewStudent(e) {
            e.preventDefault()     
            this.$emit('studentParams', this.form);
        },
        genderChange(valueId) {
            this.form.gender_id = valueId
        },
        nationalityChange(valueId) {
            this.form.nationality_id = valueId
        },
        religionChange(valueId) {
            this.form.religion_id = valueId
        },
        academicYearChange(valueId) {
            this.form.academic_year_applying_id = valueId
        },
        divisionChange(valueId) {
            this.form.division_id = valueId
        },
        gradeChange(valueId) {
            this.form.grade_id = valueId
        },
        classChange(valueId) {
            this.form.class_id = valueId
        },
        busChange(valueId) {
            this.form.bus_id = valueId
        },
        languageChange(valueId) {
            this.form.lang_id = valueId
        },       
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
