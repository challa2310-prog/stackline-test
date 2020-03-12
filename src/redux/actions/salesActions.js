import { getSalesData } from "../../api/salesData";

export const loadSalesSuccess = (payload)=>{
    return {
        type : "LOAD_SALES_SUCCESS",
        payload
    }
}

export function loadSalesData(){
    return function(dispatch){
        return getSalesData()
                .then(sales => dispatch(loadSalesSuccess(sales)))
                .catch(err => {
                    throw err
                });
    }
}