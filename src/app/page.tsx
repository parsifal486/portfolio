import { HomeSection } from '@/components/HomeSection';
import { Menu } from '@/components/Menu';
import { About } from '@/components/About';

export default function Home() {
    return (
        <div className="w-full">
            <HomeSection />
            <Menu />
            <About />
        </div>
    );
}
