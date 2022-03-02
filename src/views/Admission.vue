<template>
    <div >
        <form v-on:submit="submitAdmissionForm" class="new-added-form">
        <div >
            
<div class="card height-auto">
        <div class="heading-layout1">
            <div class="item-title">
                <h3>Students Information</h3>
            </div>                 
        </div>
<div class="card-body">

			<div class="row">
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (English)*</label>
                    <input type="text" placeholder="" name="first_name_en" v-model="form.student.first_name_en" class="form-control" required>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (English) *</label>
                    <input type="text" placeholder="" name="middle_name_en" v-model="form.student.middle_name_en" class="form-control" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (English) *</label>
                    <input type="text" placeholder="" name="last_name_en" v-model="form.student.last_name_en" class="form-control" required>
                </div>


                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (Arabic) *</label>
                    <input type="text" placeholder="" name="first_name_ar" v-model="form.student.first_name_ar" class="form-control" required>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (Arabic)*</label>
                    <input type="text" placeholder="" name="middle_name_ar" v-model="form.student.middle_name_ar" class="form-control" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (Arabic)*</label>
                    <input type="text" placeholder="" name="last_name_ar" v-model="form.student.last_name_ar" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>National Number*</label>
                    <input type="text" placeholder="" name="national_no" v-model="form.student.national_no" class="form-control" required>
                </div>

				<Gender @gender_change="genderChange"/> 

                <Nationality @nationality_change="nationalityChange"/>

                <Religions @religion_change="religionChange"/>           
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Date Of Birth *</label>
                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                        data-position='bottom right' name="birth_date" v-model="form.student.birth_date" required>
                    <i class="far fa-calendar-alt"></i>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>October Age Date *</label>
                    <input type="text" placeholder="" class="form-control" name="october_age_date" v-model="form.student.october_age_date" required>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Submit Date *</label>
                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                        data-position='bottom right' name="submit_date" v-model="form.student.submit_date" required>
                    <i class="far fa-calendar-alt"></i>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Enroll Date *</label>
                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                        data-position='bottom right' name="enroll_date" v-model="form.student.enroll_date" required>
                    <i class="far fa-calendar-alt"></i>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Place of Birth *</label>
                    <input type="text" placeholder="" class="form-control" name="birth_place" v-model="form.student.birth_place" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Residential Address *</label>
                    <input type="text" placeholder="" class="form-control" name="address" v-model="form.student.address" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>City *</label>
                    <input type="text" placeholder="" class="form-control" name="city" v-model="form.student.city" required>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Communication E-Mail</label>
                    <input type="email" placeholder="" class="form-control" name="email" v-model="form.student.email" required>
				</div>
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Communication Mobile</label>
                    <input type="tel" id="phone" name="mobile"  v-model="form.student.mobile" class="form-control" required>
                </div>
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Custodial Parent Name</label>
                    <input type="txt" placeholder="" class="form-control" name="custody" v-model="form.student.custody" required>
                </div>
				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Passport No.</label>
                    <input type="txt" placeholder="" class="form-control" name="passport_no" v-model="form.student.passport_no" required>
                </div>
                <AcademicYears @academicyear_change="academicYearChange"/>
				<Divisions @division_change="divisionChange"/>
                <Grades @grade_change="gradeChange"/>
				<Classes @class_change="classChange"/>

				<div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Previous School/Nursery *</label>
                    <input type="text" placeholder="" name="previous_school_nursery" v-model="form.student.previous_school_nursery" class="form-control" required>
                </div>
                <Buses @bus_change="busChange"/>
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                    <label>Code</label>
                    <input type="txt" placeholder="" name="code" v-model="form.student.code" class="form-control" required>
                </div>
                <Languages @language_change="languageChange"/>               
								
                <div class="col-xl-6 col-lg-6 col-12 form-group">
                    <label>Birth Certificate</label>
                    <input type="txt" placeholder="" name="birth_certificate" v-model="form.student.birth_certificate" class="form-control" required>
                </div>
								
				<div class="row">
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Academic House</label>
                        <input type="txt" placeholder="" name="academic_house" v-model="form.student.academic_house" class="form-control" required>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Report Cards</label>
                        <input type="txt" placeholder="" name="report_cards" v-model="form.student.report_cards" class="form-control" required>
                    </div>
                </div>
				<div class="row">
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Photo</label>
                        <input type="txt" placeholder="" name="photo" v-model="form.student.photo" class="form-control" required>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Letter</label>
                        <input type="txt" placeholder="" name="referance_letter" v-model="form.student.referance_letter" class="form-control" required>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Name</label>
                        <input type="txt" placeholder="" name="referance_name" v-model="form.student.referance_name" class="form-control" required>
                    </div>

                </div>

                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Email</label>
                        <input type="email" placeholder="" name="referance_email" v-model="form.student.referance_email" class="form-control" required>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Referance Phone</label>
                        <input type="txt" placeholder="" name="referance_phone" v-model="form.student.referance_phone" class="form-control" required>
                    </div>

                </div> 
                
                <div class="">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Foreigner ?</label>
                        <div class="form-check form-check-inline ">
                           <input class="" type="radio" name="foreigner" v-model="form.student.foreigner" id="foreignerinlineRadio1" value="1" required>
                           <label class="form-check-label " for="foreignerinlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input class="" type="radio" name="foreigner" v-model="form.student.foreigner" id="foreignerinlineRadio2" value="0" required>
                            <label class="form-check-label" for="foreignerinlineRadio2">No</label>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Egypt Returning ?</label>
                        <div class="form-check form-check-inline ">
                           <input class="" type="radio" name="egy_returning" v-model="form.student.egy_returning" id="inlineRadio1" value="1" required>
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input class="" type="radio" name="egy_returning" v-model="form.student.egy_returning" id="inlineRadio2" value="0" required>
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Transfer From Cairo ?</label>
                        <div class="form-check form-check-inline ">
                           <input class="" type="radio" name="transfer_from_cairo" v-model="form.student.transfer_from_cairo" id="inlineRadio1" value="1" required>
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input class="" type="radio" name="transfer_from_cairo" v-model="form.student.transfer_from_cairo" id="inlineRadio2" value="0" required>
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>                                        
                </div>  
                <div class="row">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Staff Child ?</label>
                        <div class="form-check form-check-inline ">
                           <input class="" type="radio" name="staff_child" v-model="form.student.staff_child" id="inlineRadio1" value="1" required>
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input class="" type="radio" name="staff_child" v-model="form.student.staff_child" id="inlineRadio2" value="0" required>
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Staff Number</label>
                        <input type="txt" placeholder="" name="staff_no" v-model="form.student.staff_no" class="form-control" required>
                    </div>                                                            
                </div>

                <div class="row">
                    <div class="col-xl-3 col-lg-12 col-12 form-group">
						<label class="">Learn Support ?</label>
                        <div class="form-check form-check-inline ">
                           <input class="" type="radio" name="learn_support" v-model="form.student.learn_support" id="inlineRadio1" value="1" required>
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline ">
                            <input class="" type="radio" name="learn_support" v-model="form.student.learn_support" id="inlineRadio2" value="0" required>
                            <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-12 form-group">
                        <label>Learn Support Details</label>
                        <input type="txt" placeholder="" name="learn_support_details" v-model="form.student.learn_support_details" class="form-control" required>
                    </div>                                                            
                </div>
                            </div> 
