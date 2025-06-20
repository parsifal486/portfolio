import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { Works } from './components/Works';
import { Posts } from './components/Posts';
import { About } from './components/about';

export default function Home() {
    return (
        <div className="w-full">
            <Navbar />
            <HomeSection />

            <Works />
            <Posts />
            <About />
        </div>
    );
}
