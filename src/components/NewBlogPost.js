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
      <div className="blog-container">
        <form onSubmit={() => this.props.post(newPost)}>
          <div className="newBlogPost-input">
            <label className="newBlogPost-label block">Title</label>
            <input type="text" name="title" onChange={this.handleChange} className="newBlogPost-input block"/>
          </div>
          <div className="newBlogPost-input">
            <label className="newBlogPost-label">Content</label>
            <input type="text" name="content" onChange={this.handleChange} className="newBlogPost-input block"/>
          </div>
          <button>Add Post</button>
        </form>
        <NewBlogPostView 
          title={this.state.title}
          content={this.state.content} />
      </div>
    );
  }
}