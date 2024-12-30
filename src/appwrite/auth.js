import { Client, Account, ID } from "appwrite";
import config from '../config/config'

class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwrite.appWriteUrl)
        .setProject(config.appwrite.appWriteProjecId);
        console.log(config.appwrite.appWriteUrl);

        this.account = new Account(this.client);    
    }

    async createAccount({email,password,user}){
        try{  

         const userAccount = await this.account.create(ID.unique(),email,password,user);

         if(userAccount){
            return this.login({email,password});
         }else{
            return userAccount;
         }

        }catch(err){
            console.log("Error in creating account :: ",err);
        }
    }
    
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }catch(err){
            console.log("Error in login :: ",err);

        }
    }



    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }


    async logout(){
        try{
            return await this.account.deleteSession();
        }catch(err){
            console.log("Error in logout :: ",err);
        }
    }



}

const authService = new AuthService();
 export default authService;



