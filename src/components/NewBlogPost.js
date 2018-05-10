import React from "react";

export class NewBlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPost = this.handleAddPost.bind(this);
    this.state = {
      posts: []
    };
  }

  handleAddPost(post) {
    this.setState(prevState => {
      return {
        posts: [post].concat(prevState.posts)
      };
    });
  }

  render() {
    return (
      <div>
        <PostsList posts={this.state.posts} />
        <AddPost handleAddComment={this.handleAddComment} />
      </div>
    );
  }
}

class PostsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => <Post key={post} postText={post} />)}
      </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return <div className="post-value">{this.props.postText}</div>;
  }
}

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPost = this.handleAddPost.bind(this);
  }
  handleAddPost(e) {
    e.preventDefault();

    const post = e.target.elements.post.value.trim();

    if (post) {
      this.props.handleAddPost(post);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddPost}>
          <input type="text" name="post" />
          <button>Add Post</button>
        </form>
      </div>
    );
  }
}
