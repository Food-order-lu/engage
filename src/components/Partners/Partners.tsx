'use client';

import styles from './Partners.module.css';

const Partners = () => {
    // Placeholder partner names - can be replaced with actual logos later
    const partners = [
        { name: 'Entreprise A', color: '#00AEEF' },
        { name: 'Organisation B', color: '#ED1C24' },
        { name: 'Société C', color: '#000000' },
        { name: 'Client D', color: '#D92228' },
        { name: 'Partenaire E', color: '#00A651' },
        { name: 'Client F', color: '#FFFF00' },
        { name: 'Organisation G', color: '#E2001A' },
        { name: 'Entreprise H', color: '#E84E10' },
    ];

    const marqueeText = "AWESOME CLIENTS • AWESOME CLIENTS • AWESOME CLIENTS • AWESOME CLIENTS • AWESOME CLIENTS • AWESOME CLIENTS • ";

    return (
        <section id="partners" className={styles.partners}>
            {/* Marquee Header */}
            <div className={styles.marqueeHeader}>
                <div className={styles.marqueeTrack}>
                    <span>{marqueeText}</span>
                    <span>{marqueeText}</span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Nos Partenaires</span>
                    <h2 className={styles.title}>
                        Ils nous font <span className={styles.highlight}>confiance</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Nous collaborons avec diverses organisations pour créer un impact social réel.
                    </p>
                </div>

                {/* Partners Carousel */}
                <div className={styles.carouselContainer}>
                    <div className={styles.carousel}>
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className={styles.partnerCard}>
                                <div
                                    className={styles.partnerLogo}
                                    style={{ '--partner-color': partner.color } as React.CSSProperties}
                                >
                                    <span className={styles.partnerInitial}>
                                        {partner.name.charAt(0)}
                                    </span>
                                </div>
                                <span className={styles.partnerName}>{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>Collecte</span>
                        <span className={styles.statLabel}>Recrutement de donateurs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
