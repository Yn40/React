import axios from 'axios';

const initialApi = {
  baseUrl: "/getVilageFcst",
  key : decodeURIComponent("VN%2BdeeEAr2XgLFywD98WjBFfbqh6bahBMb%2Bxjr0kgK%2BCyOzHGHmtcyKc46YINx8VwWmiHWbm2vf48d6B%2F2C5WQ%3D%3D"),
  state :{
    loading:false,
    error:false
  }
}
export async function getWhearder(){
  console.log("------");
  return await axios.get(initialApi.baseUrl,{
    params:{
      "serviceKey":initialApi.key,
      "pageNo" : 1,
      "numOfRows" : 10,
      "dataType":"JSON",
      "base_date" : 20210412,
      "base_time" : "0500",
      "nx" : 40,
      "ny" : 120,
    }
  });
}