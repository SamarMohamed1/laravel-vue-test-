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
        <button type="button" class="btn btn-primary" @click="updateBook">Update</button>
  </div>
</form>
</template>

<script>
import axios from "axios";
export default {
    name:'EditBook',
    data(){
        return{
            name:'',
            price:'',
            description:''
        };
    },
    created(){
        this.getBookById();
    },
    methods:{

        async getBookById(){
               try {
                const response = await axios.get(`http://localhost:8000/api/books/${this.$route.params.id}`)
                  this.name = response.data.book.name;
                  this.price = response.data.book.price;
                  this.description = response.data.book.description;
                  console.log(response);

            } catch (error) {
                console.log(error);
            }

        },
  
        async updateBook(){
            try {
                await axios.put(`http://localhost:8000/api/books/${this.$route.params.id}`,{
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