import Footer from '@/components/Layout/Footer';
import NavBar from '@/components/Layout/NavBar';
import NavBarFooter from '@/components/Layout/NavBarFooter';
import PostSection from '@/components/Post/PostSection';

export default function Home() {
  return (
    <main>
      <NavBar />
      <PostSection />
      <Footer />
      <NavBarFooter />
    </main>
  );
}
