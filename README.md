### Redux is a predicatable state container for javascript 

redux is a pattern and a library for organising global states in your application outside the react component tree.

### it provides a layer of seperation between the component where action has happened and the component where states updates

 ```npm i @reduxjs/toolkit react-redux axios```


### ui will trigger the events called actions

### reducers will have logics to update the state

### actions tell what happened and reducers updates state in response of that action

### React context only provides a wa y to pass data through the component tree without having to pass down manually at every level

### React context does not manage values - it only refers to passing and sharing values

### problems with context
- helps in props drilling
- does manage the state like redux
- does not maintain history of state updates like redux
- purposly built fpr avoiding props drilling problem


