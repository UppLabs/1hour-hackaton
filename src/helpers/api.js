import projects from '../data.json'
import axios from 'axios';
import token from './token';


export const signIn =  async () => {
    // const response = await api.post('', {});

    // console.log(response);
    token.setToken('');
}

export const getProjects = async (search) => {

     const response = await api.get('');
     console.log(response);

    /*
    if(!!search) {
        const results = projects.results.filter(x => (x.label.toLowerCase().indexOf(search.toLowerCase()) > -1));

        return results;
    } 

    return [];
    */
}

export const api = axios.create({
  baseURL: '',
});

api.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const localToken = token.getToken();
    if(localToken) {
      newConfig.headers.authorization = 'Bearer ' + localToken.accessToken;
      return newConfig;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// api.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     return error;
// });