</div>    
    </div>
        




    <!-- First Parent Info Start-->

    <!-- First Parent Info End-->
<div class="card height-auto">
        <div class="heading-layout1">
            <div class="item-title">
                <h3>Parent Information</h3>
            </div>                 
        </div>
        <div class="card-body">

			<div class="row">
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (English)*</label>
                    <input type="text" placeholder="" name="first_name_en" v-model="form.parent1.first_name_en" class="form-control" required>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (English) *</label>
                    <input type="text" placeholder="" name="middle_name_en" v-model="form.parent1.middle_name_en" class="form-control" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (English) *</label>
                    <input type="text" placeholder="" name="last_name_en" v-model="form.parent1.last_name_en" class="form-control" required>
                </div>


                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (Arabic) *</label>
                    <input type="text" placeholder="" name="first_name_ar" v-model="form.parent1.first_name_ar" class="form-control" required>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (Arabic)*</label>
                    <input type="text" placeholder="" name="middle_name_ar" v-model="form.parent1.middle_name_ar" class="form-control" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (Arabic)*</label>
                    <input type="text" placeholder="" name="last_name_ar" v-model="form.parent1.last_name_ar" class="form-control" required>
                </div>
                <MaritalStatus :userType="parentType[0]" @fatherMaritalStatusChange="fatherMaritalStatusChange"/>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>University*</label>
                    <input type="text" placeholder=""  v-model="form.parent1.university" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Occupation *</label>
                    <input type="text" placeholder="" class="form-control"  v-model="form.parent1.occupation" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>employer *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent1.employer" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type OF Business *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent1.type_of_business" required>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Business Address</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent1.business_address" required>
				</div>
				

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Mobile*</label>
                    <input type="text" placeholder="" name="business_mobile" v-model="form.parent1.business_mobile" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Email *</label>
                    <input type="email" placeholder="" class="form-control" name="business_email" v-model="form.parent1.business_email">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Class Off *</label>
                    <input type="text" placeholder="" class="form-control" name="class_off" v-model="form.parent1.class_off">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type *</label>
                    <input type="text" placeholder="" class="form-control" name="type" v-model="form.parent1.type">
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>School</label>
                    <input type="text" placeholder="" class="form-control" name="school" v-model="form.parent1.school">
				</div>
                <div class="col-xl-3 col-lg-12 col-12 form-group">
					<label class="">alumni ?</label>
                    <div class="form-check form-check-inline ">
                        <input class="" type="radio" name="alumni1" v-model="form.parent1.alumni"  value="1">
                        <label class="form-check-label " for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline ">
                        <input class="" type="radio" name="alumni1" v-model="form.parent1.alumni" value="0">
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>                
        </div> 
