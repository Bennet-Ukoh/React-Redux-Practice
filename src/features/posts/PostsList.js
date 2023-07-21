import React from "react";
import { useSelector } from "react-redux";

export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <div className="card m-4" style={{maxWidth:600}}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-start">{post.title}</h5>
              <p className="card-text text-start">{post.content.substring(0, 100)}</p>
            </div>
          </div>
        </div>
      </div>
    ))

    return (
        <section>
            <h2 className="text-start m-4 fw-bold">Posts</h2>
            {renderedPosts}
        </section>
    )
}