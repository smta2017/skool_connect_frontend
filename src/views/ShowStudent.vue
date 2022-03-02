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
                        <h3 class="text-dark-medium font-medium">{{this.userData.first_name_en}} {{this.userData.middle_name_en}} {{this.userData.last_name_en}}</h3>
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
                                <td class="font-medium text-dark-medium">{{this.userData.first_name_en}} {{this.userData.middle_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Division:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.division}}</td>
                            </tr>
                            <tr>
                                <td>Grade:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.grade}}</td>
                            </tr>
                            <tr>
                                <td>Class:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.class}}</td>
                            </tr>
                            <tr>
                                <td>National No:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.national_no}}</td>
                            </tr>
                            <tr>
                                <td>Religion:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.first_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Passport No:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.passport_no}}</td>
                            </tr>
                            <tr>
                                <td>Birh Date:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.birth_date}}</td>
                            </tr>
                            <tr>
                                <td>Birth Place:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.birth_place}}</td>
                            </tr>
                            <tr>
                                <td>October Age:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.october_age_date}}</td>
                            </tr>
                            <tr>
                                <td>Academic Year:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.academic_year_applying}}</td>
                            </tr>
                            <tr>
                                <td>Nationality:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.nationality}}</td>
                            </tr>
                            <tr>
                                <td>Nationality:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.nationality}}</td>
                            </tr>

                            <tr>
                                <td>Gender:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.gender}}</td>
                            </tr>
                            <tr>
                                <td>Bus:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.bus}}</td>
                            </tr>
                            <tr>
                                <td>Religion:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.religion}}</td>
                            </tr>
                            <tr>
                                <td>Previous School Nursery:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.previous_school_nursery}}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.address}}</td>
                            </tr>
                            <tr>
                                <td>City:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.city}}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.email}}</td>
                            </tr>
                            <tr>
                                <td>Mobile:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.mobile}}</td>
                            </tr>
                            <tr>
                                <td>Join Date:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.submit_date}}</td>
                            </tr>
                            <tr>
                                <td>Code:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.code}}</td>
                            </tr>
                            <tr>
                                <td>Language:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.lang}}</td>
                            </tr>
                            <tr>
                                <td>Custody:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.custody}}</td>
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
                userData: {}
            }
        } ,
  async created () {
    axios
      .get('http://3.219.94.115/api/v1/students/'+this.$route.params.stdid,{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.userData = response.data.data))
      .catch(error => console.log(error))
  }        
    }
</script>