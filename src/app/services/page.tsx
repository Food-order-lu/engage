import Navbar from '@/components/Navbar/Navbar';
import PageHeader from '@/components/PageHeader/PageHeader';
import Services from '@/components/Services/Services';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Nos Services | Engage',
    description: 'Découvrez nos services de marketing face-to-face: collecte de fonds, recrutement de donateurs, sensibilisation et plus.',
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="Nos Services"
                subtitle="Des solutions de marketing terrain personnalisées pour atteindre vos objectifs."
                breadcrumb="Services"
            />
            <Services />
            <Footer />
        </>
    );
}
