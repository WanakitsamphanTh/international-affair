import { Hero } from '@/components/Hero'
import { fetchAllPosts } from '@/lib/data';
import Link from 'next/link';

async function PostsList(){
  const pages = await fetchAllPosts("en");

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={`/en/message/${page.slug}`}>
              {page.title}
            </Link>
            <p>{page.publishedDate}</p>
            <p>{page.slug}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function MessagePage() {
  return (
    <main>
      <Hero
        title="Messages"
        description="Our international students have shared articles with us, highlighting their meaningful experiences on campus. We hope these stories inspire you to consider visiting our campus."
      />
      <PostsList />
    </main>
  )
}
