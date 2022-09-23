import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function usePages() {
    const pages = ref([])
    const page = ref([])
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

    

    const storePage = async (data) => {
            await axios.post('/api/savePage', data)
            await router.push({name: 'App'})
      
    }

    const alertCompany = async (id) => {
        await axios.put('http://localhost:8000/api/'+id+'/updating', company.value)
        await router.push({name: 'companies.index'})
    }

    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }


    return {
        storePage
    }
}
