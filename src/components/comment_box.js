import React, { Component } from 'react';

// turn into a container use the connect helper
import { connect } from 'react-redux';
// shortcut for mapDispatchToProps
import * as actions from '../actions';

class CommentBox extends Component {

  constructor(props) {
      super(props);

      this.state = { comment: '' };
  }

  handleChange(event) {

    this.setState({ comment:event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.addComment(this.state.comment);
    this.setState({ comment: ''});
  }

  addComment(comment) {
    if (comment.trim().length != 0)
    this.props.saveComment(comment); 
  }

  render() {
    return (
            <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Comment</label>
                    <textarea 
                        className="form-control" 
                        value={this.state.comment}
                        onChange={this.handleChange.bind(this)} 
                        id="exampleFormControlTextarea1"  />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
    );
  }
}

// first arg mapStateToProps, second mapDispatchToProps but the shortCut is to use actions
export default connect(null, actions)(CommentBox)
