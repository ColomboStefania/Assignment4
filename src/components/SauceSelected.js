import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addPrice } from '../actions/addPrice';
import { sauce } from '../lib/DataBase';

 class SouceSelected extends PureComponent {

   state  = {
     PriceSauce : 0
   }


  addIt = ( event ) => {
    event.preventDefault()
    const price = parseFloat(this.state.price, 10)
    this.props.addPrice(this.state)
  }

  handleChange = ( event ) => {
    console.log(event.target.value)
    const priceUnit = parseFloat(event.target.value,10);
    this.setState(
     {PriceSauce : priceUnit}
    )
 }

  render() {

    return (
      <div>
      <h1> Pick your favorite Sauce </h1>
      <form onSubmit={ this.addIt } >
        <label>
          Choose only one sauce
          <br/>
          <br/>
          <select onChange = { this.handleChange }  >
          <option value="">-- pick your favorite --</option>
          { sauce.map(salsa =>
            <option value = { salsa.price } > { salsa.nameSauce } </option>)}
          </select>
          <input type="submit" value="ADD"  />
        </label>
      </form>
      <h3 className="Price" > + { this.props.PriceSauce } €</h3>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    PriceSauce: state.pizza.PriceSauce
  }
}

export default connect(mapStateToProps, { addPrice })(SouceSelected)
