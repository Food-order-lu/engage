'use client';

import styles from './WhyJoinUs.module.css';

const WhyJoinUs = () => {
    const benefits = [
        {
            icon: '💼',
            title: 'Développement de Carrière',
            description: 'Votre potentiel compte plus que vos qualifications. Évoluez rapidement vers de nouvelles responsabilités.',
            gradient: 'linear-gradient(135deg, #00A651 0%, #00C853 100%)'
        },
        {
            icon: '💰',
            title: 'Salaire Attractif',
            description: 'Rémunération compétitive avec des bonus pour récompenser vos résultats et votre engagement.',
            gradient: 'linear-gradient(135deg, #1E88E5 0%, #42A5F5 100%)'
        },
        {
            icon: '📅',
            title: 'Planning Flexible',
            description: 'Votre emploi du temps s\'adapte à votre vie. Choisissez librement vos jours de travail.',
            gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)'
        },
        {
            icon: '🎯',
            title: 'Travail Impactant',
            description: 'Contribuez à des causes importantes. Chaque conversation peut changer une vie.',
            gradient: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)'
        },
        {
            icon: '🤝',
            title: 'Ambiance Unique',
            description: 'Baby-foot, soirées conviviales, moments de détente. Le seul job où la journée passe trop vite.',
            gradient: 'linear-gradient(135deg, #00BCD4 0%, #4DD0E1 100%)'
        },
        {
            icon: '📈',
            title: 'Expérience & Compétences',
            description: 'Développez une expertise solide en vente et communication tout en enrichissant votre parcours.',
            gradient: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)'
        }
    ];

    return (
        <section id="careers" className={styles.whyJoinUs}>
            <div className={styles.bgDecor}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Carrières</span>
                    <h2 className={styles.title}>
                        Pourquoi <span className={styles.highlight}>nous rejoindre</span> ?
                    </h2>
                    <p className={styles.subtitle}>
                        Immergez-vous dans une atmosphère unique, où passion et performance se rencontrent.
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ '--card-gradient': benefit.gradient } as React.CSSProperties}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{benefit.icon}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                                <p className={styles.cardDescription}>{benefit.description}</p>
                            </div>
                            <div className={styles.cardShine}></div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <a href="#contact" className={styles.ctaButton}>
                        Postuler maintenant
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <p className={styles.ctaText}>
                        Rejoignez une équipe de plus de 200 passionnés
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;
