
import axios  from 'axios';
import { url } from '../constants/networkConstants';


const AxiosCall = axios.create({
    baseURL: url
})

class ToDoService{
    async FetchDummyData(payload){
        const uri = "todos"
        const response = await AxiosCall.get(uri)
        return response;
    }

    async postDummtData(payload){
        const uri = "todos"
        const response = await AxiosCall.post(uri,payload)
        return response;
    }
}

export default new ToDoService;