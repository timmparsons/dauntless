import React from 'react';
import {ViewPreview} from './ViewPreview';

export class NewBlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewPost (e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleNewPost}>
          <input type="text" name="header"/>
          <input type="content" name="body"/>
          <button>Add New Post</button>
        </form>
      </div>
    )
  }
}