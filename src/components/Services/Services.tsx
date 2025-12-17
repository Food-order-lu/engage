'use client';

import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            icon: '🚪',
            title: 'Porte-à-porte',
            description: 'Campagnes de sensibilisation et de recrutement de donateurs directement au domicile des particuliers.',
            features: ['Équipes formées', 'Scripts personnalisés', 'Suivi en temps réel']
        },
        {
            icon: '🤝',
            title: 'Partenariats Associations',
            description: 'Nous collaborons avec des associations pour développer leur base de soutien et maximiser leur impact.',
            features: ['Stratégie sur mesure', 'Reporting détaillé', 'ROI optimisé']
        },
        {
            icon: '📢',
            title: 'Street Marketing',
            description: 'Présence dans les lieux publics stratégiques pour toucher un maximum de personnes et créer l\'engagement.',
            features: ['Emplacements premium', 'Brand ambassadors', 'Activation événementielle']
        },
        {
            icon: '📊',
            title: 'Gestion de Campagnes',
            description: 'Planification, exécution et analyse complète de vos campagnes de marketing terrain.',
            features: ['Dashboard analytics', 'Optimisation continue', 'Support dédié']
        }
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Nos Services</span>
                    <h2 className={styles.title}>
                        Ce que nous <span className={styles.highlight}>faisons</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Des solutions de marketing face-to-face complètes pour maximiser l'impact de votre association.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardGlow}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <ul className={styles.featureList}>
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <span className={styles.checkmark}>→</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.cardFooter}>
                                <a href="#contact" className={styles.learnMore}>
                                    En savoir plus
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
