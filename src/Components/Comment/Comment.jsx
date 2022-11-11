import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { productContext } from "../../context/ProductContextProvider";
import "./Comment.css";
const Comment = () => {
  const { readComments, comments, deleteProduct, addComments } =
    useContext(productContext);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      alert("Заполните все поля!");
      return;
    }
    let obj = {
      name,
      comment,
    };
    addComments(obj);
    setName("");
    setComment("");
  }
  useEffect(() => {
    readComments();
  }, []);
  return (
    <div className="container">
      <div>
        {comments
          ? comments.map(item => (
              <>
                <div className="block">
                  <h3 id="h3-standart">{item.name}</h3>
                  <p id="p-standart">{item.comment}</p>
                </div>
              </>
            ))
          : null}
      </div>
      <div id="otziv">
        <h2>Оставить отзыв</h2>
        <form onSubmit={e => handleAdd(e)}>
          <TextField
            className="outlined-basic"
            label="Имя"
            variant="outlined"
            value={name}
            onChange={e => setName(e.target.value)}
            id="input1"
          />
          <br />
          <TextField
            className="outlined-basic"
            label="Коментарий"
            variant="outlined"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />

          <button></button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
