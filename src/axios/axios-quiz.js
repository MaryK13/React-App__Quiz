import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-f1e70-default-rtdb.firebaseio.com/'
})