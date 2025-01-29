import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, Postcard } from "../component/index";

function AllPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    databaseService.getPosts().then((post) => {
      if (post) {
        setPost(post.documents);
      }
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
