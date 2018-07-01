import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addPrice } from '../actions/addPrice';
import { topping } from '../lib/DataBase';

 class ToppingSelected extends PureComponent {

   state = {
     ArraytPriceTopping: []
   }

  One = ( event ) => {
    this.setState(
     { One: [...this.state.ArraytPriceTopping.push(1)] }
    )
  }
  Two= ( event ) => {
    this.setState(
      { Two: [...this.state.ArraytPriceTopping.push(2)] }
    )
  }
  Three= ( event ) => {
   this.setState(
     { Three: [...this.state.ArraytPriceTopping.push(3)] }
   )
  }

 addIt = ( event ) => {
   event.preventDefault()
   this.props.addPrice(this.state)}


  render() {


    return (
      <div>
      <h1> Pick your favorite Topping </h1>
      <form onSubmit={ this.addIt } >
        <label>
          You can select max 3 toppings
          <br/>
          <br/>
          <select onChange = { this.One }  >
          <option value="">-- pick your favorite --</option>
          { topping.map(top =>
            <option value = { top.price } > { top.nameTopping } </option>)}
          </select>
          <input type="submit" value="ADD" />
        </label>
      </form>
      <br/>
      <form onSubmit={ this.addIt } >
        <label>
          <select onChange = { this.Two }  >
          <option value="">-- pick your favorite --</option>
          { topping.map(top =>
            <option value = { top.price } > { top.nameTopping } </option>)}
          </select>
          <input type="submit" value="ADD" />
        </label>
      </form>
      <br/>
      <form onSubmit={ this.addIt } >
        <label>
          <select onChange = { this.Three }  >
          <option value="">-- pick your favorite --</option>
          { topping.map(top =>
            <option value = { top.price } > { top.nameTopping } </option>)}
          </select>
          <input type="submit" value="ADD" />
        </label>
      </form>
      <h3 className="Price" > +  { this.state.ArraytPriceTopping.length * 0.5  } €</h3>

      </div>

  )}
}

const mapStateToProps = (state) => {
  return {
    ArraytPriceTopping: state.pizza.ArraytPriceTopping
  }
}

export default connect(null, { addPrice })(ToppingSelected)
