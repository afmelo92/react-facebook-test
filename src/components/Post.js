import React from 'react';

function PostHeader({ author, date }) {
  console.log(author);
  console.log(date);
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default Post;

/**
 * MEU CÓDIGO
function Post({ data }) {
  return (
    <div id="post-container">
      <div id="post-info-container">
        <img id="post-avatar" src="" alt="" />
        <div id="post-info">
          <strong>{data.author.name}</strong>
          <div>
            <small>{data.date}</small>
          </div>
        </div>
      </div>
      <div id="post-content">{data.content}</div>
      <hr></hr>
      <div id="comment-container">
        {[...data.comments].map(comment => (
          <div id="comment-info-container" key={comment.id}>
            <Comment key={comment.id} data={comment} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;

 */
