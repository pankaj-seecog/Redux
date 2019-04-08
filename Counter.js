import React,{Component} from 'react';
import {connect} from 'react-redux';
class Counter extends Component{

constructor(){
  super();
}

render(){
  let style={
    width : '100%'
  }
  return (
    <div>
The count is {this.props.scount}
<hr/>
<button onClick={this.props.onIncr}>Increment</button> | 
<button onClick={this.props.onDecr}>Decrement</button> | 
<button onClick={this.props.onAdd}>Add 5 </button> | 
<button onClick={this.props.onSubtract}>Subtract 5</button> |
<button onClick={this.props.onAddResult}>Add Result</button> 
<hr/>
<table style={style}>
<th>Time</th><th>Count</th>
{
  this.props.sresults.map((result)=>{
return (
  <tr>
<td>{result.time}</td>
<td>{result.count}</td>
  </tr>
)
  })
}
</table>
    </div>
  )
}

}

let mapStateToProps = (state)=>{
return {
  scount : state.count,
  sresults : state.results
}
}

let mapDispatchToProps = (dispatch)=>{
  return {
    onIncr : ()=>dispatch({type : 'number_incr'}),
    onDecr : ()=>dispatch({type : 'number_decr'}),
    onAdd : ()=>dispatch({type : 'number_add',value : 5}),
    onSubtract : ()=>dispatch({type : 'number_subtract',value : 5}),
    onAddResult : ()=>dispatch({type : 'result_add'})
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Counter);