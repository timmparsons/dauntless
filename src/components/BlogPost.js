import React from "react";
import { Comments } from "./Comments";
import { Link } from "react-router-dom";
import axios from "axios";

export class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userId: null
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.postId
        }`
      )
      .then(res => this.setState({ posts: res.data, userId: res.data.userId }));
  }
  render() {
    const { userId } = this.state;
    console.log(userId);

    return (
      <div>
        <div className="blog-post">
          <img src="https://picsum.photos/300/300" alt="#" />
          <h1 className="blog-post-h1">{this.state.posts.title}</h1>
          <p className="blog-post-p">{this.state.posts.body}</p>
          {userId && (
            <Link to={`/authors/${userId}`} className="button">
              Authors Profile
            </Link>
          )}
          </div>
          <div className="comments-section">
            <Comments />
          </div>        
      </div>
    );
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
