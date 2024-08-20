import axios from "axios";

const usersLoader = async () => {
    const users = await axios.get ('jsonplaceholder.typicode.com/users');
    return users.data;
}

export default usersLoader;