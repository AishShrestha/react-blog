import { Client, ID, Databases, Query } from "appwrite";
import config from '../config/config'



class DatabaseService{

  client = new Client();
  databases;

  constructor(){
    this.client.setEndpoint(config.appwrite.appWriteUrl)
                .setProject(config.appwrite.appWriteProjecId);
    this.databases = new Databases(this.client);
  }

  async createPost({title,content,featuredImage,status,slug,userId}){
    try{

        return await this.databases.createDocument(config.appwrite.appWriteDatabaseeId,config.appwrite.appWriteCollectionId,slug,{
            title,
            content,
            featuredImage,
            status,
            userId
        });
       

    }catch(err){
        console.log("Error in creating post :: ",err);

    }

  }

  async updatePost(slug,{title,content,featuredImage,status}){
    try{
        return this.databases.updateDocument(config.appwrite.appWriteDatabaseeId,config.appwrite.appWriteCollectionId,slug,{
            title,
            content,
            featuredImage,
            status
        });
    }catch(err){
        console.log("Error in updating post :: ",err);
        return false;
    }
  }

  async getPost(slug){
    try{
        return this.databases.getDocument(config.appwrite.appWriteDatabaseeId,config.appwrite.appWriteCollectionId,slug);

    }catch(err){
        console.log('Error in getting post :: ',err);
        return false;

    }
  }

  async getPosts(queries = [Query.equal('status','active')]){
    try{
        return this.databases.listDocuments(config.appwrite.appWriteDatabaseeId,config.appwrite.appWriteCollectionId,queries);

    }catch(err){
        console.log('Error in getting posts :: ',err);
        return false;

    }
  }

  async deletePost(slug){
    try{
        return this.databases.deleteDocument(config.appwrite.appWriteDatabaseeId,config.appwrite.appWriteCollectionId,slug);

    }catch(err){
        console.log('Error in deleting post :: ',err);

    }

  }


}

const databaseService= new DatabaseService();
export default databaseService;