</div>
             
    </div>    
    <!-- Second Parent Info Start-->
<div class="card height-auto">
        <div class="heading-layout1">
            <div class="item-title">
                <h3>Parent Information</h3>
            </div>                 
        </div>
        <div class="card-body">

			<div class="row">
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (English)*</label>
                    <input type="text" placeholder="" name="first_name_en" v-model="form.parent2.first_name_en" class="form-control" required>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (English) *</label>
                    <input type="text" placeholder="" name="middle_name_en" v-model="form.parent2.middle_name_en" class="form-control" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (English) *</label>
                    <input type="text" placeholder="" name="last_name_en" v-model="form.parent2.last_name_en" class="form-control" required>
                </div>


                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>First Name (Arabic) *</label>
                    <input type="text" placeholder="" name="first_name_ar" v-model="form.parent2.first_name_ar" class="form-control" required>
                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Second Name (Arabic)*</label>
                    <input type="text" placeholder="" name="middle_name_ar" v-model="form.parent2.middle_name_ar" class="form-control" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Family Name (Arabic)*</label>
                    <input type="text" placeholder="" name="last_name_ar" v-model="form.parent2.last_name_ar" class="form-control" required>
                </div>
                <MaritalStatus :userType="parentType[1]" @motherMaritalStatusChange="motherMaritalStatusChange"/>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>University*</label>
                    <input type="text" placeholder=""  v-model="form.parent2.university" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Occupation *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.occupation" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>employer *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.employer" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type OF Business *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.type_of_business" required>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>Business Address</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.business_address" required>
				</div>
				

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Mobile*</label>
                    <input type="text" placeholder="" name="business_mobile" v-model="form.parent2.business_mobile" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Email *</label>
                    <input type="email" placeholder="" class="form-control" name="business_email" v-model="form.parent2.business_email" required email>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Class Off *</label>
                    <input type="text" placeholder="" class="form-control" name="class_off" v-model="form.parent2.class_off" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type *</label>
                    <input type="text" placeholder="" class="form-control" name="type" v-model="form.parent2.type" required>
                </div>
                <div class="col-xl-3 col-lg-6 col-12 form-group">
                    <label>School</label>
                    <input type="text" placeholder="" class="form-control" name="school" v-model="form.parent2.school" required>
				</div>
                <div class="col-xl-3 col-lg-12 col-12 form-group">
					<label class="">alumni ?</label>
                    <div class="form-check form-check-inline ">
                        <input class="" type="radio" v-model="form.parent2.alumni"  id="inlineRadio1-2" value="1" required>
                        <label class="form-check-label " for="inlineRadio1-2">Yes</label>
                    </div>
                    <div class="form-check form-check-inline ">
                        <input class="" type="radio" v-model="form.parent2.alumni" id="inlineRadio2-2" value="0" required>
                        <label class="form-check-label" for="inlineRadio2-2">No</label>
                    </div>
                </div>                           
            </div> 
</div>
             
    </div>      
    <!-- Second Parent Info End-->
                <FormSaveResetBtns />
            
        </div>
        </form>
    </div>
</template>

