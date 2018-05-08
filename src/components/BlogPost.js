import React from 'react';
import {Comments} from './Comments';
import {Link} from 'react-router-dom';
import axios from 'axios';
//Pass down user data to Author to get latitude and longitude

export class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: []
    }
  }
 componentDidMount() { 
  axios.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`),
      axios.get(`https://jsonplaceholder.typicode.com/users`)])
      .then(axios.spread((posts, users) => {
        this.setState({ posts: posts.data, users: users.data})
        console.log(posts.data.title)
        console.log(users.data[0].id)
      }))
    }
  
  render() {
    return (
      <div className="blog-post">
      <img src="https://picsum.photos/300/300" alt="#"/>        
        <h1 className="blog-post-h1">{this.state.posts.title}</h1>
        <p className="blog-post-p">{this.state.posts.body}</p>
        <Link to={`/authors/${this.state.users.id}`} params={ this.state.users } className="button">
        Author's Profile
        </Link> 
        <Comments />              
    </div>
    )
  }
}


// /${users.data[i].id}

  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
  //     .then(res => {
  //       const posts = res.data;
  //       this.setState({ posts: posts });
  //     })
  // } 

  //   axios.all([
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`),
  //   axios.get(`https://jsonplaceholder.typicode.com/users/`)])
  //   .then(axios.spread((posts, users) => {
  //     this.setState({ posts: posts.data, users: users.data})
  //     console.log(posts.data.title)
  //     console.log(users.data[0].id)
  //   }))
  // }

//   componentDidMount() {
//     axios.all([
//       axios.get('https://jsonplaceholder.typicode.com/posts'),
//       axios.get('https://jsonplaceholder.typicode.com/users')])
//       .then(axios.spread((posts, users) => {
//         const users = users.data;
//         this.setState({posts: posts.data, users: users.data});
//       }))
// }
