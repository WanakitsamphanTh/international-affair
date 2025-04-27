import Image from "next/image";
import { ImageInfo } from "@/lib/dataType";

export default function WorldwideNetwork({image}:{image:ImageInfo}){

  const src = image?.url ?? '';
  const alt = image?.alt ?? 'Worldwide Network';
  const width = image?.width ?? 1920;
  const height = image?.height ?? 1080;

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Global Network</h2>
        <div className="position-relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="img-fluid rounded shadow"
            />
        </div>
      </div>
    </section>
  )
}