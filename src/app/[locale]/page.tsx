import { Navbar } from '@/components/Navbar';
import { HomeSection } from '@/components/HomeSection';
import { Works } from '@/components/Works';
import { Posts } from './components/Posts';
import { About } from '@/components/About';
import { getAllPosts } from '@/lib/posts';

export default async function Home() {
    const posts = await getAllPosts();

    return (
        <div className="w-full">
            <Navbar />
            <HomeSection />

            <Works />
            <Posts posts={posts} />
            <About />
        </div>
    );
}
