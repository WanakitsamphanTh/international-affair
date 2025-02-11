import { siteMeta } from "@/lib/en/constants";
import { openGraphMetadata, twitterMetadata } from "@/lib/en/baseMetadata";
import BlogCard from "./BlogCard";

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

function getBlogsFromDatabase() {
  const blogs = [
    {
      id: "1",
      title: "タイ研修",
      date: "10 JUN 2025",
      author: "しずか",
      country: "TH",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/470084677_1135303498156230_6952299683536544087_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tZNn1UCi_5kQ7kNvgGSstRz&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=A9m9l8-GhoJaQJWTkMw8Qt6&oh=00_AYCI7uVvnyAdluWzV1pcK9qcC1YaXrLautU19PgCf2kJww&oe=679C44B0",
      content: "こちらは今ついにこの失敗方というのの以上に来ないで。そのうち多数が評人はとにかくその比較うだくらいに持っが込まないをは始末よしますありて、実際にはなっですずですた。天下をいるでしのはどうしても今日をもしでですだ。そのうち大森さんが落第腹の中そう攻撃にありないずるずるべったりこの道私か切"
    },
    {
      id: "2",
      title: "フランスの思い出について",
      date: "10 JUN 2025",
      author: "ドラえもん",
      country: "FR",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/473187995_1156985959321317_3748582251682693598_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tBLDNMTcHZEQ7kNvgEXbBUk&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AO4ENaihLK1Ykb5VSw573s-&oh=00_AYBrXSouDdSzzLZvcQtURQr2Yibr8t1SKwkkQIY32KN-gA&oe=679CA31A",
      content: "Hello world"
    }
    ,
    {
      id: "3",
      title: "フィンランド研修で学んだこと",
      date: "10 JUN 2025",
      author: "のび太",
      country: "FI",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/470213866_1138079624545284_3092975028386220325_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Jo08wZlKAUkQ7kNvgFWtP0S&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=A0GdxJMZrB7kLRP7vXoL0AZ&oh=00_AYDmD298Q0PsTnhzSh9DZfoGVF5mDhakvY1fBlgFx5fIlQ&oe=679C164D",
      content: "Hello world"
    },
  ];
  
  return blogs;
}

function Blogs() {
  const blogs = getBlogsFromDatabase();

  return (
    <div className="container px-sm-4 py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((blog) => (
          <BlogCard id={blog.id} title={blog.title} date={blog.date} author={blog.author} country={blog.country} profile={blog.profile} content={blog.content} />
        ))}
      </div>
    </div>
  )
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