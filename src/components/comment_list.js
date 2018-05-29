import React from 'react';

// turn into a container use the connect helper
import { connect } from 'react-redux';

const CommentList = (props) => {
    const list = props.comments.map(comment => <li className="list-group-item" key={comment}>{comment}</li>);

    return (           
            <ul className="comment-list list-group">
                {list}               
            </ul>
    );
}

function mapStateToProps(state) {
    console.log(state);
    return { 
        comments : state.comments 
    };
}

export default connect(mapStateToProps)(CommentList);
