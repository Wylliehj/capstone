import axios from 'axios';

/**API helper, static class methods for making request to the api */


class Api {
    /**Get all content from database with relation to the home page */
    static async getHome(){
        let response  = await axios.get('http://localhost:3001/content/text', {headers: {rest_id: 1, loc_id: 'home'}});
        return response.data;
    }

    /**Get all menu items for a specified(type) menu */
    static async getMenuData(type){
        let response = await axios.get(`http://localhost:3001/menu/${type}`, {headers: {rest_id: 1}})
        return response.data;
    }

    /**Get hours for a particular restaurant */
    static async getHours(){
        let response = await axios.get('http://localhost:3001/content/hours', {headers: {rest_id: 1}})
        return response.data;
    }
}

export default Api;