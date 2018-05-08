import React from 'react';
import {ViewPreview} from './ViewPreview';

export class NewBlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleNewPost}>
          <input />
          <input />
          <button>Add New Post</button>
        </form>
      </div>
    )
  }
}