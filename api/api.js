import axios from 'axios';

export default axios.create({
  baseURL: 'https://fieldist-back-end.herokuapp.com/api/users',
});
