import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './components/CommentDetail';

const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetails
        name={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        avatarImg={faker.image.avatar()}
        content={faker.hacker.phrase()}
      />
      <CommentDetails
        name={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        avatarImg={faker.image.avatar()}
        content={faker.hacker.phrase()}
      />
      <CommentDetails
        name={faker.name.firstName()}
        timeAgo={faker.date.weekday()}
        avatarImg={faker.image.avatar()}
        content={faker.hacker.phrase()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));