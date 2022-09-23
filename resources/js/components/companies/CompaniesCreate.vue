<template>
   <div v-if="errors">
  <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
    <p v-for="error in v" :key="error" class="text-sm">
      {{ error }}
    </p>
  </div>
</div>
  <div class="bg-light">
        <div class="d-flex flex-row justify-content-center align-items-center" style="height: 100px;">
            <p class="fw-bold ">
           Create Project
            </p>  
        </div>
    </div>
<div class="container " >
        <div class="row justify-content-center align-items-center">
            <div class="col justify-content-center align-items-center">
                <form @submit.prevent="saveCompany">
                <div class="mb-3">
                    <label  class="form-label">Project Name</label>
                    <input type="text" class="form-control" name="name" id="name" v-model="form.name" aria-describedby="emailHelp" required>
                    <!-- <div class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                
                <router-link :to="{name:'companies.index'}"> <b-button type="button" class="btn btn-secondary">Cancel</b-button></router-link>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
import { reactive } from "vue";
import useCompanies from "../../composables/companies";
import CompaniesindexVue from "./Companiesindex.vue";
export default {
    setup() {
        let user_id=document.querySelector('meta[name="user-id"]').getAttribute('content');
        //console.log('==>>'+user_id);
        const form = reactive({
            'user_id':user_id,
            'name': '',
            'email': '',
            'address': '',
            'website': '',
        })
        const { errors, storeCompany } = useCompanies()
        const saveCompany = async () => {
            await storeCompany({...form});
        }
        return {
            form,
            errors,
            saveCompany
        }
    }
}
</script>
