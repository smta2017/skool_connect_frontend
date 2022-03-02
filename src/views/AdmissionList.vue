<template>
<div class="row">
    <div class="col-lg-12">
        <div class="card dashboard-card-eleven">
            <div class="card-body">
                <div class="heading-layout1">
                    <div class="item-title">
                        <h3>All Students Data</h3>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">...</a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <router-link to="/admission" class="dropdown-item"><i class="fas fa-times text-orange-green"></i>Add New</router-link>
                            <a class="dropdown-item" href="#"><i class="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                            <a class="dropdown-item" href="#"><i class="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                            
                        </div>
                    </div>
                </div>
                <div class="table-box-wrap">
                    <form class="search-form-box">
                        <div class="row gutters-8">
                            <div class="col-lg-4 col-12 form-group">
                                <input type="text" placeholder="Search by Exam ..." class="form-control">
                            </div>
                            <div class="col-lg-3 col-12 form-group">
                                <input type="text" placeholder="Search by Subject ..." class="form-control">
                            </div>
                            <div class="col-lg-3 col-12 form-group">
                                <input type="text" placeholder="dd/mm/yyyy" class="form-control">
                            </div>
                            <div class="col-lg-2 col-12 form-group">
                                <button type="submit" class="fw-btn-fill btn-gradient-yellow">SEARCH</button>
                            </div>
                        </div>
                    </form>
                    <div class="table-responsive Student_data_table">
                            <table class="table display data-table text-nowrap all_student">
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Parents</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody :key="student.id" v-for="student in applicatioInfo">
                                    <tr>

                                        <td>{{student.student.first_name_en}} {{student.student.first_name_en}} </td>
                                        <td>{{student.parent1.last_name_en}} {{student.parent1.first_name_en}} <br> {{student.parent2.last_name_en}} {{student.parent2.first_name_en}}</td>
                                        <td>{{student.admission_status_id}}</td>
								
										
                                        <td>
                                            <div class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item modal-trigger" href="" data-toggle="modal" data-target="#sign-up"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Evaliuation Card</a>
                                                    <router-link class="dropdown-item" :to="'/admission_details/' + student.id"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Show</router-link>
                                                    <a class="dropdown-item" href="#" v-on:click="stdDelete(student.id)"><i class="fas fa-solid fa-users text-dark-pastel-black"></i>Delete</a>		
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <EvaluationCard :admissionData="student" v-if="student.id < 3"/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import EvaluationCard from '@/components/EvaluationCard.vue'
import axios from 'axios';
export default {
    name: 'AdmissionList',
    
    components : {
        EvaluationCard
    },
    data: function () {
        return {
            applicatioInfo : { }
        }
    },
    async created () {
    axios
      .get('http://3.219.94.115/api/v1/admissions',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.applicatioInfo = response.data.data))
      .catch(error => console.log(error))
  }
}
</script>
