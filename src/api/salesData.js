import { handleSuccess, handleError } from './apiUtils';
const salesUrl = "https://f4fwakcwlf.execute-api.us-east-1.amazonaws.com/dev/sales";

export const  getSalesData = async ()=>{
    return  fetch(salesUrl)
    .then(handleSuccess)
    .catch(handleError);
}