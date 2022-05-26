<template>
    <div>
       <router-link class="btn btn-success m-4" :to="{name: 'create'}">Add Book</router-link>

       <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>     

    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id"><!-- 3shn al id bta3 al item uniqe wl key lazm mytkrr4-->
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <!-- <td>{{item.description}}</td> -->

        <td v-if="!readMore[item.id]">{{item.description.substring(0, 100)}}
            <p @click="showMore(item.id)" v-if="!readMore[item.id]&&item.description.length > 150" class="pointer">...Show more</p>
        </td>
        <td v-if="readMore[item.id]">{{item.description}}
             <p @click="showLess(item.id)" v-if="readMore[item.id]" class="pointer">Show less</p>
        </td>


        <!--action buttons-->
      <td>
          <button type="button" class="btn btn-danger mx-2" @click="daleteBook(item.id)">Delete</button>
          <router-link :to="{name: 'Edit',params:{id:item.id}}" class="btn btn-warning">Edit</router-link>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name:'BookList',
    data(){
        return{
            items:[],//aly b loop 3leha fo2
            readMore: {},//for see more feature
            token1:{},
            token2:{},
            name:'',
            email:'',
            password:''


        };
    },
    created(){
        this.getBooks();
    },
    methods:{
        async getBooks(){
            try {
                const response =await axios.get('http://localhost:8000/api/books');
                this.items=response.data;
              
            } catch (error) {
                console.log(error);
            }
        },
         async daleteBook(id){
            try {
                await axios.delete(`http://localhost:8000/api/books/${id}`);
                this.getBooks();
            } catch (error) {
                console.log(error);
            }
        },
        showMore(id) {
            this.$set(this.readMore, id, true);
        },
        showLess(id) {
            this.$set(this.readMore, id, false);
        }
       
}
}

</script>

<style scoped>
.pointer{
    cursor: pointer;
    font-size: 16px;
    color:rgb(23, 211, 195)
}
</style>