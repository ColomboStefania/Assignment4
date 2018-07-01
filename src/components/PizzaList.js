import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addPrice } from '../actions/addPrice';
import {base} from '../lib/DataBase';
import './PizzaListStyle.css';


 class PizzaList extends PureComponent {

//I need a local state to store the changes of the form
 state  = {
   PriceBase : 0
 }


   addIt = ( event ) => {
     event.preventDefault()
     this.props.addPrice(this.state)
   }

   handleChange = ( event ) => {
     console.log(event.target.value)
     const priceUnit = parseFloat(event.target.value,10);
     this.setState(
      { PriceBase : priceUnit}
     )
  }

  render() {
 const isEnabled = this.state.PriceBase < 1 ;
    return (
      <div>
      <h1> Pick your favorite Base </h1>
      <form onSubmit={ this.addIt } >
        <label>
        </label>
         <br/>
          <select onChange = { this.handleChange }>
          <option value="">-- pick your favorite --</option>
          { base.map(basina =>
          <option value = { basina.price } > {basina.nameBase} </option>)}
          </select>
          <button variant="contained" color="primary" type="submit" ref={btn => { this.btn = btn; }} >ADD</button>
      </form>
        <h3 className="Price" >Price  { this.props.PriceBase } €</h3>
      </div>

  )}
}

const mapStateToProps = (state) => {
  return {
    PriceBase : state.pizza.PriceBase
  }
}



export default connect(mapStateToProps, { addPrice })(PizzaList)
