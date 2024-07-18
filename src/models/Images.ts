import {z} from 'zod'
 //this are the 2 main schema tha we need !
const BasicImageSchema =z.object({
    page: z.number(),
    per_page:z.number(),
    prev_page:z.string().optional(),
    next_page:z.string().optional(),
    total_results:z.number(),

});
const PhototsSchema=z.object({
    id:z.number(),
    width:z.number(),
    height:z.number(),
    url:z.string(),
    src:z.object({
        large:z.string(),
    }),
    alt:z.string(),
    blurredDataUrl:z.string().optional(),//nextjs value to catch errors during dev 
})
 //combine the two schemas!
export const  ImagesSchemaWithPhotos=BasicImageSchema.extend({
    photos:z.array(PhototsSchema)
})
//the types that we will need !
export type Photo=z.infer<typeof PhototsSchema>
export type ImagesResults=z.infer<typeof ImagesSchemaWithPhotos>
