import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, Postcard, Hero } from "../component/index";

function Home() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    databaseService.getPosts().then((post) => {
      if (post) {
        setPost(post.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      // <div className="w-full text-center h-screen">
      //   <Container>
      // <div className="flex flex-wrap">
      <div className="w-full">
        <Hero />
      </div>
      //   </div>
      // </Container>
      // </div>
    );
  }

  return (
    <div className="w-full py-8">
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

export default Home;
