import React from "react";

export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.state = {
      comments: [
        "Great Post",
        "Love the topic",
        "We need more",
        "I like the pictures",
        "When's the next post"
      ]
    };
  }

  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: [comment].concat(prevState.comments)
      };
    });
  }

  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
        <AddComment handleAddComment={this.handleAddComment} />
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    return (
      <div>
        <h3>Comments:</h3>
        {this.props.comments.map(comment => (
          <Comment key={comment} commentText={comment} />
        ))}
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return <div className="comment-value">{this.props.commentText}</div>;
  }
}

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddComment = this.handleAddComment.bind(this);
  }
  handleAddComment(e) {
    e.preventDefault();

    const comment = e.target.elements.comment.value.trim();

    if (comment) {
      this.props.handleAddComment(comment);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddComment}>
          <input type="text" name="comment" />
          <button>Add Comment</button>
        </form>
      </div>
    );
  }
}
