import React from "react";

export class NewBlogPostView extends React.Component {
  render() {
    return (
      <div className="blog-preview">
      <img src="https://picsum.photos/50/50" alt="#" />
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
