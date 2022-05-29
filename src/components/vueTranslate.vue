<template>
    <nav class="container mb-4 mt-4">
    <div class="row">
        <div class="col-9"></div>
        <div class="col-3">
            <select class="custom-select" v-model="lang" @change="handleChange($event)">
                <option data-img-src="/flags/egypt.svg" value="en" >English</option>
                <option  value="ar"><img src="getFlagImage(united-states-of-america.svg)">عربى</option>
            </select>
        </div>
    </div>
    <!-- <img src="/flags/egypt.svg"> -->
    </nav>
</template>

<script>
export default {
    name:"app-translate",
    data(){
      const lang=localStorage.getItem('lang') || 'en';
      return{
          lang:lang
      }
    },
    methods:{
       handleChange(event){
           localStorage.setItem('lang',event.target.value);
           window.location.reload();
       },
       getFlagImage(image){
         return require('./../assets/'+image)
       }
    }
}
</script>