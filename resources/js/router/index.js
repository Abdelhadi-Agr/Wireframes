import {createRouter,createWebHistory} from "vue-router";
import CompaniesindexVue from "../components/companies/Companiesindex.vue";
import CompaniesCreateVue from "../components/companies/CompaniesCreate.vue";
import CompanyUpdateVue from "../components/companies/CompanyUpdate.vue";
import App from "../components/companies/App.vue"
import Project from "../components/companies/Project.vue"

const routes=[
    
    {
        path:'/draw/project/:id',
        name:'App',
        component:App,
        props:true
    },
    {
        path:'/dashboard',
        name:'companies.index',
        component:CompaniesindexVue
    },
    {
        path:'/companies/create/',
        name:'companies.create',
        component:CompaniesCreateVue
    },
    {
        path:'/companies/:id/updating',
        name:'companies.update',
        component:CompanyUpdateVue,
        props:true
    }
]
export default createRouter({
    history:createWebHistory(),
    routes
})