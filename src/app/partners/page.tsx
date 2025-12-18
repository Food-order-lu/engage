import Navbar from '@/components/Navbar/Navbar';
import PageHeader from '@/components/PageHeader/PageHeader';
import Partners from '@/components/Partners/Partners';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Nos Partenaires | Engage',
    description: 'Découvrez les associations et organisations avec lesquelles nous collaborons pour créer un impact positif.',
};

export default function PartnersPage() {
    return (
        <>
            <Navbar />
            <PageHeader
                title="Nos Partenaires"
                subtitle="Des collaborations durables avec des organisations qui partagent nos valeurs."
                breadcrumb="Partenaires"
            />
            <Partners />
            <Footer />
        </>
    );
}
