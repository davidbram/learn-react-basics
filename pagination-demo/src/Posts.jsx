import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [postNumber] = useState(5);

  const currentPageNumber = (pageNumber * postNumber) - postNumber;
  let paginatedPosts = posts.slice().splice(currentPageNumber, postNumber);
  

  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    const nextPaginatedPosts = posts.slice().splice(currentPageNumber + 1, postNumber);
    if(nextPaginatedPosts.length === 0) return;
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Paginations</h2>
      {paginatedPosts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <div>Page {pageNumber}</div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Posts;
