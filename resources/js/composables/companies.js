import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useCompanies() {
    const companies = ref([])
    const company = ref([])
    const router = useRouter()
    const errors = ref('')

    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    const getCompany=async(id)=>{
        let response=await axios.get('/api/companies/'+id)
        company.value=response.data.data;
        //console.log(companies.value);
    }

    const my_companies_fnct=async(id_user)=>{
        let response=await axios.get('api/user_id/'+id_user)
        companies.value=response.data.data;
    }

    

    const storeCompany = async (data) => {
            let result=await axios.post('http://localhost:8000/api/posting', data)
            await router.push({name: 'companies.index'})
            console.log(result);
            if(result.data=='used'){
                alert('this name already used');
            }
    }

    const alertCompany = async (id) => {
        let result=await axios.put('http://localhost:8000/api/'+id+'/updating', company.value)
        await router.push({name: 'companies.index'})
        if(result.data=="cas3"){
            alert("this name is already used");
        }
       console.log(result.data)
    }

    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }


    return {
        companies,
        company,
        errors,
        getCompanies,
        my_companies_fnct,
        getCompany,
        storeCompany,
        alertCompany,
        destroyCompany
    }
}
