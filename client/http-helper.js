import axios from 'axios';

const request = (data) => 
  axios.post('/submit', {input: data})
       .then(res => res.data);


export default request;