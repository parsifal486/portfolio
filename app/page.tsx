import { Navbar } from '../componets/Navbar';
import { HomeSection } from '../componets/HomeSection';
import { Works } from '../componets/Works';
import { Posts } from '../componets/Posts';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HomeSection />
      <Works />
      <Posts />
    </div>
  );
}
