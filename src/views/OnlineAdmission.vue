<template>
<div>
    <div id="wrapper" class="wrapper bg-ash">
        <!-- Header Menu Area Start Here -->

        <!-- Header Menu Area End Here -->
        <!-- Page Area Start Here -->
        <div class="dashboard-page-one">
            <!-- Sidebar Area Start Here -->
            <!-- Sidebar Area End Here -->
            <div class="dashboard-content-one">
                <!-- Breadcubs Area Start Here -->
                <!-- Breadcubs Area End Here -->
                <!-- Basic Modal Area Start Here -->
                <div class="card height-auto">
                    
                <!-- Basic Modal Area End Here -->
                <!-- Variation Modal Area Start Here -->
                <div class="card height-auto">
                    <div class="card-body">
                        <div class="heading-layout1 mg-b-15">
                            
                           
                        </div>
                     
                </div>
                <!-- Variation Modal Area End Here -->
                <!-- wizard form starting -->
                <div class="card height-auto">
                    <div class="card-body">
                       
    <div class="main">

        <div class="container">
            
              <form v-on:submit="submitAdmissionForm" id="signup-form" class="signup-form new-added-form">
                <div>
                    <h3>Student Information</h3>
                    <fieldset>
                        <h2>Student Information</h2>
                        <p class="desc">Please enter your infomation and proceed to next step so we can build your account</p>
                        <div class="fieldset-content"><div class="row">
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>First Name <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control" name="first_name_en" v-model="form.student.first_name_en" required>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Second Name <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" name="middle_name_en" v-model="form.student.middle_name_en" class="form-control" required>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Family Name <span class="text-red">*</span></label>
                                    <input type="text" placeholder=""  name="last_name_en" v-model="form.student.last_name_en" class="form-control" required>
                                </div>

                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>First Name  (Arabic) <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control" name="first_name_ar" v-model="form.student.first_name_ar" required>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Second Name  (Arabic) <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" name="middle_name_ar" v-model="form.student.middle_name_ar" class="form-control" required>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Family Name  (Arabic) <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" name="last_name_ar" v-model="form.student.last_name_ar" class="form-control" required>
                                </div>
                                
                                                                
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Gender <span class="text-red">*</span></label>
                                    <select class="" name="gender_id" v-model="form.student.gender_id">
                                        <option value="">Please Select Gender *</option>
                                        <option :key="gender.id" v-for="gender in genders" :value="gender.id">{{ gender.name }}</option>                                       
                                    </select>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Nationality <span class="text-red">*</span></label>
                                    <select class="" name="nationality_id" v-model="form.student.nationality_id">
                                        <option value="">Please Select Nationality *</option>
                                        <option :key="nationality.id" v-for="nationality in nationalities" :value="nationality.id">{{ nationality.name }}</option>                                       
                                    </select>
                                </div>
                           <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Religion <span class="text-red">*</span></label>
                                    <select name="religion_id" class="" v-model="form.student.religion_id">
                                        <option value="">Please Select Religion *</option>
                                        <option :key="religion.id" v-for="religion in religions" :value="religion.id">{{ religion.name }}</option>                                       
                                    </select>
                                </div>
                               <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>National Number <span class="text-red">*</span></label>
                                    <input type="text" name="national_no" v-model="form.student.national_no" class="form-control" required>
                                </div> 
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Date Of Birth <span class="text-red">*</span></label>
                                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                        data-position='bottom right' name="birth_date" v-model="form.student.birth_date" required>
                                    <i class="far fa-calendar-alt"></i>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Place of Birth <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control" name="birth_place" v-model="form.student.birth_place" required>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Residential Address <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control" name="address" v-model="form.student.address" required>
                                </div>
                <div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>City <span class="text-red">*</span></label>
                    <input type="text" placeholder="" class="form-control" name="city" v-model="form.student.city" required>
                </div>                
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Mailing Address <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Communication E-Mail</label>
                                    <input type="email" placeholder="" class="form-control" name="email" v-model="form.student.email" required>
									
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Communication Mobile</label>
                                   <input type="tel" id="phone" class="form-control" name="mobile"  v-model="form.student.mobile" required>
                                </div>
								<!-- <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Custodial Parent Name</label>
                                    <input type="txt" placeholder="" class="form-control" name="custody" v-model="form.student.custody" required>
                                </div> -->
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>language Spoken At Home <span class="text-red">*</span></label>
                                    <select name="lang_id" class="" v-model="form.student.lang_id">
                                        <option value="">Please Select Language *</option>
                                        <option :key="language.id" v-for="language in languages" :value="language.id">{{ language.name }}</option>                                     
                                    </select>
                                </div>								
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Division <span class="text-red">*</span></label>
                                    <select name="division_id" class="" v-model="form.student.division_id">
                                        <option value="">Please Select Division *</option>
                                        <option :key="division.id" v-for="division in divisions" :value="division.id">{{ division.name }}</option>                                       
                                    </select>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Grade <span class="text-red">*</span></label>
                                    <select name="grade_id" class="" v-model="form.student.grade_id">
                                        <option value="">Please Select Grade *</option>
                                        <option :key="grade.id" v-for="grade in grades" :value="grade.id">{{ grade.name }}</option>                                       
                                    </select>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Year <span class="text-red">*</span></label>
                                    <select name="academic_year_applying_id" class="" v-model="form.student.academic_year_applying_id">
                                        <option value="">Please Select School *</option>
                                        <option :key="academic_year.id" v-for="academic_year in academic_years" :value="academic_year.id">{{ academic_year.name }}</option>                                       
                                    </select>
                                </div>
								<!--<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Class <span class="text-red">*</span></label>
                                    <select name="class_id" class="" v-model="form.student.class_id">
                                        <option value="">Please Select Class *</option>
                                        <option :key="one_class.id" v-for="one_class in classes" :value="one_class.id">{{ one_class.name }}</option>                                     
                                    </select>
                                </div> -->
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Registration Year <span class="text-red">*</span></label>
                                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                        data-position='bottom right'>
                                    <i class="far fa-calendar-alt"></i>
                                </div>
								<div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Bus <span class="text-red">*</span></label>
                                    <select name="bus_id" class="" v-model="form.student.bus_id">
                                        <option value="">Please Select Bus *</option>
                                        <option :key="bus.id" v-for="bus in buses" :value="bus.id">{{ bus.bus_no }}</option>                                       
                                    </select>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                    <label>Bus Address</label>
                                    <input type="txt" placeholder="" class="form-control">
                                </div>
                                <div class="col-xl-4 col-lg-12 col-12 form-group">
								<legend class="col-form-label col-lg-12  pt-0 pl-0">Foreigner ?</legend>
                               <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="foreigner" v-model="form.student.foreigner" id="inlineRadio1" value="1" required>
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                            </div>
                       <div class="form-check form-check-inline Custom_Radio">
                       <input class="form-check-input" type="radio" name="foreigner" v-model="form.student.foreigner" id="inlineRadio2" value="0" required>
                       <label class="form-check-label" for="inlineRadio2">No</label>
                              </div>
                                </div>
								
								
                                <div class="col-xl-4 col-lg-12 col-12 form-group">
								<legend class="col-form-label col-lg-12  pt-0 pl-0">Egyptian Return From Abroad</legend>
                               <div class="form-check form-check-inline Custom_Radio">
                           <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="form.student.egy_returning" id="inlineRadio1" value="1" required>
                           <label class="form-check-label " for="inlineRadio1">Yes</label>
                            </div>
                            <div class="form-check form-check-inline Custom_Radio">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="form.student.egy_returning" id="inlineRadio2" value="0" required>
                            <label class="form-check-label" for="inlineRadio2">No</label>
                              </div>
                                </div>
                                 <div class="row">
                                <div class="col-lg-6 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Birth Certificate <span class="text-red">*</span></label>
                                    <input type="file" class="form-control-file"  v-on:change="uploadBDfile" ref="birth_certificate" required>
                                </div>
                                <div class="col-lg-6 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Student Photo <span class="text-red">*</span></label>
                                    <input type="file" class="form-control-file" v-on:change="uploadStdPhoto" ref="photo" required>
                                </div>
								<div class="col-lg-6 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Upload Pervious Repoart Card</label>
                                    <input type="file" class="form-control-file" v-on:change="uploadReportCard" ref="report_cards" required>
                                </div>
								<div class="col-lg-6 col-12 form-group mg-t-30">
                                    <label class="text-dark-medium">Reference letter</label>
                                    <input type="file" class="form-control-file" v-on:change="uploadRefLetter" ref="referance_letter">
                                </div>
								
								</div>
                            </div>
                       
                        </div>
                    </fieldset>
                    <h3>Parents information</h3>
                    <fieldset>
                        <h2>Father Information</h2>
                        <div class="fieldset-content">

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
                <div class="col-3 col-lg-6 col-12 form-group">
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
                <div class="col-3 col-lg-6 col-12 form-group">
                    <label>School</label>
                    <input type="text" placeholder="" class="form-control" name="school" v-model="form.parent1.school">
				</div>
                <div class="col-3 col-lg-12 col-12 form-group">
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
                        <h2>Mother Infoemation</h2>
                        <div class="fieldset-content">

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
                <MaritalStatus :userType="parentType[0]" @fatherMaritalStatusChange="fatherMaritalStatusChange"/>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>University*</label>
                    <input type="text" placeholder=""  v-model="form.parent2.university" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Occupation *</label>
                    <input type="text" placeholder="" class="form-control"  v-model="form.parent2.occupation" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>employer *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.employer" required>
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type OF Business *</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.type_of_business" required>
                </div>
                <div class="col-3 col-lg-6 col-12 form-group">
                    <label>Business Address</label>
                    <input type="text" placeholder="" class="form-control" v-model="form.parent2.business_address" required>
				</div>
				

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Mobile*</label>
                    <input type="text" placeholder="" name="business_mobile" v-model="form.parent2.business_mobile" class="form-control" required>
                </div>

				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Business Email *</label>
                    <input type="email" placeholder="" class="form-control" name="business_email" v-model="form.parent2.business_email">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Class Off *</label>
                    <input type="text" placeholder="" class="form-control" name="class_off" v-model="form.parent2.class_off">
                </div>
				<div class="col-xl-4 col-lg-6 col-12 form-group">
                    <label>Type *</label>
                    <input type="text" placeholder="" class="form-control" name="type" v-model="form.parent2.type">
                </div>
                <div class="col-3 col-lg-6 col-12 form-group">
                    <label>School</label>
                    <input type="text" placeholder="" class="form-control" name="school" v-model="form.parent2.school">
				</div>
                <div class="col-3 col-lg-12 col-12 form-group">
					<label class="">alumni ?</label>
                    <div class="form-check form-check-inline ">
                        <input class="" type="radio" name="alumni1" v-model="form.parent2.alumni"  value="1">
                        <label class="form-check-label " for="inlineRadio1">Yes</label>
                    </div>
                    <div class="form-check form-check-inline ">
                        <input class="" type="radio" name="alumni1" v-model="form.parent2.alumni" value="0">
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>
                </div>                
        </div> 

                            
                        </div>                    
                    
                    </fieldset>
					<h3>Brothers & sisters data</h3>
                    <fieldset>
                        <h2>Sibling</h2>
                        <div class="fieldset-content">
      
                                <div class="row">
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Name <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                               
                            
                                
                                
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Division <span class="text-red">*</span></label>
                                    <select class="select2">
                                        <option value="">Please Select School *</option>
                                        <option value="1">British </option>
                                        <option value="2">National</option>                                       
                                    </select>
                                </div>
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Grade <span class="text-red">*</span></label>
                                    <select class="select2">
                                        <option value="">Please Select Grade *</option>
                                        <option value="1">British </option>
                                        <option value="2">National</option>                                       
                                    </select>
                                </div>
                                
                                
                                
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Sibling From <span class="text-red">*</span></label>
                                    <select class="select2">
                                        <option value="">Please Select  *</option>
                                        <option value="1">Father</option>
                                        <option value="2">Mother</option>
                                          <option value="2">Parent</option>
                                    </select>
                                </div>
                                
                            <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Sibling From <span class="text-red">*</span></label>
                                    <select class="select2">
                                        <option value="">Please Select  *</option>
                                        <option value="1">Father</option>
                                        <option value="2">Mother</option>
                                          <option value="2">Parent</option>
                                    </select>
                                </div>
                                   <div class="col-xl-4 col-lg-6 col-12 form-group mg-t-12 mg-t-30">
                                   <button class="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Add Sibling</button>
                                   </div> 
                                
                            </div>
                        </div>
                    </fieldset>
					<h3>Other information</h3>
                    <fieldset>
                        <h2>Emergency Contact</h2>
                        <div class="fieldset-content">
