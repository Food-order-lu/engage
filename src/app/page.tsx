import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Partners from '@/components/Partners/Partners';
import WhyJoinUs from '@/components/WhyJoinUs/WhyJoinUs';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <WhyJoinUs />
      <Contact />
      <Footer />
    </main>
  );
}
