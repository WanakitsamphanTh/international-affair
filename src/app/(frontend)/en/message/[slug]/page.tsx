import { fetchOnePost } from "@/lib/data";
import { RichText } from "@/components/RichText/Richtext";
import { PostHero } from "@/components/Hero";
import { formatDateEn } from "@/lib/data";
import Image from "next/image";
import { ImageInfo } from "@/lib/dataType";

type SlugProps = {
  params: {
    slug: string;
  };
};

export default async function MessagePage({ params }: SlugProps) {
  const { slug } = await params;
  const post = await fetchOnePost(slug);
  const image = post.image as ImageInfo;

  return (
    <div>
      <PostHero
        title={post.title}
        author={post.author}
        publishedDate={formatDateEn(post.publishedDate)}
      />
      <div className="position-relative px-5 py-5">
        <div className="img-container mx-auto" style={{ maxWidth: '800px', maxHeight: '500px' }}>
          <div className="ratio ratio-16x9">
            <Image
              src={image?.url || '/placeholder-image.jpg'}
              alt={image?.alt || 'Default alt text'}
              fill
              className="img-fluid rounded shadow object-fit-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-5">
        <RichText data={post.content} />
      </div>
    </div>
  )
}