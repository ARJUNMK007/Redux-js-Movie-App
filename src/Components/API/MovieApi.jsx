import axios from "axios";
import { baseUrl } from "../../Constants/BaseUrl";


export default axios.create({
    baseURL:baseUrl,
})