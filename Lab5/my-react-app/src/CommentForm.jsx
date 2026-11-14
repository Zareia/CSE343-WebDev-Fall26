import { useState } from "react";

function CommentForm({ onAdd }) {
  const [text, setText] = useState("");

  const submitComment = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
      />
      <button className="submit" onClick={submitComment}>
        Submit
      </button>
    </div>
  );
}

export default CommentForm;
