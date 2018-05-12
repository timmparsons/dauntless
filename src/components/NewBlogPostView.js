import React from "react";

export class NewBlogPostView extends React.Component {
  render() {
    return (
      <div className="blog-preview">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
