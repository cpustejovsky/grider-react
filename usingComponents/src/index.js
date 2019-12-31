import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          avatarImg={faker.image.avatar()}
          content={faker.hacker.phrase()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          avatarImg={faker.image.avatar()}
          content={faker.hacker.phrase()}
        />
      </ApprovalCard>      <ApprovalCard>
        <CommentDetail
          name={faker.name.firstName()}
          timeAgo={faker.date.weekday()}
          avatarImg={faker.image.avatar()}
          content={faker.hacker.phrase()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));