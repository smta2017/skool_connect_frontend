import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Students from '../views/Students.vue'
import Parents from '../views/Parents.vue'
import Teachers from '../views/Teachers.vue'
import Admission from '../views/Admission.vue'
import AddStudent from '../views/AddStudent.vue'
import EditStudent from '../views/EditStudent.vue'

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
    path: '/add_student',
    name: 'AddStudent',
    component: AddStudent
  },
  {
    path: '/add_student',
    name: 'AddStudent',
    component: AddStudent
  },
  {path: '/edit_student/:stdid', name: 'EditStudent', component: EditStudent}     
]

const router = new VueRouter({
  routes
})

export default router
