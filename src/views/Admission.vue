<template>
    <div >
        <div >
            <form v-on:submit="AddNewStudent" class="new-added-form">
                <StudentInfo />
                <ParentsInfo />
                <SiblingsInfo />
            </form>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import StudentInfo from '@/components/StudentInfo.vue'
import ParentsInfo from '@/components/ParentsInfo.vue'
import SiblingsInfo from '@/components/SiblingsInfo.vue'
export default {
    name: 'Admission',
    components : {
        StudentInfo,ParentsInfo,SiblingsInfo
    },
    methods: {
    // submit the form to our backend api
        async submAddNewStudentitForm(e) {
            e.preventDefault()
        /*const res = await fetch('/backend-api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            // pass in the information from our form
            body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
            }) 
        });*/
        }
    }
}
</script>
