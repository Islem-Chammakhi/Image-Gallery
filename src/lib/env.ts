//well in fetchImages.ts file in header attribute use use the Pexel API key that he should be secure that's why we added envalid package !
import { cleanEnv,str } from "envalid";
const env=cleanEnv(process.env,{PEXELS_API_KEY:str(),

})
export default env