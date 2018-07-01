import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addPrice } from '../actions/addPrice';
import {base} from '../lib/DataBase';

 class Drone extends PureComponent {

 state  = {
   PriceDrone : 0
 }

   addIt = ( event ) => {
     event.preventDefault()
     this.props.addPrice(this.state)
   }

   handleChange = ( event ) => {
     console.log(event.target.value)
     const priceUnit = parseFloat(event.target.value,10);
     this.setState(
      { PriceDrone : priceUnit}
     )
  }



  render() {
 const isEnabled = this.state.PriceBase < 1 ;
    return (
      <div>
      <h1> Do you need a drone delivery? </h1>
      <form onSubmit={ this.addIt } >
        <label>
        </label>
          <select onChange = { this.handleChange }>
          <option value="">choose</option>
          <option value="1">no</option>
          <option value="1.10">yes</option>
          </select>
          <button type="submit" ref={btn => { this.btn = btn; }}   >add</button>
            </form>
      <h1>Final Price {this.props.TotalpriceDrone.toFixed(2)  } €</h1>

      </div>

  )}
}

const mapStateToProps = (state) => {
  return {
    TotalpriceDrone: state.pizza.TotalpriceDrone
  }
}


export default connect(mapStateToProps, { addPrice })(Drone)
