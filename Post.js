import React,{Component} from 'react';
import axios from 'axios';

class Post extends Component{

constructor(){
  super();
  this.state = {
    post : {}
  }
}

componentWillMount(){
  console.log('The props is ',this.props.match.params.id)
   axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id).then((res)=>{
console.log('The post is ',res.data);
this.setState({
  post : res.data
})
    })
    .catch((err)=>{
console.log('The error is ',err)
    })
}

render(){
  return (
    <div>
<h2>{this.state.post.title}</h2>
<p>
{this.state.post.body}
</p>
    </div>
  )
}

}

export default Post;