<div class="row">
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Name 1 <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Relation <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label> Mobile<span class="text-red">*</span></label>
                                    <input type="tel" id="phone" name="phone"  class="form-control">
                                </div>
                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                    <label>Address <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label> E-Mail<span class="text-red">*</span></label>
                                    <input type="email" placeholder="" class="form-control">
                                </div>                          
                                
                                
                                  <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Name 2 <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label>Relation <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                <div class="col-xl-4 col-lg-6 col-12 form-group">
                                    <label> Mobile<span class="text-red">*</span></label>
                                    <input type="tel" id="phone" name="phone"  class="form-control">
                                </div>
                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                    <label>Address <span class="text-red">*</span></label>
                                    <input type="text" placeholder="" class="form-control">
                                </div>
                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                    <label> E-Mail<span class="text-red">*</span></label>
                                    <input type="email" placeholder="" class="form-control">
                                </div>
                                
                            </div>
                        </div>
                    </fieldset>
                </div>
            </form>
        </div>

    </div>
                        
                        </div>
                    </div>
                </div>
                <!-- Custom Modal Area End Here -->
                <footer class="footer-wrap-layout1">
                    <div class="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a
                            href="#">PsdBosS</a></div>
                </footer>
            </div>
        </div>
        <!-- Page Area End Here -->
        </div>

    </div>
