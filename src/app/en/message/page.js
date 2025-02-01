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
            <h1 className="display-4 fw-bold mb-3">Messages</h1>
            <p className="lead mb-4" style={{textAlign: "justify"}}>
            Our international students have shared articles with us, highlighting their meaningful experiences on campus. We hope these stories inspire you to consider visiting our campus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function getBlogsFromDatabase(){
  const blogs = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet",
      date: "10 JUN 2025",
      author: "Somchai Somying",
      country: "TH",
      profile: "https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/472763522_1151830559836857_2978635226419713572_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OLKqZOkj7v8Q7kNvgEwELfy&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=ARzVQWauZLiR_tqdmpCfBJE&oh=00_AYCeQY-i_xH8y1AmJkysHnnhdwNrntqvJkk1v09DXuRVzg&oe=67A3A260",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru[d]um facilis est e[r]t expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellend[a]us. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
      id: "2",
      title: "Lorem ipsum dolor ",
      date: "10 JUN 2025",
      author: "John Doe",
      country: "FR",
      profile: "https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/471165594_1141513270868586_6789261037022912516_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2ikSJY4j1_4Q7kNvgGAcZ4d&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AwZrkNSQmp68PNrDxL4c-t5&oh=00_AYD3WPEQRbcm5GKnnqfbbAv-XvKR7DCZHd7rMVL5gQ1m-A&oe=67A38157",
      content: "Hello world"
    },
    {
      id: "3",
      title: " dolor sit amet",
      date: "10 JUN 2025",
      author: "Jane Doe",
      country: "KZ",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/131411225_214085813611341_2157554727693074230_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b42mHKGlzBkQ7kNvgGyfFak&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AuvrOCSWF27HNquZRcavbE6&oh=00_AYAQNdGARnReX7EzmbFNy9BKI5Xp8Q5G_FnubOMOMU_5rA&oe=67BDD0D4",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru[d]um facilis est e[r]t expedita distinctio"
    },{
      id: "4",
      title: "Lorem ipsum dolor sit amet",
      date: "10 JUN 2025",
      author: "Somchai Somying",
      country: "TH",
      profile: "https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/472763522_1151830559836857_2978635226419713572_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OLKqZOkj7v8Q7kNvgEwELfy&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=ARzVQWauZLiR_tqdmpCfBJE&oh=00_AYCeQY-i_xH8y1AmJkysHnnhdwNrntqvJkk1v09DXuRVzg&oe=67A3A260",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru[d]um facilis est e[r]t expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellend[a]us. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
      id: "5",
      title: "Lorem ipsum dolor ",
      date: "10 JUN 2025",
      author: "John Doe",
      country: "FR",
      profile: "https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/471165594_1141513270868586_6789261037022912516_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2ikSJY4j1_4Q7kNvgGAcZ4d&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AwZrkNSQmp68PNrDxL4c-t5&oh=00_AYD3WPEQRbcm5GKnnqfbbAv-XvKR7DCZHd7rMVL5gQ1m-A&oe=67A38157",
      content: "Hello world"
    },
    {
      id: "6",
      title: " dolor sit amet",
      date: "10 JUN 2025",
      author: "Jane Doe",
      country: "KZ",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t1.6435-9/131411225_214085813611341_2157554727693074230_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b42mHKGlzBkQ7kNvgGyfFak&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AuvrOCSWF27HNquZRcavbE6&oh=00_AYAQNdGARnReX7EzmbFNy9BKI5Xp8Q5G_FnubOMOMU_5rA&oe=67BDD0D4",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru[d]um facilis est e[r]t expedita distinctio"
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
          <BlogCard id={blog.id} title={blog.title} date={blog.date} author={blog.author} country={blog.country} profile={blog.profile} content={blog.content}/>
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