<script>
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
import MaritalStatus from '@/components/MaritalStatus.vue'
import axios from 'axios';
export default {
    name: 'Admission',
    components : {
        FormSaveResetBtns,Gender,Nationality,Religions,AcademicYears,Divisions,Grades,Classes,Buses,Languages,MaritalStatus
    },
    data: function () {
        return {
            parentType : ['father','mother'] ,
            form: {
      //"id": 1,
      "student": {
       // "id": 9,
        "first_name_en": "Marwaaaaaa",
        "middle_name_en": "temporibus",
        "last_name_en": "aliquid",
        "first_name_ar": "perferendis",
        "middle_name_ar": "iste",
        "last_name_ar": "est",
        "division_id": 5,
        "grade_id": 5,
        "class_id": 6,
        "national_no": "earum",
        "passport_no": "repellat",
        "birth_date": "1999-05-24",
        "birth_place": "illum",
        "october_age_date": "2009-05-10",
        "academic_year_applying_id": 6,
        "nationality_id": 5,
        "gender_id": 8,
        "bus_id": 8,
        "religion_id": 8,
        "previous_school_nursery": "omnis",
        "address": "et",
        "city": "rerum",
        "email": "iusto@fgh.com",
        "mobile": "et",
        "submit_date": "2006-01-12",
        "photo": "soluta",
        "code": "vero",
        "lang_id": 8,
        "birth_certificate": "est",
        "academic_house": "quaerat",
        "report_cards": "expedita",
        "referance_letter": "eligendi",
        "referance_name": "provident",
        "referance_email": "alias@ggg.com",
        "referance_phone": "ut",
        "enroll_date": "2020-09-04",
        "custody": "et",
        "foreigner": 0,
        "egy_returning": 1,
        "transfer_from_cairo": 0,
        "staff_child": 0,
        "staff_no": "atque",
        "learn_support": 0,
        "learn_support_details": "et",
        "user_id" :5,
      },
      "parent1": {
        //"id": 18,
        "first_name_en": "molestiae",
        "middle_name_en": "dolore",
        "last_name_en": "quod",
        "first_name_ar": "quia",
        "middle_name_ar": "sapiente",
        "last_name_ar": "repellendus",
        "marital_status_id": 8,
        "university": "soluta",
        "occupation": "ipsa",
        "employer": "veniam",
        "type_of_business": "et",
        "business_address": "vitae",
        "business_mobile": "et",
        "business_email": "libero@gh.com",
        "alumni": 1,
        "class_off": "necessitatibus",
        "type": "voluptas",
        "school": "sit"
      },
      "parent2": {
        //"id": 5,
        "first_name_en": "voluptatem",
        "middle_name_en": "voluptatibus",
        "last_name_en": "ipsa",
        "first_name_ar": "voluptas",
        "middle_name_ar": "earum",
        "last_name_ar": "vel",
        "marital_status_id": 9,
        "university": "assumenda",
        "occupation": "nostrum",
        "employer": "dolorem",
        "type_of_business": "accusamus",
        "business_address": "voluptas",
        "business_mobile": "cupiditate",
        "business_email": "libero@gh.com",
        "alumni": 1,
        "class_off": "aut",
        "type": "aut",
        "school": "exercitationem"
      },
      "student_id" : "0","parent1_id" : "0","parent2_id" : "0","admission_status_id" : "0"
      /*,
      "admission_status": {
        "id": 12,
        "name": "iure",
        "created_at": "1972-04-03T17:38:45.000000Z",
        "updated_at": "1982-07-12T22:43:19.000000Z"
      }*/
    }     
        }
    },
    methods: {
    // submit the form to our backend api
        async submitAdmissionForm(e) {
            e.preventDefault()
            console.log(this.form)
            axios.post('http://3.219.94.115/api/v1/admissions',
            this.form,
            {
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            //'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then((response)=> {
            console.log(response)
                response.status === 200 ? alert('Student Saved successfully') : alert('Error')
            })
        .catch(error => console.log(error))            
    
        },
        genderChange(valueId) {
            console.log(valueId)
            this.form.student.gender_id = valueId
            console.log(this.form.student.gender_id)
        },
        nationalityChange(valueId) {
            this.form.student.nationality_id = valueId
        },
        religionChange(valueId) {
            this.form.student.religion_id = valueId
        },
        academicYearChange(valueId) {
            this.form.student.academic_year_applying_id = valueId
        },
        divisionChange(valueId) {
            this.form.student.division_id = valueId
        },
        gradeChange(valueId) {
            this.form.student.grade_id = valueId
        },
        classChange(valueId) {
            this.form.student.class_id = valueId
        },
        busChange(valueId) {
            this.form.student.bus_id = valueId
        },
        languageChange(valueId) {
            this.form.student.lang_id = valueId
        },
        fatherMaritalStatusChange(valueId) {
            this.form.parent1.marital_status_id = valueId
        },
        motherMaritalStatusChange(valueId) {
            this.form.parent2.marital_status_id = valueId
        }       
    }
}
</script>