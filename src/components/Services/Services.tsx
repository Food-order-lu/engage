'use client';

import Link from 'next/link';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            title: 'Pour les ONG & Associations',
            description: 'Recrutez des donateurs réguliers qui soutiennent votre cause sur le long terme.',
            offerings: [
                'Recrutement de donateurs mensuels en porte-à-porte',
                'Campagnes de sensibilisation ciblées',
                'Formation et scripts adaptés à votre mission'
            ],
            result: 'Résultat : fidélisation moyenne de 85% après 1 an'
        },
        {
            title: 'Pour les Entreprises',
            description: 'Touchez vos clients potentiels directement, sans intermédiaire digital.',
            offerings: [
                'Prospection B2C terrain',
                'Acquisition de leads qualifiés',
                'Promotion de produits et services'
            ],
            result: 'Résultat : taux de conversion supérieur au télémarketing'
        },
        {
            title: 'Pour les Institutions',
            description: 'Informez et mobilisez les citoyens sur vos initiatives publiques.',
            offerings: [
                'Campagnes d\'information citoyenne',
                'Collecte de signatures et pétitions',
                'Sensibilisation sur des thématiques sociales'
            ],
            result: 'Résultat : participation citoyenne mesurable'
        }
    ];

    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Nos Services</span>
                    <h2 className={styles.title}>
                        Comment nous <span className={styles.highlight}>aidons</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Une approche adaptée à chaque type d&apos;organisation, avec des résultats mesurables.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </div>
                            <ul className={styles.offeringsList}>
                                {service.offerings.map((offering, idx) => (
                                    <li key={idx}>
                                        <span className={styles.bullet}>—</span>
                                        {offering}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.cardResult}>
                                <span className={styles.resultIcon}>📈</span>
                                {service.result}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className={styles.processSection}>
                    <h3 className={styles.processTitle}>Comment ça fonctionne</h3>
                    <div className={styles.processSteps}>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>1</span>
                            <strong>Échange initial</strong>
                            <p>On discute de vos objectifs et de votre cible</p>
                        </div>
                        <div className={styles.stepArrow}>→</div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>2</span>
                            <strong>Préparation</strong>
                            <p>Formation de l&apos;équipe et scripts personnalisés</p>
                        </div>
                        <div className={styles.stepArrow}>→</div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>3</span>
                            <strong>Déploiement</strong>
                            <p>Campagne terrain avec suivi quotidien</p>
                        </div>
                        <div className={styles.stepArrow}>→</div>
                        <div className={styles.step}>
                            <span className={styles.stepNumber}>4</span>
                            <strong>Résultats</strong>
                            <p>Reporting complet et optimisation continue</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        Vous avez un projet ? Discutons-en.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Prendre contact
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
