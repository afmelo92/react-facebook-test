/**
 * MEU CÓDIGO USANDO FUNCTION
 */
import React from 'react';

function Comment({ data }) {
  return (
    <div>
      <img id="comment-avatar" src={userImg} />
      <div id="comment-text-container">
        <strong>{data.author.name}</strong>
        {data.content}
      </div>
    </div>
  );
}

export default Comment;
