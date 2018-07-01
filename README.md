

I took me white a lot of time to figure out how to keep the state unchanged when a change in a form occurs.Probably too much.
Therefore, I could not finish on time. The topping does not have a max of 3 items. 

First approach: create multiple action per form (add_base, add_sauce, add_topping) --> this would not work as the redux state would get modified at any actions accurings and refeshing the current state 
Second approach: define a key value for each item --> this resulted to be a bit longer to develop
Third approach: define local state to be called in the reducer. Each section has it own state. The payload is the same (price) but the object key changes and allows me to call it back on the reducer. In the reducer I can define the structure of the state definig an initialState. A new state gets generated if an action occurs otherwise it mantaines the structure of the initialState. 

