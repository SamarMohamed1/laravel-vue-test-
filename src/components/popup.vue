<template>
    <div id="app-popup">
        <button class="button mx-2" @click="showModal1 = true " >
        Login
        </button>
        <button class="button" @click="showModal2 = true " >
        Register
        </button>
        <!--form login-->
        <transition class="fade-enter-active" appear>
        <div class="modal-overlay-content bg-light" v-if="showModal1" >
           <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control p-3" id="exampleInputPassword1" placeholder="Password">
                </div>
               
                <button type="button" @click="Login()" class="btn btn-info my-3 p-2">Login</button>
            </form>
            <!--closing button-->
              <button class="button cancel" @click="showModal1 = false ">
                Cancel 
            </button>
        </div>
        </transition>
        <!--form register-->
        <transition class="fade" appear>
        <div class="modal-overlay-content bg-light" v-if="showModal2" >
           <form>
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" v-model="name" class="form-control p-3" id="name"  placeholder="Enter name">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"  v-model="email" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                 <!-- <div class="form-group">
                    <label for="phone">Email address</label>
                    <input type="number" class="form-control p-3" id="phone"  placeholder="Enter phone">
                </div> -->
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password"  v-model="password" class="form-control p-3" id="exampleInputPassword1" placeholder="Password">
                </div>
               
                <button type="button" @click="register()" class="btn btn-info my-3 p-2">Register</button>
            </form>
            <!--closing button-->
              <button class="button cancel" @click="showModal2 = false">
                Cancel 
            </button>
        </div>
        </transition>

        <!-- <transition name="slide" appear>
        <div class="modal" v-if="showModal">
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
        <button class="button" @click="showModal = true">
            Close Modal
        </button>
        </div>
        </transition> -->
    </div>
</template>

<script>
import axios from "axios";

export default {
    name:'app-popup',
   data(){
        return{
          showModal1: false,
          showModal2:false,
          disable:false,
          name:'',
          email:'',
          password:''
        };
    },
    methods:{

    async Login(){
              try {
                const response =await axios.post('http://localhost:8000/api/login');
                this.token1=response;
                console.log(response)
              
            } catch (error) {
                console.log(error);
            }
        },
          async register(){
              try {
                const response =await axios.post('http://localhost:8000/api/register',{
                  name:this.name,
                  email:this.email,
                  password:this.password
                });

                 this.name='';
                 this.email='';
                 this.password='';
                //  this.$router.push('/');
                this.token2=response.data;
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
              
                
        }
    
}
}
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'montserrat', sans-serif;
}
#app {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
}
.button {
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px;
    background-image: linear-gradient(to right, #cc2e5d, #ff5858);
    border-radius: 8px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    transition: 0.4s ease-out;
}
.cancel{
        float: right;

}
.button:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
.modal-overlay-content {
    position: absolute;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 98;
    /* background-color: rgba(240, 221, 221, 0.897); */
    margin: auto;
    width: 60%;
    border: 5px solid #c5c5c1;
    padding: 10px;
    border-radius: 16px;
    transform: translate(3ch, 3mm);

}
 .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 16px;
    padding: 25px;
}
 .modal h1 {
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
}
.modal p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity 1.5s;
}
 .fade-enter, .fade-leave-to {
	opacity: 0;
}
.slide-enter-active, .slide-leave-active {
   transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
	transform: translateY(-50%) translateX(100vw);
}
 
</style>