</div>
</template>
<script>
// @ is an alias to /src
/*import Gender from '@/components/Gender.vue'
import Nationality from '@/components/Nationality.vue'
import Religions from '@/components/Religions.vue'
import AcademicYears from '@/components/AcademicYears.vue'
import Divisions from '@/components/Divisions.vue'
import Grades from '@/components/Grades.vue'
import Classes from '@/components/Classes.vue'
import Buses from '@/components/Buses.vue'
import Languages from '@/components/Languages.vue'*/
//import FormSaveResetBtns from '@/components/FormSaveResetBtns.vue'
import MaritalStatus from '@/components/MaritalStatus.vue'
import axios from 'axios';
export default {
    name: 'Admission',
    components : {
        /*FormSaveResetBtns,Gender,Nationality,Religions,AcademicYears,Divisions,Grades,Classes,Buses,Languages,*/MaritalStatus
    },
    data: function () {
        return {
            genders : [],
            nationalities: [],
            religions : [],
            academic_years: [],
            languages: [],
            buses: [],
            //classes: [],
            grades: [],
            divisions: [],            
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
        //"class_id": 6,
        "national_no": "earum",
        "passport_no": "repellat",
        "birth_date": "1999-05-24",
        "birth_place": "illum",
        //"october_age_date": "2009-05-10",
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
        "photo": "",
        "code": "vero",
        "lang_id": 8,
        "birth_certificate": "",
        "academic_house": "quaerat",
        "report_cards": "",
        "referance_letter": "",
        "referance_name": "provident",
        "referance_email": "alias@ggg.com",
        "referance_phone": "ut",
        "enroll_date": "2020-09-04",
        //"custody": "et",
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
    async mounted () {
        //console.log(this.formType)
        //console.log(this.$route.params.stdid)
        this.getGenders()
        this.getNationalities()
        this.getReligions()
        this.getLanguages()
        this.getBuses()
        //this.getClasses()
        this.getGrades()  
        this.getDivisions() 
        this.getAcademicYear()
        
       //this.formType === 'edit'? this.GetStudentData() : ''
  },
    methods: {
        getGenders() {
            axios.get('http://3.219.94.115/api/v1/genders',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.genders = response.data.data))
        .catch(error => console.log(error))            
        },
        getNationalities() {
            axios.get('http://3.219.94.115/api/v1/nationalities',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.nationalities = response.data.data))
        .catch(error => console.log(error))            
        },
        getReligions() {
            axios.get('http://3.219.94.115/api/v1/religions',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
            })
            .then(response => (this.religions = response.data.data))
            .catch(error => console.log(error))            
        },
        getLanguages() {
            axios.get('http://3.219.94.115/api/v1/languages',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.languages = response.data.data))
        .catch(error => console.log(error))
        },
        getBuses() {
            axios.get('http://3.219.94.115/api/v1/buses',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.buses = response.data.data))
        .catch(error => console.log(error))
        },
        getClasses() {
            axios.get('http://3.219.94.115/api/v1/classes',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.classes = response.data.data))
        .catch(error => console.log(error))
        },
        getGrades() {
            axios.get('http://3.219.94.115/api/v1/grades',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.grades = response.data.data))
        .catch(error => console.log(error))
        },
        getDivisions(){
            axios.get('http://3.219.94.115/api/v1/divisions',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.divisions = response.data.data))
        .catch(error => console.log(error))        
        },
        getAcademicYear(){
                axios.get('http://3.219.94.115/api/v1/applyYears',{
                headers: {
                'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then(response => (this.academic_years = response.data.data))
            .catch(error => console.log(error))       
        },
        GetStudentData() {
        axios.get('http://3.219.94.115/api/v1/students/'+this.StdId,{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
      })
      .then(response => (response.status === 200 ? this.form = response.data.data : alert('Error')))
      .catch(error => console.log(error))
        },
      uploadStdPhoto(){
        this.file = this.$refs.photo.files[0];
      },
      uploadBDfile(){
        this.file = this.$refs.birth_certificate.files[0];
      },
      uploadReportCard(){
        this.file = this.$refs.report_cards.files[0];
      },
      uploadRefLetter(){
        this.file = this.$refs.referance_letter.files[0];
      },                    
    // submit the form to our backend api
        async submitAdmissionForm(e) {
            e.preventDefault()
            this.form.append('photo', this.photo);
            this.form.append('birth_certificate', this.birth_certificate);
            this.form.append('report_cards', this.report_cards);
            this.form.append('referance_letter', this.referance_letter);
            console.log(this.form)
            axios.post('http://3.219.94.115/api/v1/admissions',
            this.form,
            {
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'multipart/form-data'
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


<style>
/* @extend display-flex; */
display-flex, .form-flex, .form-date-group, .steps ul, .title, .title .step-number, .actions ul li a, .form-radio-flex, .form-find {
  display: flex;
  display: -webkit-flex; }

/* @extend list-type-ulli; */
list-type-ulli, .steps ul, .actions ul {
  list-style-type: none;
  margin: 0;
  padding: 0; }

/* roboto-slab-300 - latin */

a:focus,
a:active {
  text-decoration: none;
  outline: none;
  transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -webkit-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s; }


.main {
  padding: 50px 0;
  position: relative;
  z-index: 99; }

.container {
  width: 1400px;
  margin: 0 auto;
  background: #fff; }

fieldset {
  padding: 0px;
  margin: 0px;
  border: none;
  padding-left: 45px;
  padding-right: 55px;
  padding-top: 45px; }

p.desc {
  margin: 0px;
  margin-bottom: 40px;
  color: #555; }

.form-label {
  display: block;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px; }

.text-input {
  font-size: 12px;
  color: #999;
  display: block;
  margin-top: 5px; }
  .text-input span {
    color: #222;
    font-weight: bold; }




.form-flex {
  margin: 0 -10px; }
  .form-flex .form-group {
    width: 50%;
    padding: 0 10px; }


.vertical {
  display: block;
  width: 100%;
  overflow: hidden; }
  .vertical .steps {
    float: left;
    width: 20%; }
  .vertical .content,
  .vertical .actions {
    float: right;
    width: 80%; }



.steps ul {
  flex-direction: column;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -o-flex-direction: column;
  -ms-flex-direction: column;
  position: relative;
  padding-left: 0px;
  padding-top: 60px; }
  .steps ul li {
    padding-bottom: 40px;
    position: relative;
    z-index: 99; }
    .steps ul li a {
      text-decoration: none;
      color: #222; }
  .steps ul:after {
    position: absolute;
    content: '';
    width: 2px;
    height: 85%;
    background: #ebebeb;
    left: 19px;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    z-index: 9; }

.title {
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }
  .title .step-number {
    width: 40px;
    height: 40px;
    align-items: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    -o-align-items: center;
    -ms-align-items: center;
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    background: #ebebeb;
    color: #999;
    margin-right: 15px;
    border: 5px solid #fff;
    font-weight: bold; }
  .title .step-text {
    font-weight: 700;
    color: #999;
    font-size: 15px;}

.current .title .step-number {
  background: #4966b1;
  color: #fff; }
.current .title .step-text {
  color: #4966b1; }

.content h3 {
  display: none; }

.content, .actions {
  background: #f8f8f8; }

.actions {
  padding-bottom: 90px; }
  .actions ul {
    padding-left: 45px;
    padding-right: 55px; }
    .actions ul .disabled {
      display: none; }
    .actions ul li {
      float: right; }
      .actions ul li:first-child {
        float: left; }
        .actions ul li:first-child a {
          background: #e8e8e8;
          color: #999; }
      .actions ul li a {
        width: 140px;
        height: 50px;
        color: #fff;
        background: #4966b1;
        align-items: center;
        -moz-align-items: center;
        -webkit-align-items: center;
        -o-align-items: center;
        -ms-align-items: center;
        justify-content: center;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -o-justify-content: center;
        -ms-justify-content: center;
        text-decoration: none; }

.form-radio-flex {
  flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -o-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  margin: 0 -15px; }
  .form-radio-flex .form-radio-item {
    padding: 0 15px;
    margin-bottom: 25px; }
  .form-radio-flex input {
    width: 0;
    height: 0;
    position: absolute;
    left: -9999px; }
  .form-radio-flex input + label {
    margin: 0px;
    width: 223px;
    height: 133px;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    text-align: center;
    text-transform: none;
    transition: border-color .15s ease-out,  color .25s ease-out,  background-color .15s ease-out, box-shadow .15s ease-out; }
    .form-radio-flex input + label img {
      width: 100%;
      height: 100%; }
  .form-radio-flex input:checked + label {
    border: 1px solid #4966b1;
    z-index: 1; }
  .form-radio-flex input:focus + label {
    outline: none; }
  .form-radio-flex input:hover {
    border: 1px solid #4966b1; }

label.error {
  display: block;
  position: absolute;
  top: 0px;
  right: 0; }
  label.error:after {
    font-family: 'Material-Design-Iconic-Font';
    position: absolute;
    content: '\f135';
    right: 20px;
    top: 50px;
    font-size: 13px;
    color: #f63726; }

input.error {
  border: 1px solid #f63726; }

#find_bank {
  padding: 0 55px;
  width: 680px;
  margin-right: 20px; }
  #find_bank::-webkit-input-placeholder {
    font-weight: 400; }
  #find_bank::-moz-placeholder {
    font-weight: 400; }
  #find_bank:-ms-input-placeholder {
    font-weight: 400; }
  #find_bank:-moz-placeholder {
    font-weight: 400; }

.submit {
  width: 150px;
  background: #666;
  color: #fff;
  font-weight: 400;
  cursor: pointer; }
  .submit:hover {
    background-color: #4d4d4d; }

.form-find {
  position: relative;
  padding-bottom: 70px;
  border-bottom: 1px solid #ebebeb; }

.form-icon {
  position: absolute;
  top: 12px;
  left: 20px;
  font-size: 18px;
  color: #999; }

.choose-bank-desc {
  color: #666;
  margin: 0px;
  padding-top: 30px;
  padding-bottom: 35px; }

#slider-margin {
  height: 9px;
  border: none;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  -o-box-shadow: none;
  -ms-box-shadow: none;
  background: #e8e8e8;
  border-radius: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  -o-border-radius: 0px;
  -ms-border-radius: 0px;
  position: relative;
  margin-top: 110px; }
  #slider-margin .noUi-marker-horizontal.noUi-marker-large, #slider-margin .noUi-marker-horizontal.noUi-marker {
    height: 0px; }
  #slider-margin .noUi-connect {
    background: #4966b1; }
  #slider-margin .noUi-connects {
    border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    -o-border-radius: 0px;
    -ms-border-radius: 0px; }
  #slider-margin .noUi-handle {
    width: 15px;
    height: 30px;
    top: -12px;
    background: #e8e8e8;
    outline: none;
    border: none;
    right: -15px;
    border: 1px solid #4966b1;
    border-radius: 0px; }
    #slider-margin .noUi-handle:after, #slider-margin .noUi-handle:before {
      width: 0px; }
    #slider-margin .noUi-handle .noUi-tooltip {
      bottom: 33px;
      border: none;
      background: transparent;
      font-size: 16px;
      color: #4966b1;
      padding: 0px; }
  #slider-margin .noUi-pips {
    width: 96%; }
    #slider-margin .noUi-pips .noUi-value {
      top: -50px;
      font-size: 16px;
      color: #666; }
      #slider-margin .noUi-pips .noUi-value:before {
        content: '$'; }
    #slider-margin .noUi-pips .noUi-value-horizontal {
      transform: none;
      -moz-transform: none;
      -webkit-transform: none;
      -o-transform: none;
      -ms-transform: none; }

.your-money {
  font-size: 16px;
  color: #222;
  margin: 0px;
  padding-top: 62px; }
  .your-money .money {
    font-size: 28px;
    font-weight: bold; }

@media screen and (max-width: 1024px) {
  .container {
    width: calc(100% - 40px);
    max-width: 100%; }

  .vertical .steps, .vertical .content, .vertical .actions {
    float: none;
    width: 100%; }

  #find_bank {
    width: 100%; }

  .form-radio-flex input + label {
    width: 190px;
    height: 120px; } }
@media screen and (max-width: 992px) {
  .content {
    height: 900px; }

  .form-radio-flex input + label {
    width: 100px;
    height: 65px; } }
@media screen and (max-width: 768px) {
  #steps-uid-0-p-0 .form-row, #steps-uid-0-p-0 .form-group, #steps-uid-0-p-0 .form-date {
    width: 100%; }

  .form-flex {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    margin: 0px; }

  .form-flex .form-group {
    padding: 0px; }

  fieldset, .actions ul {
    padding-left: 30px;
    padding-right: 30px; }

  #slider-margin .noUi-pips {
    width: 94%; } }
@media screen and (max-width: 480px) {
  .form-date-group, .form-find {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column; }

  .content {
    height: 1050px; }

  #find_bank {
    margin-bottom: 20px; }

  .actions ul li a {
    width: 100px; }

  .form-radio-flex {
    margin: 0 -5px; }

  .form-radio-flex .form-radio-item {
    padding: 0 5px; }

  .form-radio-flex input + label {
    width: 90px;
    height: 61px; } }

/*# sourceMappingURL=style.css.map */

	.new-added-form .form-group .form-control {
    background-color: #fff;
    height: 50px;
    border: 2px solid #f0f1f3;
}
.select2-container .select2-selection--single {
    background-color: #fff;
    height: 50px;
    border: 2px solid #f0f1f3;
}
 .new-added-form .form-group i {
    position: absolute;
    top: 56px;
    right: 34px;
    font-size: 15px;
    color: #000;
}
.new-added-form .form-group .form-control-file {
    display: inline-block;
    width: auto;
}
</style>