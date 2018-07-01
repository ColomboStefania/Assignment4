import { ADD_INGREDIENT } from '../actions/addPrice'

const oldPizza = {
  PriceBase: 0,
  PriceSauce: 0,
  ArraytPriceTopping: 0,
  Totalprice: 0,
  PriceDrone : 0,
  TotalpriceDrone: 0,
}

export default function(state = oldPizza, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
    const pizza = {...state}
    if(action.payload.PriceBase) {
      pizza.PriceBase = action.payload.PriceBase
    }
    if(action.payload.PriceSauce) {
      pizza.PriceSauce = action.payload.PriceSauce
    }
    if(action.payload.ArraytPriceTopping ) {
      pizza.ArraytPriceTopping = action.payload.ArraytPriceTopping.length * 0.5
    }
    if(action.payload.PriceDrone) {
      pizza.PriceDrone = action.payload.PriceDrone
    }
    pizza.Totalprice = [pizza.PriceBase, pizza.PriceSauce, pizza.ArraytPriceTopping].reduce((accumulator, currentValue) => accumulator + currentValue)
    pizza.TotalpriceDrone = [pizza.PriceBase, pizza.PriceSauce, pizza.ArraytPriceTopping].reduce((accumulator, currentValue) => accumulator + currentValue)*pizza.PriceDrone
    return pizza
    default:
      return state
  }
}



// const pizza = {
//   PriceBase: 0,
//   PriceSauce: 0,
//   FirstPriceTopping: 0,
//   SecondPriceTopping: 0,
//   ThirdPriceTopping: 0,
//   Totalprice: 0,
//   PriceDrone : 0,
//   TotalpriceDrone: 0,
// }
// if(action.payload.PriceBase && action.payload.PriceSauce && action.payload.FirstPriceTopping && action.payload.ThirdPriceTopping && action.payload.SecondPriceTopping && action.payload.PriceDrone)
// {
// this.pizza.PriceBase = action.payload.PriceBase,
// this.PriceSauce = action.payload.PriceSauce,
// this.FirstPriceTopping = action.payload.FirstPriceTopping,
// this.SecondPriceTopping = action.payload.SecondPriceTopping,
// this.ThirdPriceTopping = action.payload.ThirdPriceTopping,
// this.PriceDrone = action.payload.PriceDrone,
// this.Totalprice = [pizza.PriceBase, pizza.PriceSauce, pizza.FirstPriceTopping, pizza.SecondPriceTopping, pizza.ThirdPriceTopping].reduce((accumulator, currentValue) => accumulator + currentValue),
// this.TotalpriceDrone = [pizza.PriceBase, pizza.PriceSauce, pizza.FirstPriceTopping, pizza.SecondPriceTopping, pizza.ThirdPriceTopping].reduce((accumulator, currentValue) => accumulator + currentValue)*pizza.PriceDrone
