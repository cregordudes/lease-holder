import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url:any) => {
   const { data } = await axios.get((url), {
      headers: {
         'x-rapidapi-host': 'bayut.p.rapidapi.com',
         'x-rapidapi-key': '596e0d5cb4msha982a33f32e631fp17399ajsn058b81b85117'
       }
   })
   return data;
}