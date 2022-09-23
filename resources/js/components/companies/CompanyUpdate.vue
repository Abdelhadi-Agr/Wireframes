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
           Change Name of Project
            </p>  
        </div>
    </div>
<div class="container " >
        <div class="row justify-content-center align-items-center">
            <div class="col justify-content-center align-items-center">
                <form v-on:submit.prevent="saveCompany">
                <div class="mb-3">
                    <label  class="form-label">Project Name</label>
                    <input type="text" class="form-control" name="name" id="name" v-model="company.name" aria-describedby="emailHelp" required>
                    <!-- <div class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                    <label  class="form-label">Statut</label>
                    <select class="form-select" aria-label="Default select example" v-model="company.statut" required>
                        <option selected value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                        <option value="Annulé">Annulé</option>
                    </select>
                    <!-- <input type="text" class="form-control" name="name" id="name" v-model="form.statut" aria-describedby="emailHelp" required> -->
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
import useCompanies from "../../composables/companies";
import {onMounted} from "vue";
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { errors, company, getCompany, alertCompany } = useCompanies()
        console.log("the props:"+props.id);
        onMounted(getCompany(props.id))
        const saveCompany = async () => {
            await alertCompany(props.id)
        }
        return {
            errors,
            company,
            saveCompany
        }
    }
}
</script>