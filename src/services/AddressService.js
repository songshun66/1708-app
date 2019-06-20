import axios from '../utils/axios'
export function updatePhoto(userId, address) {
    let obj = { id: userId, photo }
    axios.post('/address/saveOrUpdate', obj).then((result) => {
        return result;
    });
}