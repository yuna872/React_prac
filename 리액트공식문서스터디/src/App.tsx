import React, { useState } from "react";
import "./App.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  if (liked) return "you liked this";
  return React.createElement(
    "button",
    { onClick: () => setLiked(true) },
    "Like"
  );
}

export default LikeButton;
