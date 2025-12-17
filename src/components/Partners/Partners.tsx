'use client';

import styles from './Partners.module.css';

const Partners = () => {
    // Placeholder partner names - can be replaced with actual logos later
    const partners = [
        { name: 'UNICEF', color: '#00AEEF' },
        { name: 'Croix-Rouge', color: '#ED1C24' },
        { name: 'WWF', color: '#000000' },
        { name: 'Médecins Sans Frontières', color: '#D92228' },
        { name: 'Greenpeace', color: '#00A651' },
        { name: 'Amnesty', color: '#FFFF00' },
        { name: 'SOS Villages', color: '#E2001A' },
        { name: 'Action Contre la Faim', color: '#E84E10' },
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
                        Nous travaillons avec les plus grandes associations pour créer un impact social réel.
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
                        <span className={styles.statValue}>50+</span>
                        <span className={styles.statLabel}>Associations partenaires</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>1M+</span>
                        <span className={styles.statLabel}>Personnes contactées</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>€5M+</span>
                        <span className={styles.statLabel}>Levés pour les associations</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
