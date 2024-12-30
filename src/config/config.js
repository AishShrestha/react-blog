const config ={
    appwrite:{
        appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
        appWriteProjecId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
        appWriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
        appWriteDatabaseeId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
        appWriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

    }
}
export default config;