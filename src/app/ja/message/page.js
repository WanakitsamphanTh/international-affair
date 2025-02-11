import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
import BlogCard from "./BlogCard";

import { getPayload } from 'payload';
import config from '@payload-config';

const { siteTitle, siteUrl, siteIcon } = siteMeta;



function Hero() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">先輩からのメッセージ</h1>
            <p className="lead mb-4" style={{ textAlign: "justify" }}>
              海外研修をした先輩はそこで勉強したことや有意義な思い出などについて、是非お読みください
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

async function getBlogsFromDatabase() {
  const payload = await getPayload({ config });

  try {
    const { docs: blogs } = await payload.find({
      collection: 'posts',
      limit: 10,
      sort: '-createdAt', // Fetch the latest posts first
      where: {
        tag: { 
          equals: 'ja' 
        }
      }
    });

    return blogs || []; // Return the array of blog posts
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return []; // Return an empty array if there's an error
  }
}

async function Blogs() {
  const blogs = await getBlogsFromDatabase(); // Wait for the blogs

  // Ensure blogs is always an array
  if (!Array.isArray(blogs)) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className="container px-sm-4 py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((post) => {
          const formattedDate = new Intl.DateTimeFormat("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(post.createdAt));

          return (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={formattedDate}
              author={post.author}
              country={post.country}
              profile={post.profile.url}
              content={post.content}
            />
          );
        })}
      </div>
    </div>
  );
}


export default function Message() {
  return (
    <main>
      <Hero />
      <Blogs />
    </main>
  )
}

// metadata
const pageTitle = "Messages";
const pageDesc = "Messages from international students.";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/en/message", siteUrl).toString();


export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    url: ogpUrl,
    description: pageDesc,
  },

  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  }
}