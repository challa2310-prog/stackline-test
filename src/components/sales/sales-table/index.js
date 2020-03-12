import React from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
const SalesTable = ({ sales }) => {
    console.log(typeof sales);
    const columns = [{Header: "WEEK ENDING",accessor: "weekEnding"},{Header: "RETAIL SALES",accessor: "retailSales"},{Header: "WHOLESALE SALES",accessor: "wholesaleSales"},{Header: "UNITS SOLD",accessor: "unitsSold"}]
    return (
            <ReactTable
                data={sales}
                minRows={0}
                columns={columns}
                defaultPageSize={10}
            />
    )
}

export default SalesTable;
