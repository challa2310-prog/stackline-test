import React,{ Component } from 'react';
import { connect } from 'react-redux';
// import data from '../../api/salesData';
import SalesGraph from './sales-graph';
import SalesTable from './sales-table';
import { loadSalesData } from '../../redux/actions/salesActions';
import { getMonthData } from '../../common/utils';
import "./sales.css";

class Sales extends Component{
  componentDidMount(){
    this.props.loadSales();
  }
    render(){
       return (
         <div className="sales-details">
          <SalesGraph sales={this.props.sales}/>
          <SalesTable sales={this.props.sales}/>
         </div>
       )
}
}

const mapStateToProps = (state)=>{
  return {
    sales : state.salesData.body && state.salesData.body.map((saleDetails)=>getMonthData(saleDetails.sales) )[0]
  }
}

const mapDispatchToProps = {
  loadSales : loadSalesData
}

export default connect(mapStateToProps,mapDispatchToProps)(Sales);