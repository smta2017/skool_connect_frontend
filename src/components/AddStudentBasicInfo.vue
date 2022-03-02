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
                    <div class="col-xl-12 col-lg-12 col-12 form-group">
						<label class="">Foreigner ?</label>
                        <div class="">
                           <input class="" type="radio" name="foreigner" v-model="form.foreigner" id="foreignerinlineRadio1" value="1" checked="checked">
                           <label class=" " for="foreignerinlineRadio1">Yes</label>

                            <input class="" type="radio" name="foreigner" v-model="form.foreigner" id="foreignerinlineRadio2" value="0">
                            <label class="" for="foreignerinlineRadio2">No</label>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Egypt Returning ?</label>
                        <div class="">
                           <input class="form-check-input" type="radio" name="egy_returning" v-model="form.egy_returning" id="inlineRadio1" value="1" checked="checked">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>

                            <input class="form-check-input" type="radio" name="egy_returning" v-model="form.egy_returning" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Transfer From Cairo ?</label>
                        <div class="">
                           <input class="form-check-input" type="radio" name="transfer_from_cairo" v-model="form.transfer_from_cairo" id="inlineRadio1" value="1" checked="checked">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="">
                            <input class="form-check-input" type="radio" name="transfer_from_cairo" v-model="form.transfer_from_cairo" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>                                        
                </div>  
                <div class="row">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Staff Child ?</label>
                        <div class="">
                           <input class="form-check-input" type="radio" name="staff_child" v-model="form.staff_child" id="inlineRadio1" value="1" checked="checked">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="">
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
                        <div class="">
                           <input class="form-check-input" type="radio" name="learn_support" v-model="form.learn_support" id="inlineRadio1" value="1" checked="checked">
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="">
                            <input class="form-check-input" type="radio" name="learn_support" v-model="form.learn_support" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Learn Support Details</label>
                        <input type="txt" placeholder="" name="learn_support_details" v-model="form.learn_support_details" class="form-control">
                    </div>                                                            
                </div>
                <FormSaveResetBtns />
            <!-- <div class="row">
                                <div class="col-lg-3 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Birth Certificate *</label>
                                    <input type="file" class="form-Numbercontrol-file">
                                </div>
<div class="col-lg-3 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Student Photo *</label>
                                    <input type="file" class="form-control-file">
                                </div>
								<div class="col-lg-3 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Pervious Repoart Card</label>
                                    <input type="file" class="form-control-file">
                                </div>
								<div class="col-lg-3 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Reference letter</label>
                                    <input type="file" class="form-control-file">
                                </div> 
								
								</div>-->
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
import FormSaveResetBtns from '@/components/FormSaveResetBtns.vue'
export default {
    name: 'AddStudentBasicInfo',
    props: ['formType','StdId'],
    components : {
        Gender,Nationality,Religions,AcademicYears,Divisions,Grades,Classes,Buses,Languages,FormSaveResetBtns
    },
    data: function () {
        return{
            form: {
                "id": 1,
                "user_id" : 50,
      "first_name_en": "maxime",
      "middle_name_en": "sint",
      "last_name_en": "consequuntur",
      "first_name_ar": "iure",
      "middle_name_ar": "deleniti",
      "last_name_ar": "similique",
      "division": 1,
      "grade": 1,
      "class": 2,
      "national_no": 1,
      "passport_no": "facilis",
      "birth_date": "2007-02-03",
      "birth_place": "consequatur",
      "october_age_date": "2017-09-28",
      "academic_year_applying": 1,
      "nationality": 1,
      "gender": "1",
      "bus": 5,
      "religion": 5,
      "previous_school_nursery": "laudantium",
      "address": "deleniti",
      "city": "accusantium",
      "email": "similique@ghjk.com",
      "mobile": "fuga",
      "submit_date": "1972-08-12",
      "photo": "architecto",
      "code": "est",
      "language": 5,
      "birth_certificate": "ut",
      "academic_house": "saepe",
      "report_cards": "minima",
      "referance_letter": "nostrum",
      "referance_name": "eum",
      "referance_email": "ut",
      "referance_phone": "saepe",
      "enroll_date": "1975-02-12",
      "custody": "ut",
      "foreigner": true,
      "egy_returning": true,
      "transfer_from_cairo": false,
      "staff_child": true,
      "staff_no": "eos",
      "learn_support": false,
      "learn_support_details": "magnam",
      "created_at": "1992-12-28",
      "updated_at": "2010-05-12"
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
            axios.post('http://3.219.94.115/api/v1/students',
            this.form,
            {
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            //'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then((response)=> {
                response.status === 200 ? alert('Student Saved successfully') : alert('Error')
            })
        .catch(error => console.log(error))
        //reset the form

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
