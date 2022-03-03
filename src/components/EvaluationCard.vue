<template>
<div class="modal sign-up-modal fade" :id="'sign-up' + this.admissionData.evaluation_card.id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered evaluation-card" role="document">
        <div class="modal-content">
            <form class="new-added-form" v-on:submit="updateEvaluationCard">
            <div class="modal-body ">
                <div class="close-btn">
                    <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="single-info-details">
                    <div class="item-img pm-5">
                        <img src="img/figure/user.jpg" />
                    </div>
                    <div class="item-content ">
                        <div class="header-inline item-header ">
                            <h3>{{admissionData.student.first_name_en}} {{admissionData.student.middle_name_en}} {{admissionData.student.last_name_en}}</h3>
                            <div class="header-elements">
                                <ul>
                                    <li><a href="#"><i class="fas fa-file-pdf"></i></a></li>
                                    <li><a href="#"><i class="fas fa-print"></i></a></li>
                                    <li><a href="#"><i class="fas fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="info-table table-responsive">
                            <table class="table table-striped">
                                <tbody>  
                                    <tr>
                                        <td>Grade Year:</td>
                                        <td class="font-medium text-dark-medium">{{admissionData.student.grade}} - {{admissionData.student.academic_year_applying}}</td>
                                    </tr>
                                    <tr>
                                        <td>Birth Date :</td>
                                        <td class="font-medium text-dark-medium">{{admissionData.student.birth_date}} ({{admissionData.student.october_age_date}})</td>
                                    </tr>
                                    <tr>
                                        <td>Application number :</td>
                                        <td class="font-medium text-dark-medium">{{admissionData.id}}</td>
                                    </tr>
                                    <tr>
                                        <td>Nursery:</td>
                                        <td class="font-medium text-dark-medium"> {{admissionData.student.previous_school_nursery}}</td>
                                    </tr>
                                    <tr>
                                        <td>School:</td>
                                        <td class="font-medium text-dark-medium">{{admissionData.student.previous_school_nursery}}</td>
                                    </tr>
                                    <tr>
                                        <td>Status:</td>
                                        <td class="font-medium text-dark-medium">{{admissionData.admission_status.name}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="card ui-tab-card">
                        <div class="card-body">
                            <div class="heading-layout1 mg-b-25"></div>
                        <div class="border-nav-tab">
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#tab7" role="tab" aria-selected="true">Exam dates</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab8" role="tab" aria-selected="false">Entrance Assessment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab9" role="tab" aria-selected="false">Principal Reviews</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#tab10" role="tab" aria-selected="false">Director Reviews</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab7" role="tabpanel">
                                    <div class="card height-auto">
                                            <div class="row">
                                                <div class="col-xl-3 col-lg-6 col-12 form-group pt-5">
                                                    <h6>Date of assessment1</h6>
                                                </div>
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <label>Date  <span class="text-red">*</span></label>
                                                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker" data-position='bottom right' v-model="evaluationCardInfo.exam_date">
                                                    <i class="far fa-calendar-alt"></i>
                                                </div>
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <div class="md-form md-outline">
                                                        <label for="default-picker"> Time <span class="text-red">*</span></label>
                                                        <input type="time" id="default-picker" class="form-control" placeholder="Select time" v-model="evaluationCardInfo.exam_date">
  
                                                    </div>
                                                </div>
                                                <!-- <SchoolBuildings  :reason="reason[0]" @assessmentOneBuildingChange="assessmentOneBuildingChange"/> -->
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <label>School Buildings *</label>
                                                    <select class="select2" v-model="evaluationCardInfo.exam_building_id">
                                                        <option value="">Please Select School Building *</option>
                                                        <option :key="building.id" v-for="building in schoolBuildings" :value="building.id">{{ building.name }}</option>                                       
                                                    </select>    
                                                </div>                                                

                                                <div class="col-xl-3 col-lg-6 col-12 form-group pt-5">
                                                    <h6>Date of assessment2</h6>
                                                </div>
			
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <label>Date  <span class="text-red">*</span></label>
                                                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker"
                                                        data-position='bottom right' v-model="evaluationCardInfo.exam_date2">
                                                    <i class="far fa-calendar-alt"></i>
                                                </div>
                               
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <div class="md-form md-outline">
                                                        <label for="default-picker"> Time <span class="text-red">*</span></label>
                                                        <input type="time" id="default-picker" class="form-control" placeholder="Select time" v-model="evaluationCardInfo.exam_date2">
                                                    </div>
                                                </div>
			
                                                <!--<SchoolBuildings  :reason="reason[1]" @assessmentTwoBuildingChange="assessmentTwoBuildingChange"/> -->
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <label>School Buildings *</label>
                                                    <select class="select2" v-model="evaluationCardInfo.exam_building2_id">
                                                        <option value="">Please Select School Building *</option>
                                                        <option :key="building.id" v-for="building in schoolBuildings" :value="building.id">{{ building.name }}</option>                                       
                                                    </select>    
                                                </div> 

                                                <div class="col-xl-3 col-lg-6 col-12 form-group pt-5">
                                                    <h6>Parents meeting  </h6>
                                                </div>
			
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <label>Date  <span class="text-red">*</span></label>
                                                    <input type="text" placeholder="dd/mm/yyyy" class="form-control air-datepicker" data-position='bottom right' v-model="evaluationCardInfo.meeting_date">
                                                    <i class="far fa-calendar-alt"></i>
                                                </div>
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <div class="md-form md-outline">
                                                        <label for="default-picker"> Time <span class="text-red">*</span></label>
                                                        <input type="time" id="default-picker" class="form-control" placeholder="Select time" v-model="evaluationCardInfo.meeting_date">
                                                        
                                                    </div>
                                                </div>
			
                                                <!-- <SchoolBuildings  :reason="reason[2]" @parentMeetingBuildingChange="parentMeetingBuildingChange"/> -->
                                                <div class="col-xl-3 col-lg-6 col-12 form-group">
                                                    <label>School Buildings *</label>
                                                    <select class="select2" v-model="evaluationCardInfo.meeting_building_id">
                                                        <option value="">Please Select School Building *</option>
                                                        <option :key="building.id" v-for="building in schoolBuildings" :value="building.id">{{ building.name }}</option>                                       
                                                    </select>    
                                                </div>                                                
                                                <div class="col-lg-12 col-12 form-group">
                                                    <label>Registrar Note</label>
                                                    <textarea class="textarea form-control evalution-txt" name="message" id="form-message" cols="10" rows="3" v-model="evaluationCardInfo.reg_notes"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="tab-pane fade" id="tab8" role="tabpanel">
                                    <div class="card height-auto">
                                        <div class="heading-layout1">
                                            <div class="item-title">
                                                <h3>Chronological age</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-12 form-group">
                                                <label>Ability:<span class="text-red">*</span></label>
                                                <select class="" v-model="evaluationCardInfo.entrance_ability">
                                                    <option value="">Select</option>
                                                    <option value="A1">A1 </option>
                                                    <option value="A2">A2</option>   
                                                </select>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-12 form-group">
                                                <label>Recommendation:<span class="text-red">*</span></label>
                                                <select class="" v-model="evaluationCardInfo.entrance_recommendation">
                                                    <option value="">Select</option>
                                                    <option value="R1">R1 </option>
                                                    <option value="R2">R2</option>   
                                                </select>
                                            </div>
                                            <div class="col-lg-12 col-12 form-group">
                                                <label>Observations comment</label>
                                                <textarea class="textarea form-control evalution-txt" name="message" id="form-message" cols="10" rows="12" v-model="evaluationCardInfo.observation_comment"></textarea>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab9" role="tabpanel">
                                    <div class="card height-auto">
                                        <div class="heading-layout1">

                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-12 form-group">
                                                <label>Principal Reviews</label>
                                                <textarea class="textarea form-control evalution-txt" name="message" id="form-message" cols="10" rows="12" v-model="evaluationCardInfo.principal_note"></textarea>
                                            </div> 
                               
                                            <div class="col-xl-6 col-lg-6 col-12 form-group">
                                                <label>Recommendation:<span class="text-red">*</span></label>
                                                <select class="" v-model="evaluationCardInfo.principal_recommendation">
                                                    <option value="">Select</option>
                                                    <option value="Yes">Yes </option>
                                                    <option value="Yes_With_Condition">Yes With Condition</option>
                                                    <option value="Re_assess">Re-assess</option>
                                                    <option value="No">No</option>
                                                    <option value="More_Info_Needed">More Info Needed</option>
                                                </select>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-12 form-group">
                                                <label>Ability:<span class="text-red">*</span></label>
                                                <select class="" v-model="evaluationCardInfo.principal_ability">
                                                    <option value="">Select</option>
                                                    <option value="Low">Low</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="High">High</option>   
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="tab10" role="tabpanel">
                                    <div class="card height-auto">
                                        <div class="row">
                                            <div class="col-lg-12 col-12 form-group">
                                                <label>Director Reviews</label>
                                                <textarea class="textarea form-control evalution-txt" name="message" id="form-message" cols="10" rows="12" v-model="evaluationCardInfo.director_comment"></textarea>
                                            </div> 
                                                <div class="col-xl-6 col-lg-6 col-12 form-group">
                                                    <label>Application status :<span class="text-red">*</span></label>
                                                    <select class="" v-model="evaluationCardInfo.application_status">
                                                        <option value="">Select</option>
                                                        <option value="Waiting_List">Waiting List</option>
                                                        <option value="Accepted">Accepted</option>
                                                        <option value="Rejected">Rejected</option>   
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <FormSaveResetBtns />
                </div>
            </div>
        </div>
    </form>
    </div>
</div>
</div>    
</template>
<script>
import axios from 'axios';
//import SchoolBuildings from '@/components/SchoolBuildings.vue'
import FormSaveResetBtns from '@/components/FormSaveResetBtns.vue'
export default {
    name: 'EvalutaionCard',
    components: {
        /*SchoolBuildings,*/FormSaveResetBtns
    },
    props: ['admissionData'],
        data: function () {
        return {
            reason : ['assessment1','assessment2','parentsMeeting'],
            //defulat_building : [this.evaluationCardInfo.exam_building_id,this.evaluationCardInfo.exam_building2_id,this.evaluationCardInfo.meeting_building_id],
            evaluationCardInfo : {
                "id": "",
                "exam_date": "2020-02-20",
                "exam_building_id": "",
                "exam_date2": "2020-03-01",
                "exam_building2_id": "",
                "meeting_date": "2020-03-05",
                "meeting_building_id": "",
                "reg_notes": "",
                "entrance_ability": "",
                "entrance_recommendation": "",
                "observation_comment": "",
                "principal_note": "",
                "principal_recommendation": "",
                "principal_ability": "",
                "director_comment": "",
                "application_status": "",
                //"admission_id": this.admissionData.id,
                "created_at": "",
                "updated_at": ""
            },
            "schoolBuildings" : []
        }
    },
    async created () {
        console.log(this.admissionData.admission_status.name)
        //this.admissionData.id === 1 ? this.getEvalutaionCarsData() : ''
        this.getEvalutaionCarsData()
        this.getSchoolBuilding()
  },
    methods : {
        getEvalutaionCarsData() {
            console.log('evaulation card is : '+this.admissionData.evaluation_card.id)
            axios
            .get('http://3.219.94.115/api/v1/evaluationCards/'+this.admissionData.evaluation_card.id,{
                headers: {
                'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
                }
            })
            .then(response => (this.evaluationCardInfo = response.data.data))
            .catch(error => console.log(error))          
        },
        async getSchoolBuilding() {
            axios.get('http://3.219.94.115/api/v1/schoolBuildings',{
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            'Content-Type' : 'application/x-www-form-urlencoded'
            }
        })
        .then(response => (this.schoolBuildings = response.data.data))
        .catch(error => console.log(error))            
        },
        async updateEvaluationCard(e) {
            e.preventDefault()
            console.log(this.evaluationCardInfo)
                        e.preventDefault()     
            axios.put('http://3.219.94.115/api/v1/evaluationCards/'+this.admissionData.evaluation_card.id,
            this.evaluationCardInfo,
            {
            headers: {
            'Authorization': 'Bearer 5|RTtsuhV8WRfE6DwPjnsd5JCy300j88SkRxT6KB3G' ,
            'Accept' : 'application/json',
            //'Content-Type' : 'application/x-www-form-urlencoded'
            }
            })
            .then((response)=> {
                    response.status === 200 ? alert('Evaluation Card Saved successfully') : alert('Error')
                })
            .catch(error => console.log(error))
        },
        assessmentOneBuildingChange(valueId) {
            this.evaluationCardInfo.exam_building_id = valueId
            console.log('assesment 1 '+this.evaluationCardInfo.exam_building_id)
        },
        assessmentTwoBuildingChange(valueId) {
            this.evaluationCardInfo.exam_building2_id = valueId
            console.log('assesment 2 '+this.evaluationCardInfo.exam_building2_id)
        },
        parentMeetingBuildingChange(valueId) {
            this.evaluationCardInfo.meeting_building_id = valueId
            console.log('parents meeeting '+this.evaluationCardInfo.meeting_building_id)
        }
    }
}
</script>
<style scoped>
	.evaluation-card{max-width: 75%;}
	.single-info-details .item-content .info-table .table{width:70%}
	.datepickers-container{z-index:10000000000000000}
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
.card{width:100%}

.new-added-form .form-group .evalution-txt{height:auto}
</style>