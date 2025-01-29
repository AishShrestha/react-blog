import { Client, ID, Databases, Query } from "appwrite";
import config from "../config/config";

class DatabaseService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwrite.appwriteUrl)
      .setProject(config.appwrite.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, content, featuredImage, status, slug, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwrite.appwriteDatabaseId, 
        config.appwrite.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log("Error in creating post :: ", err);
      return false; // Added return false for consistency with other methods
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        // Added missing await
        config.appwrite.appwriteDatabaseId, // Fixed typo
        config.appwrite.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (err) {
      console.log("Error in updating post :: ", err);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        // Added missing await
        config.appwrite.appwriteDatabaseId, // Fixed typo
        config.appwrite.appwriteCollectionId,
        slug
      );
    } catch (err) {
      console.log("Error in getting post :: ", err);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        // Added missing await
        config.appwrite.appwriteDatabaseId, // Fixed typo
        config.appwrite.appwriteCollectionId,
        queries
      );
    } catch (err) {
      console.log("Error in getting posts :: ", err);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwrite.appwriteDatabaseId, // Fixed typo
        config.appwrite.appwriteCollectionId,
        slug
      );
      return true; // Added return true for consistency
    } catch (err) {
      console.log("Error in deleting post :: ", err);
      return false; // Added return false for consistency
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
