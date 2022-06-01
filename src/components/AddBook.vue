<template>
    <form v-on:click.prevent="submit"  class="needs-validation">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" :class="{'is-invalid': validationStatus($v.name)}" class="form-control " id="name" v-model.trim="$v.name.$model">
    <div v-if="!$v.name.required" class="invalid-feedback">name is required</div>
  </div>
  <div class="mb-3">
    <label for="price" class="form-label">Price</label>
    <input type="text" :class="{'is-invalid': validationStatus($v.price)}" class="form-control" id="price" v-model.trim="price">
     <div v-if="!$v.price.required" class="invalid-feedback">price is required</div>
  </div>
  <div class="mb-3">
    <label for="description"  class="form-label">Description</label>
    <input type="text" :class="{'is-invalid': validationStatus($v.description)}" class="form-control" id="description" v-model.trim="description">
    <div v-if="!$v.description.required" class="invalid-feedback">description is required</div>
    <div v-if="!$v.description.minLength" class="invalid-feedback">minimum length is 6</div>
    <div v-if="!$v.description.maxLength" class="invalid-feedback">maximum length is 18</div>

  </div>
  <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="saveBook()">Save</button>
  </div>
</form>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import axios from "axios";
import maxLength from 'vuelidate/lib/validators/maxLength';
import minLength from 'vuelidate/lib/validators/minLength';
export default {
    name:'AddBook',
    data(){
        return{
            name:'',
            price:'',
            description:''
        };
    },
    validations:{
         name:{required},
         price:{required},
         description:{required , minLength:minLength(6) ,maxLength:maxLength(18)}
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
        },
        submit(){
          this.$v.$touch();
          if (this.$v.$pendding || this.$v.$error) return;
          alert('data submited')
        },
        validationStatus(validation){
          return typeof validation != "undefined" ? validation.$error : false;
        }
    }
    
}    

</script>