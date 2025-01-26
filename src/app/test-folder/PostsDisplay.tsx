interface Post {
    id: string;
    title: string;
    author: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

interface PostsResponse {
    docs: Post[];
}

const PostsDisplay: React.FC<{ posts: PostsResponse }> = ({ posts }) => {
    if (!posts?.docs?.length) {
        return <div>No posts found</div>;
    }

    return (
        <div className="posts-container">
            {posts.docs.map((post) => (
                <div key={post.id} className="post-card">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-author">By {post.author}</p>
                <div className="post-content">{post.content}</div>
                <small className="post-date">
                    Created: {new Date(post.createdAt).toLocaleDateString()}
                </small>
                </div>
            ))}
        </div>
    );
};

export default PostsDisplay;