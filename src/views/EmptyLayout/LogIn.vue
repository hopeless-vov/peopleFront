<template>
    <div class="singinForm">
        <span>Sign In</span>
        <form class="form" v-on:submit.prevent="login()">
            <div>
                <span for="email">Corporate Email</span>
                <p><input v-model="email" type="email"></p>
            </div>
            <div>
                <span for="password">Password</span>
                <p><input v-model="password" type="password"></p>
            </div>
            <span>
                <router-link to="/create-account">Create Account</router-link>
            </span> 
            <button class="butInput" type="submit">Sign In</button>
        </form>
    </div>
</template>
<script> 

import axios from "axios";

export default {
    name: 'singIn',   
    data: () => {
        return { 
            email: '',
            password: '',  
            errors:[],
            skipQuery: true,
            student: '',
        }
    }, 
    methods: {  
        login() {
            axios.get("http://localhost:4040/student/all_students")
            .then((students) => {  
            for( let i =0; i < students.data.length; i++) {
                if(students.data[i].email === this.email) {
                    console.log();
                    this.student = students.data[i] 
                    localStorage.setItem("email" , this.email )
                    this.$router.push({path:'/', params:{student: this.student}}) 
                } 
                else {
                    console.log('nope');
                }
            }  
            })
            .catch(() => {
                console.log("error");
            }); 
        }
    },
}
</script>

<style lang="scss">
@import './login.scss';
</style>