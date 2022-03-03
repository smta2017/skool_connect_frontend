<template>
<!-- Exam Result Area Start Here -->
<div class="row">
    <div class="col-lg-12">
        <div class="card dashboard-card-eleven">
            <div class="card-body">
                <div class="heading-layout1">
                    <div class="item-title">
                        <h3>All Parents Data</h3>
                    </div>
                    <div class="dropdown">
                        <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">...</a>

                        <div class="dropdown-menu dropdown-menu-right">
                            <router-link class="dropdown-item" :to="{ name: 'AddParent'}"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Add New Parent</router-link>
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
                    <div class="table-responsive result-table-box">
                        <table class="table display data-table text-nowrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Marital Status</th>
                                    <th>university</th>
                                    <th>occupation</th>
                                    <th>business_mobile</th>
                                    <th>business_email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody :key="parent.id" v-for="parent in all_parents">
                                <tr>
                                    <td>{{parent.id}}</td>
                                    <td>{{parent.first_name_en}} {{parent.last_name_en}}</td>
                                    <td>{{parent.marital_status_id}}</td>
                                    <td>{{parent.university}}</td>
                                    <td>{{parent.occupation}}</td>
                                    <td>{{parent.business_mobile}}</td>
                                    <td>{{parent.business_email}}</td>
                                    <td>
                                        <div class="dropdown">
                                            <a href="#" class="dropdown-toggle"
                                                data-toggle="dropdown" aria-expanded="false">
                                                <span
                                                    class="flaticon-more-button-of-three-dots"></span>
                                            </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <router-link class="dropdown-item" :to="'/edit_parent/' + parent.id"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Edit</router-link>
                                                    <router-link class="dropdown-item" :to="'/show_parent/' + parent.id"><i class="fas fa-user-graduate text-dark-pastel-black"></i>Show</router-link>
                                                    <a class="dropdown-item" href="#" v-on:click="parentDelete(parent.id)"><i class="fas fa-solid fa-users text-dark-pastel-black"></i>Delete</a>		
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
    
  name: "AllParents",
  data () {
    return {
      title: '',
      status : '',
      all_parents : []
    } 
  },
  async created () {
    axios
      .get('http://3.219.94.115/api/v1/parents',{
        headers: {
          'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
          'Accept' : 'application/json',
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
      .then(response => (this.all_parents = response.data.data))
      .catch(error => console.log(error))
  },
  methods : {
      parentDelete(parentID) {
          //console.log(stdID)
          
          axios
            .delete('http://3.219.94.115/api/v1/parents/'+parentID,{
                headers: {
                'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then((response)=> {
                console.log(response)
                response.status === 200
                ? (this.all_parents = this.all_parents.filter((parent) => parent.id !== parentID))
                : alert(response.data.message)
            //this.$emit('add-academic-year', response.data.data)
          })
            .catch(error => console.log(error))
      }
  }  
}
</script>