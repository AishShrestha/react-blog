import { Client, ID, Databases, Query } from "appwrite";
import config from '../config/config';

class FileService {
    client = new Client();
    storage;

    constructor(){
        this.client.setEndpoint(config.appwrite.appWriteUrl)
                    .setProject(config.appwrite.appWriteProjecId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file){
        try{
            return await this.storage.createFile(config.appwrite.appWriteBucketId,ID.unique(),file)
        }catch(err){
            console.log("Error in uploading file :: ",err);
            return false;

        }

    }

    async deleteFile(fileId){
        try{
            await this.storage.deleteFile(config.appwrite.appWriteBucketId,fileId);
            return true;

        }catch(err){
            console.log("Error in deleting file :: ",err);
            return false;   

        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwrite.appwriteBucketId,
            fileId
        )
    }
}

const fileService = new FileService();
export default fileService;