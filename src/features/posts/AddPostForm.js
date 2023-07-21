import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);

  const onSavePostClicked = e => {
    e.preventDefault(); // Prevent default form submission
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle('');
      setContent('');
    }
  };

  return (
    <section className="d-flex m-4 justify-content-start align-items-center">
      <div className="col-md-6">
        <h2>Add a New Post</h2>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Post Title:</label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postContent" className="form-label">Content:</label>
            <textarea
              className="form-control"
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            />
          </div>
          <button className="btn btn-primary" type="submit" onClick={onSavePostClicked}>Save Post</button>
        </form>
      </div>
    </section>
  );
};

export default AddPostForm;