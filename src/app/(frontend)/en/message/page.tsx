import { Hero } from '@/components/Hero'
import MessageCard from '@/components/MessageCard';
import { fetchAllPosts } from '@/lib/data';

async function PostsList(){
  const pages = await fetchAllPosts("en");

  return (
    <div className="container py-4">
      <div className="row">
        {pages.map((page) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={page.id}>
            <MessageCard
              id={page.id}
              title={page.title}
              slug={page.slug}
              image={page.image}
              publishedDate={page.publishedDate}
            />
          </div>
        ))}
      </div>
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
