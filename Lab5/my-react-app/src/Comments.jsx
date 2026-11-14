import { useState } from "react";
import CommentBubble from "./CommentBubble";
import CommentForm from "./CommentForm";
import "./Comments.css";

const initialComments = [
  { id: 1, author: "Sara", text: "Great explanation of components!",       likes: 5 },
  { id: 2, author: "Omar", text: "Props finally make sense to me.",        likes: 2 },
  { id: 3, author: "Ali",  text: "Can we do a lab on useState next week?", likes: 7 },
  { id: 4, author: "You",  text: "Thanks for the lab, this was fun!",      likes: 0 },
];

function Comments() {
  const [comments, setComments] = useState(initialComments);

  const addComment = (text) =>
    setComments([
      ...comments,
      { id: Date.now(), author: "You", text, likes: 0 },
    ]);
  const likeComment = (id) =>
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment,
      ),
    );

  return (
    <div className="commentsSection">
      <h2>Comments ({comments.length})</h2>
      <CommentForm onAdd={addComment} />
      {comments.map((comment) => (
        <CommentBubble
          key={comment.id}
          comment={comment}
          onLike={likeComment}
        />
      ))}
    </div>
  );
}

export default Comments;
