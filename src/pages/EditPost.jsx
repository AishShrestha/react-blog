import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import databaseService from "../appwrite/database";
import Postform from "../component/Postform/PostForm";

function EditPost() {
  const { slug } = useParams();
  const [post, setPost] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Postform post={post} />
    </div>
  ) : null;
}

export default EditPost;
