import React, { Component } from "react";
// function Comment(props) {
//   console.log("render");
//   return <li>{props.comment.body}</li>;
// }

class Comment extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.comment.body === this.props.comment.body &&
      nextProps.comment.author === this.props.comment.author
    ) {
      return false;
    }
    return true;
  }
  render() {
    return <li>{this.props.comment.body}</li>;
  }
}

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        comments: [
          { body: "vue is good", author: "wu" },
          { body: "react is good", author: "xiao" }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map((v, i) => (
            <Comment key={i} comment={v} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;
