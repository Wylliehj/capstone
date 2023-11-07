import axios from 'axios';

class Api {
    static async getHome(){
        let response  = await axios.get('http://localhost:3001/content/text', {headers: {rest_id: 1, loc_id: 'home'}});
        return response.data;
    }

    static async getMenuData(type){
        let response = await axios.get(`http://localhost:3001/menu/${type}`, {headers: {rest_id: 1}})
        return response.data;
    }

    static async getHours(){
        let response = await axios.get('http://localhost:3001/content/hours', {headers: {rest_id: 1}})
        return response.data;
    }
}

export default Api;