import { getPayload } from 'payload'
import config from '@payload-config'
import PostsDisplay from './PostsDisplay';

const payload = await getPayload({ config })

export default async function Page() {
	try {
    	const posts = await payload.find({
			collection: 'posts',
			limit: 10,
    });
    	return <PostsDisplay posts={posts} />;
	} catch (error) {
    	console.error('Payload Find Error:', error);
    	return <div>Error loading posts: {error.message}</div>;
	}
}