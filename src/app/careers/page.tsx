import Navbar from '@/components/Navbar/Navbar';
import PageHeader from '@/components/PageHeader/PageHeader';
import WhyJoinUs from '@/components/WhyJoinUs/WhyJoinUs';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Carrières | Engage',
    description: 'Rejoignez notre équipe dynamique et faites partie d\'une entreprise qui fait la différence.',
};

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="Carrières"
                subtitle="Rejoignez une équipe passionnée et construisez une carrière qui a du sens."
                breadcrumb="Carrières"
            />
            <WhyJoinUs />
            <Footer />
        </>
    );
}
