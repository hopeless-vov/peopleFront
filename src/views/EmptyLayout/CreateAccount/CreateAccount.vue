<template>
    <div class="singinForm">
        <span>Create Account</span> 
        <form class="form" v-on:submit.prevent="login()">
            <div class="groupInputs">
                <div>
                    <span for="text">Input Your Name</span>
                    <p><input v-model="name" type="text"></p>
                </div>
                <div>
                    <span for="text">Input your Second name</span>
                    <p><input v-model="secondName" type="text"></p>
                </div>
            </div> 
            <div class="groupInputs">
                <div>
                    <span for="text">Age</span>
                    <p><input v-model="age" type="number"></p>
                </div>
                <div>
                    <span for="text">Your Group Name</span>
                    <p><input v-model="group" type="text"></p>
                </div>
            </div> 
            <div class="groupInputs">   
                <div>
                    <span for="text">Something about you</span>
                    <p><input v-model="aboutYou" type="text"></p>
                </div>
                <div>
                    <span for="email">Corporate Email</span>
                    <p><input v-model="email" type="email"></p>
                </div>
            </div>
             <div class="groupInputs">
                <div>
                    <span for="password">Password</span>
                    <p><input v-model="password" type="password"></p>
                </div> 
                <button class="butInput" type="submit">Create Account</button>
             </div> 
        </form>
    </div>
</template>
<script>  
import axios from "axios";
export default {   
    data: () => {
        return { 
            name: '',
            secondName:'',
            age: null,
            group:'',
            aboutYou: '',
            email: '',
            password: '',  
            img: '',
            errors:[],
            skipQuery: true,
        }
    },
    methods: { 
        login() {
            axios
            .post("http://localhost:4040/student/registration", {
                firstName: this.name,
                lastName: this.secondName,
                age: this.age,
                groupName: this.group,
                description: this.aboutYou,
                imageUrl:this.img,
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push('/login') 
                console.log('Okas');
            })
            .catch(() => {
                console.log("error");
            }); 
        }
    },
}
</script>

<style lang="scss">
 @import './create-account.scss';
</style>