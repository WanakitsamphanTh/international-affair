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
      title: "Life and Study at Sendai NIT 🌏🎓",
      date: "November 21, 2024",
      author: "Rassul",
      country: "KZ",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/467746776_1193115982339793_6360582386677456174_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V1RW8yTW_rUQ7kNvgGCc7q9&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=Ao7wzfU3gWwpR1CCW4qepdL&oh=00_AYAZwhDDuWr2lnSq5zSqGJyrZsL3XmNun41yADClR0LCjg&oe=67A3A8DA",
      content: "Hello! My name is Rassul, and I’m a student from Kazakhstan. For the past three weeks, I’ve been living in Sendai and studying at the National Institute of Technology, Sendai College, in the Natori campus. I would like to share my first impressions of the university and life in Sendai,\nFrom the very first day, I was surprised  by how comfortable and inspiring the learning environment is. The university campus is a perfect modern style buildings : the buildings are surrounded by greenery, the laboratories are equipped with cutting-edge technology, and every detail seems designed to motivate students.\nThe professors here are incredibly attentive and supportive. Even when I encounter language challenges, they always find ways to explain everything clearly, often using visual materials. This encouragement inspires me to take on new challenges without fear!\nsNatori, where the campus is located, is a calm and welcoming student town, making it a great place to study and live. As for Sendai, the city where I reside, it’s often called the “City of Trees,” and it truly lives up to its name. The city is cozy, green, and has a unique peaceful atmosphere. specially in autumn time city and around areas become special colorful.\nCampus life is full of opportunities: hobby clubs, meeting fellow students, and always feeling like a real student life.\nFor me, this is not just studying abroad—it’s a unique chance to grow in an environment surrounded by inspiring people and advanced technology. I’m truly grateful to be part of Sendai College and for this incredible experience!\nThank you to everyone who makes this environment so welcoming and motivating!"
    },
    {
      id: "2",
      title: "Experiences in Sendai",
      date: "November 4, 2023",
      author: "Opp",
      country: "TH",
      profile: "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/375303087_889787206006007_1760875151249440765_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i4t-Mg9wh4MQ7kNvgHpj8Eu&_nc_zt=23&_nc_ht=scontent-nrt1-2.xx&_nc_gid=AlsxkF2w_zeGmARCJ12pdcw&oh=00_AYBgccIW-4as0TFTaptDjKCrOXB96bfMznVWFv3iA-b-Ag&oe=67A391A5",
      content: "In this college, I had the opportunity to study Japanese culture and the Japanese language with native speakers. It is easy to understand Japanese things about culture, activities, actions, folding paper (Origami), wrapping (Furoshiki), and conversation with Japanese people in daily life. Furthermore, this place has other activities that you can join. There are flower arrangements, an Imoni Party, a Tea Ceremony, etc. I had a chance to join an Imoni party. It is an activity suitable for relaxing, chilling, and camping in the forest with delicious foods. Another event I joined, this event you shouldn't miss it. It is the Tea Ceremony by the Tea Ceremony club. They will show you the history, culture, and tradition of Japanese Tea Ceremony. That is not ordinary tea ceremonies but hidden with the ideas and ingenuity of the Japanese people that have been passed down from generation to generation.\nIn project parts, They will allocate an advisor for everyone. It depends on the field and the type of work. I had the opportunity to work with Dr. Mio Sakuma. My project was developing a WebApp called JP Aphasia on the topic of Japanese Aphasia WebApp for Training and Treatment because the number of Aphasia patients is increasing in Japan. It is my new challenge for Web app development. I became a full-stack engineer in about two months. In relaxing time, I spent my free time chatting and playing volleyball with Japanese students. I am impressed and grateful for Shouta Harutou and others. I was able to overcome the obstacles and get the job done.\nFinally, I would like to send a message to all the international students who will study at this college. In the first week, it may be hard to understand Japanese people with different cultures and languages because they are shy about speaking with you. But if you can overcome the language barrier, have good manners, be polite, and be considerate. You will find experiences that will impress you. No matter where in the world you come from."
    },
    {
      id: "3",
      title: "Our trip from Sendai to Kagoshima",
      date: "10 JUN 2025",
      author: "Riku Partanen",
      country: "FI",
      profile: "https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/341777878_190678330437141_4598829032895317338_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uKJkrEjy1rwQ7kNvgGyciBz&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AA-WW7KYS3OEc3b1aYTQqYb&oh=00_AYAACID_Q55mTsub0ezS2exuSMB8cmk4wdfUFtTHYmalMQ&oe=67A38F15",
      content: "Our next destination after Hiroshima was the island of Kyushu. We started by heading to Kumamoto. Kumamoto has a famous mascot called Kumamon, who is a very cute black bear. He could be seen everywhere in the city, I lost count after 30 😀 The cherry blossom trees also started blooming and there were multiple festivals held, like a hanami-festival and a sake-festival, while we were there. We also took a day trip to a small city in the middle of Kyushu called Hita, where the mangaka of Shingeki no kyojin was born. The city had a museum and statues made from the series. From there we took one more bullet train to the south, our destination being Kagoshima. The city is located right next to an active volcano, which we hiked on our first day there. The following days were quite rainy so we mostly did indoor activities such as went to an aquarium and shopping.\nAfter reaching the southernmost tip of Japan we started our way back towards Tokyo, with our first stop being at Fukuoka. We went to see the Teamlabs light exhibition and walked around all of the parks filled with cherry blossom trees. I also rented a city bike and drove all around the city, it was a great way to see lesser known areas."
    }
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