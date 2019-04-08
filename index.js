import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import MyRoute from './MyRoute'
import Counter from './Counter';
//import redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
let initialState = {
  count : 0,
  results : []
}
let rootReducer = (state=initialState , action)=>{
  if(action.type=="number_incr"){
    return {
      ...state,
      count : state.count+1
    }
  }
  if(action.type=='number_decr'){
return {
  ...state,
  count : state.count-1
}
  }
  if(action.type=='number_add'){
    return {
      ...state,
      count : state.count+action.value
    }
  }
  if(action.type=='number_subtract'){
    return {
      ...state,
      count : state.count-action.value
    }
  }
//   if(action.type=='result_add'){
//     return  {
// ...state,
// results : state.results.push({time : 11, count : state.count})
//     }
//     console.log('The state is ',{
// ...state,
// results : state.results.push({time : 11, count : state.count})
//     })
    
//   }
return state;
}
let store = createStore(rootReducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'));
