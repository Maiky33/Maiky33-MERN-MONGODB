import axios from 'axios'


export const createAccount = (Account) => {  
    axios.post("http://localhost:4000/signup",Account)
}