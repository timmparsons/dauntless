import React from "react";
import { BlogPreview } from "./BlogPreview";
import axios from "axios";

export class ViewPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  handeNewPost() {
    alert("Add new post");
  }

  componentDidMount() {
    // let self = this;
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts: posts });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(posts => (
          <BlogPreview
            id={posts.id}
            key={posts.id}
            title={posts.title}
            body={posts.body}
          />
        ))}
      </div>
    );
  }
}
