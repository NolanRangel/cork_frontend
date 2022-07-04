import axios from 'axios'



class AxiosService {


    constructor() {
        console.log("Axios Service is instantiated");
    }

    getRestClient() {
        if (!this.serviceInstance) {
            this.serviceInstance = axios.create({
            baseURL: 'https://cork-community.herokuapp.com/',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            },
        });
        }
        return this.serviceInstance;
    }
}
    
    
    
export default (new AxiosService());
