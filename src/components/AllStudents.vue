<template>
<!-- Exam Result Area Start Here -->
<div class="row">
    <div class="col-lg-12">
        <div class="card dashboard-card-eleven">
            <div class="card-body">
                <div class="heading-layout1">
                    <div class="item-title">
                        <h3>All Students Data</h3>
                        <li class="nav-item">
                                    <router-link :to="{ name: 'AddStudent'}" class="nav-link">
                                        <i class="fas fa-angle-right"></i>
                                        Add Student
                                    </router-link>
                                </li>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">...</a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="fas fa-times text-orange-red"></i>Close</a>
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
                                   
                                        <!--<th>Applecation ID</th> -->
                                        <!--<th>School ID</th>-->
                                        <!--<th>Medical</th>-->
                                        <th>Custody</th>
                                        <th>Student Name</th>
                                        <th>Family</th>
                                        <th>Division</th>
                                        <th>Grade</th>
                                        <th>Class</th>
                                        <th>Religon</th>
										<!--<th>Sibiling</th> -->
										<!--<th>Exempted</th> -->										
										<th>Year Joined</th>
										<th>action</th>
                                    </tr>
                                </thead>
                                <tbody :key="student.id" v-for="student in all_students">
                                    <tr>
                                        <!--<td>
                                            {{student.code}}
                                        </td> -->                                     
                                        <!--<td >{{student.code}}</td> -->
                                        <!-- <td class="student_medical"><i class="flaticon-doctor"></i></td>-->
                                        <td>{{student.custody}}</td>
                                        <td>{{student.first_name_en}} </td>
                                        <td>{{student.last_name_en}}</td>
                                        <td>{{student.division_id}}</td>
                                        <td>{{student.grade_id}}</td>
                                        <td>{{student.class_id}}</td>
                                        <td>{{student.religion_id}}</td>
										<!--<td>{{student.custody}}</td> -->
										<!--<td>{{student.custody}}</td> -->
										<td>{{student.created_at}}</td>
								
										
                                        <td>
                                            <div class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <span class="flaticon-more-button-of-three-dots"></span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <router-link class="dropdown-item" :to="'/edit_student/' + student.id"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Edit</router-link>
                                                    <router-link class="dropdown-item" :to="'/show_student/' + student.id"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Show</router-link>
                                                    <a class="dropdown-item" href="#" v-on:click="stdDelete(student.id)"><i class="fas fa-solid fa-users text-dark-pastel-black"></i>Delete</a>
                                                    
															
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        </div>
                </div>
            </div>
        </div>
    </div>

<!-- Exam Result Area End Here -->
    
</template>
<script>
import axios from 'axios';
export default {
    
  name: "AllStudents",
  data () {
    return {
      title: '',
      status : '',
      all_students : []
    } 
  },
  async created () {
    axios
      .get('http://3.219.94.115/api/v1/students',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.all_students = response.data.data))
      .catch(error => console.log(error))
  },
  methods : {
      stdDelete(stdID) {
          console.log(stdID)
          axios
            .delete('http://3.219.94.115/api/v1/students/'+stdID,{
                headers: {
                'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then((response)=> {
                console.log(response)
                response.status === 200
                ? (this.all_students = this.all_students.filter((student) => student.id !== stdID))
                : alert(response.data.message)
            //this.$emit('add-academic-year', response.data.data)
          })
            .catch(error => console.log(error))
      }
  }  
}
</script>