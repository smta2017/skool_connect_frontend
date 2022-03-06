import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Parents from '../views/Parents.vue'
import AddParent from '../views/AddParent.vue'
import ShowParent from '../views/ShowParent.vue'
import EditParent from '../views/EditParent.vue'

import Teachers from '../views/Teachers.vue'


import Admission from '../views/Admission.vue'
import AdmissionList from '../views/AdmissionList.vue'
import AdmissionDetails from '../views/AdmissionDetails'
import Students from '../views/Students.vue'
import AddStudent from '../views/AddStudent.vue'
import EditStudent from '../views/EditStudent.vue'
import ShowStudent from '../views/ShowStudent.vue'

import OnlineAdmission from '../views/OnlineAdmission.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/parents',
    name: 'Parents',
    component: Parents
  },
  {
    path: '/add_parent',
    name: 'AddParent',
    component: AddParent
  },
  {
    path: '/edit_parent/:parentid', 
    name: 'EditParent', 
    component: EditParent
  },
  {
    path: '/show_parent/:parentid', 
    name: 'ShowParent', 
    component: ShowParent
  },
  {
    path: '/teachers',
    name: 'Teachers',
    component: Teachers
  },
  {
    path: '/admission',
    name: 'Admission',
    component: Admission
  },
  {
    path: '/admission_list',
    name: 'AdmissionList',
    component: AdmissionList
  },
  {
    path: '/admission_details/:id',
    name: 'AdmissionDetails',
    component: AdmissionDetails
  },
  {
    path: '/add_student',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/edit_student/:stdid', 
    name: 'EditStudent', 
    component: EditStudent
  },
  {
    path: '/show_student/:stdid', 
    name: 'ShowStudent', 
    component: ShowStudent
  },
  {
    path: '/online_admission', 
    name: 'OnlineAdmission', 
    component: OnlineAdmission
  }     
]

const router = new VueRouter({
  routes
})

export default router
