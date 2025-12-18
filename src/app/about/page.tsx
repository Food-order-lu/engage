import Navbar from '@/components/Navbar/Navbar';
import PageHeader from '@/components/PageHeader/PageHeader';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'À propos | Engage',
    description: 'Découvrez Engage, la plus grande agence de marketing face-to-face au Luxembourg.',
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="À propos de nous"
                subtitle="Découvrez notre mission, nos valeurs et notre engagement envers un impact positif."
                breadcrumb="À propos"
            />
            <About />
            <Footer />
        </>
    );
}
