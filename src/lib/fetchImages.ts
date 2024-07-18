//--create fetch image funtion !--
//importing types and schemas that we will need from Images.ts !
import type { ImagesResults } from "@/models/Images";
import {ImagesSchemaWithPhotos} from "@/models/Images";
import env from "./env";
export default async function fetchImages(url:string):Promise <ImagesResults | undefined> {
    try{
        //fetch function
        const res=await fetch(url,{
            headers:{
                Authorization:env.PEXELS_API_KEY//use the api key from env.local to fetch images
            }   
        })
        if(!res.ok) throw new Error("fetch images errors!\n");
        const imagesResults:ImagesResults=await res.json()
        console.log(imagesResults)
        //parse data with zod schema
        const parsedData=ImagesSchemaWithPhotos.parse(imagesResults);
        if(parsedData.total_results===0)return undefined
        return parsedData
    }
    catch(e){
        //will show in terminal console
        if(e instanceof Error)console.log(e.stack);
    }
}
