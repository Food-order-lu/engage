import Navbar from '@/components/Navbar/Navbar';
import PageHeader from '@/components/PageHeader/PageHeader';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Contact | Engage',
    description: 'Contactez-nous pour discuter de vos projets de marketing face-to-face.',
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="Contactez-nous"
                subtitle="Nous sommes là pour répondre à vos questions et discuter de vos projets."
                breadcrumb="Contact"
            />
            <Contact />
            <Footer />
        </>
    );
}
