import axios from '../utils/axios'
export default class ProductService{
  findAll(){
    let list = []
    axios.get('/product/findAll').then((result)=>{
      list=result.data
    })
    return list
  }
}
