<template>
<div >
    <div class="bg-light">
        <div class="d-flex flex-row justify-content-center align-items-center" style="height: 100px;">
            <p class="fw-bold ">
            Mes Projects
            </p>
            
        </div>
    </div>
    <div>
        <div class="justify-content-end"> <router-link :to="{name:'companies.create'}"><button type="button" class="btn btn-primary mr-0">
            create project
        </button></router-link> </div>
    </div>
    <div class="container " >
        <div class="row justify-content-center align-items-center">
            <div class="">
                    <b-table
                    ref="mytable"
                     selectable
                        striped
                        hover
                        :fields="fields"
                        id="my-table"
                        :items="laravelData.data"
                    >
                    <template v-slot:cell(Update)="data">
                        <router-link :to="{name:'companies.update',params:{id:data.item._id}}"> <b-button type="button" class="btn btn-primary">Edit</b-button></router-link>
                    </template>
                    <template v-slot:cell(WorkIn)="data">
                        <router-link :to="{name:'App',params:{id:data.item._id}}"><b-button type="button" class="btn btn-success">Start</b-button></router-link>
                    </template>
                    <template v-slot:cell(Delete)="data">
                        <b-button type="button" class="btn btn-danger" @click="deleteCompany(data.item._id)">Delete</b-button>
                    </template>
                    </b-table>
            </div>
            <div>
                    <Pagination :data="laravelData" @pagination-change-page="getResults" class="justify-content-end" />
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { onMounted } from '@vue/runtime-core';
import useCompanies  from "../../composables/companies";

export default{
    data() {
        return {         
            // Our data object that holds the Laravel paginator data
            laravelData: {},  
            fields: [{
                key: "_id",
                label: "ID",
                sortable: true,
                sortDirection: "desc",
                },{
                key: 'name',
                label: 'Name',
                sortable: true,
                },{
                key: "statut",
                label: "Statut",
                },{
                key: "Update",
                label: "Update",
                },{
                key: "WorkIn",
                label: "Work In",
                },{
                key: "Delete",
                label: "Delete",
                }] 
        }
    },
    mounted() {
        // Fetch initial results
        let user_id=document.querySelector('meta[name="user-id"]').getAttribute('content');
        this.getResults();       
    },

    methods: {
        // Our method to GET results from a Laravel endpoint
        getResults(page=1) {
            axios.get('/api/companiesByid/'+this.user_id+'?page='+page)
                .then(response => {
                    this.laravelData = response.data;
                   
                });
        },
       
    },
    setup(){
        const {companies,getCompanies,destroyCompany,alertCompany,my_companies_fnct}=useCompanies()
        let user_id=document.querySelector('meta[name="user-id"]').getAttribute('content');

        onMounted(my_companies_fnct(user_id))
        const deleteCompany=async(id)=>{
            if(!window.confirm('are you sure')){
                return
            }
            await destroyCompany(id);
            await my_companies_fnct(user_id);
            // this.laravelData=companies;
          location.reload();
        }
        
        return{
            companies,deleteCompany,user_id//updateCompany,
        }
    }
}
</script>