import React,{Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
class Posts extends Component{

constructor(){
  super();
  this.state = {
    posts : []
  }
}

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
console.log('The posts is ',res.data);
this.setState({
  posts : res.data
})
    })
    .catch((err)=>{
console.log('The error is ',err)
    })
  }



render(){
  return (
    <div>
<h2>List of posts</h2>
<ul>
{
  this.state.posts.map((post)=>{
return (<li>
<NavLink to={"/posts/"+post.id}>
{post.title}
</NavLink>
</li>)
  })
}
</ul>
    </div>
  )
}

}

export default Posts;