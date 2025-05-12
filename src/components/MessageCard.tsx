import Link from "next/link";
import Image from "next/image";

type MessageCardProps = {
  id: string;
  title: string;
  slug: string;
  image?: any;
  publishedDate: string;
}

export default function MessageCard({
  title,
  slug,
  image,
  publishedDate,
}: MessageCardProps) {
  return (
    <Link href={`/en/message/${slug}`} className="text-decoration-none text-dark">
      <div className="card h-100 message-card">
        {image?.url && (
          <Image
            src={image.url}
            alt={title}
            className="card-img-top"
            width={400}
            height={250}
            style={{ objectFit: 'cover', height: '250px' }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{new Date(publishedDate).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  )
}