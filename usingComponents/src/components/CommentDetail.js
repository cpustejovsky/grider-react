import React, { Component } from 'react';
// import faker from 'faker';

const CommentDetail = (props) => {
  return (

    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatarImg} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="data">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;