import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home'
import Navigation from './Navigation';
import Posts from './Posts';
import Post from './Post';
class MyRoute extends Component{

constructor(){
  super();
this.state = {
  isLogin : false
}
}

render(){
  return (
    <BrowserRouter>
    <div>
    <Navigation/>
<Route path="/" exact   component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>

{
  (this.state.isLogin==true)?
   <Route path="/posts" exact component={Posts}/>: null

}
<Route path="/posts/:id" component={Post}/>
<Route  render={()=><h2>Not Found</h2>} />
</div>
    </BrowserRouter>
  )
}


}

export default MyRoute;