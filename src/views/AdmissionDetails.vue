<template>
    <div class="card height-auto">
        <div class="card-body">
            <div class="heading-layout1">
                <div class="item-title">
                    <h3>About Me</h3>
                </div>
                <div class="dropdown">
                    <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">...</a>
        
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#"><i class="fas fa-times text-orange-red"></i>Close</a>
                        <a class="dropdown-item" href="#"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                        <a class="dropdown-item" href="#"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                    </div>
                </div>
            </div>
            <div class="single-info-details">
                <div class="item-img">
                    <img src="img/figure/student1.jpg" alt="student">
                </div>
                <div class="item-content">
                    <div class="header-inline item-header">
                        <h3 class="text-dark-medium font-medium">{{this.admissionData.student.first_name_en}} {{this.admissionData.student.middle_name_en}} {{this.admissionData.student.last_name_en}}</h3>
                    <div class="header-elements">
                        <ul>
                            <li><a href="#"><i class="far fa-edit"></i></a></li>
                            <li><a href="#"><i class="fas fa-print"></i></a></li>
                            <li><a href="#"><i class="fas fa-download"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="info-table table-responsive">
                    <table class="table text-nowrap">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.first_name_en}} {{this.admissionData.student.middle_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Division:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.division}}</td>
                            </tr>
                            <tr>
                                <td>Grade:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.grade}}</td>
                            </tr>
                            <tr>
                                <td>Class:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.class}}</td>
                            </tr>
                            <tr>
                                <td>National No:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.national_no}}</td>
                            </tr>
                            <tr>
                                <td>Religion:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.first_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Passport No:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.passport_no}}</td>
                            </tr>
                            <tr>
                                <td>Birh Date:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.birth_date}}</td>
                            </tr>
                            <tr>
                                <td>Birth Place:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.birth_place}}</td>
                            </tr>
                            <tr>
                                <td>October Age:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.october_age_date}}</td>
                            </tr>
                            <tr>
                                <td>Academic Year:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.academic_year_applying}}</td>
                            </tr>
                            <tr>
                                <td>Nationality:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.nationality}}</td>
                            </tr>

                            <tr>
                                <td>Gender:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.gender}}</td>
                            </tr>
                            <tr>
                                <td>Bus:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.bus_id}}</td>
                            </tr>
                            <tr>
                                <td>Religion:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.religion}}</td>
                            </tr>
                            <tr>
                                <td>Previous School Nursery:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.previous_school_nursery}}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.address}}</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.city}}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.email}}</td>
                            </tr>
                            <tr>
                                <td>Mobile:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.mobile}}</td>
                            </tr>
                            <tr>
                                <td>Join Date:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.submit_date}}</td>
                            </tr>
                            <tr>
                                <td>Code:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.code}}</td>
                            </tr>
                            <tr>
                                <td>Language:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.language}}</td>
                            </tr>
                            <tr>
                                <td>Custody:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.student.custody}}</td>
                            </tr>                           
                        </tbody>
                    </table>


                    </div>
                    <h3>First Parent</h3>
                    <div class="info-table table-responsive">
                    <table class="table text-nowrap">
                        <tbody>
                            <tr>
                                <td>English Name:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.first_name_en}} {{this.admissionData.parent1.middle_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Arabic Name:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.first_name_ar}} {{this.admissionData.parent1.middle_name_ar}}</td>
                            </tr>
                            <tr>
                                <td>Marital Status:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.marital_status_id}}</td>
                            </tr>
                            <tr>
                                <td>University:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.university}}</td>
                            </tr>
                            <tr>
                                <td>Occupation:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.occupation}}</td>
                            </tr>
                            <tr>
                                <td>Employer:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.employer}}</td>
                            </tr>
                            <tr>
                                <td>Type Of Business:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.type_of_business}}</td>
                            </tr>
                            <tr>
                                <td>Business Address:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.business_address}}</td>
                            </tr>
                            <tr>
                                <td>Business Mobile:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.business_mobile}}</td>
                            </tr>
                            <tr>
                                <td>Business Email:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.business_email}}</td>
                            </tr>
                            <tr>
                                <td>Alumni:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.alumni}}</td>
                            </tr>
                            <tr>
                                <td>Class Off:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.class_off}}</td>
                            </tr>

                            <tr>
                                <td>Type:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.type}}</td>
                            </tr>
                            <tr>
                                <td>School:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent1.school}}</td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
                <h3>Second Parent</h3>
                <div class="info-table table-responsive">
                    <table class="table text-nowrap">
                        <tbody>
                            <tr>
                                <td>English Name:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.first_name_en}} {{this.admissionData.parent2.middle_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Arabic Name:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.first_name_ar}} {{this.admissionData.parent2.middle_name_ar}}</td>
                            </tr>
                            <tr>
                                <td>Marital Status:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.marital_status_id}}</td>
                            </tr>
                            <tr>
                                <td>University:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.university}}</td>
                            </tr>
                            <tr>
                                <td>Occupation:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.occupation}}</td>
                            </tr>
                            <tr>
                                <td>Employer:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.employer}}</td>
                            </tr>
                            <tr>
                                <td>Type Of Business:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.type_of_business}}</td>
                            </tr>
                            <tr>
                                <td>Business Address:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.business_address}}</td>
                            </tr>
                            <tr>
                                <td>Business Mobile:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.business_mobile}}</td>
                            </tr>
                            <tr>
                                <td>Business Email:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.business_email}}</td>
                            </tr>
                            <tr>
                                <td>Alumni:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.alumni}}</td>
                            </tr>
                            <tr>
                                <td>Class Off:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.class_off}}</td>
                            </tr>

                            <tr>
                                <td>Type:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.type}}</td>
                            </tr>
                            <tr>
                                <td>School:</td>
                                <td class="font-medium text-dark-medium">{{this.admissionData.parent2.school}}</td>
                            </tr>                            
                        </tbody>
                    </table>
                </div>
                            </div>
                        </div>
                    </div>
                </div> 
</template>

<script>
    import axios from 'axios';
    export default { 
        data: function () {
            return {
                admissionData: {}
            }
        } ,
  async created () {
    axios
      .get('http://3.219.94.115/api/v1/admissions/'+this.$route.params.id,{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.admissionData = response.data.data))
      .catch(error => console.log(error))
  }        
    }
</script>
