import axios from '../utils/axios'
export function updatePhoto(userId, photo) {
    let obj = { id: userId, photo }
    axios.post('/customer/saveOrUpdate', obj).then((result) => {
        return result;
    });
}
