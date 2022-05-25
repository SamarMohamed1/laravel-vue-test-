<template>
    <form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" v-model="name">
  </div>
  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="text" class="form-control" id="price" v-model="price">
  </div>
  <div class="mb-3">
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" v-model="description">
  </div>
  <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="saveBook()">Save</button>
  </div>
</form>
</template>

<script>
import axios from "axios";
export default {
    name:'AddBook',
    data(){
        return{
            name:'',
            price:'',
            description:''
        };
    },
    created(){
    },
    methods:{
  
        async saveBook(){
            try {//bb3t aldata m3a al api 3la 4akl opject
                await axios.post('http://localhost:8000/api/books',{
                  name:this.name,
                  price:this.price,
                  description:this.description
                });//al5atwa aly b3d kda b2olo yfadely alkyam aly mwgoda fl input
                 this.name='';
                 this.price='';
                 this.description='';
                 this.$router.push('/');//b3d kda yrga3ni llkayma alr2esya
              
            } catch (error) {
                console.log(error);
            }
        }
    }
    
}    

</script>