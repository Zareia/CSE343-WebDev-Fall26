function CommentBubble({ comment, onLike }) {
  return (
    <div className="comment">
      <div className="profileIMG">{comment.author[0]}</div>
      <div className="bubble">
        <strong>{comment.author}</strong>
        <p>{comment.text}</p>
        <button className="like" onClick={() => onLike(comment.id)}>
          ❤️{comment.likes}
        </button>
      </div>
    </div>
  );
}

export default CommentBubble;
