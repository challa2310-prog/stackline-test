const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

export const getMonthData = (sales) => {
    console.log(sales);
    if (sales) {
        let i = 3;
        while (i < sales.length) {
            let monthIndex1 = new Date(sales[i].weekEnding).getMonth();
            let monthIndex2 = sales[i + 1] && new Date(sales[i + 1].weekEnding).getMonth(); 
            if (monthIndex1 !== monthIndex2) {
                sales[i].month = months[monthIndex1];
                i += 4;
            } else {
                i++;
            }
        }
    }
    console.log("sales",sales);
    return sales;
}