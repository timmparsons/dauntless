import React from "react";
import { NewBlogPostView } from "./NewBlogPostView";

export class NewBlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      posts: []
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    const newPost = {
      title: this.state.title,
      content: this.state.content
    };
    return (
      <div>
        <form onSubmit={() => this.props.post(newPost)}>
          <label>Title</label>
          <input type="text" name="title" onChange={this.handleChange} />

          <label>Content</label>
          <input type="text" name="content" onChange={this.handleChange} />
          <button>Add Post</button>
        </form>
        <NewBlogPostView 
          title={this.state.title}
          content={this.state.content} />
      </div>
    );
  }
}