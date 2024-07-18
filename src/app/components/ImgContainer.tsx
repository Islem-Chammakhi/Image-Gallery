import { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";
type Props={
    photo:Photo
}
export  default function ImgConatiner({photo}: Props){
    const widthHeightRatio=photo.height/photo.width
    const galleryHeight=Math.ceil(250*widthHeightRatio)
    const photoSpans=Math.ceil(galleryHeight/10)+1

    return(
        <div  className="width-[250px] justify-self-center "
          style={{gridRow:`span ${photoSpans}`}}
        >
          <Link  href={photo.url} target="_blank" className="grid place-content-center">
          <div className="rounded-xl overflow-hidden group ">
        <Image
         src={photo.src.large} 
         alt={photo.alt}
         width={250}
         height={photo.height}
         className="group-hover:opacity-75 group-hover:scale-105"
         priority={true}
         sizes="250px"
         blurDataURL={photo.blurredDataUrl}
         placeholder="blur"
          />

          </div>
          </Link>
      </div>
    )
}
//we will make images respnsive using some attributes like fill={true} and relative and overflow-hidden and size:to determine the size of next image and for that we will use lint image  to calculate size !