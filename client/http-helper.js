import axios from 'axios';

const request = (data) => {
  axios.post('/submit', {input: data})
}

export default request;