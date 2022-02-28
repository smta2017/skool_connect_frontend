<template>
    <div class="card height-auto">
        <div class="card-body">
            <div class="heading-layout1">
                <div class="item-title">
                    <h3>About Parent</h3>
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
                <!--<div class="item-img">
                    <img src="img/figure/student1.jpg" alt="student">
                </div> -->
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
                                <td>English Name:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.first_name_en}} {{this.userData.middle_name_en}}</td>
                            </tr>
                            <tr>
                                <td>Arabic Name:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.first_name_ar}} {{this.userData.middle_name_ar}}</td>
                            </tr>
                            <tr>
                                <td>Marital Status:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.marital_status_id}}</td>
                            </tr>
                            <tr>
                                <td>University:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.university}}</td>
                            </tr>
                            <tr>
                                <td>Occupation:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.occupation}}</td>
                            </tr>
                            <tr>
                                <td>Employer:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.employer}}</td>
                            </tr>
                            <tr>
                                <td>Type Of Business:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.type_of_business}}</td>
                            </tr>
                            <tr>
                                <td>Business Address:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.business_address}}</td>
                            </tr>
                            <tr>
                                <td>Business Mobile:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.business_mobile}}</td>
                            </tr>
                            <tr>
                                <td>Business Email:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.business_email}}</td>
                            </tr>
                            <tr>
                                <td>Alumni:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.alumni}}</td>
                            </tr>
                            <tr>
                                <td>Class Off:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.class_off}}</td>
                            </tr>

                            <tr>
                                <td>Type:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.type}}</td>
                            </tr>
                            <tr>
                                <td>School:</td>
                                <td class="font-medium text-dark-medium">{{this.userData.school}}</td>
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
      .get('http://3.219.94.115/api/v1/parents/'+this.$route.params.parentid,{
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