'use client';

import styles from './About.module.css';

const About = () => {
    const values = [
        {
            icon: '🤝',
            title: 'Face-to-Face',
            description: 'Nous croyons au pouvoir de la connexion humaine directe pour créer un impact durable.'
        },
        {
            icon: '💚',
            title: 'Impact Social',
            description: 'Chaque campagne contribue à des causes qui comptent, avec des associations engagées.'
        },
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'Nous visons l\'excellence dans chaque interaction, chaque conversation compte.'
        },
        {
            icon: '🌍',
            title: 'Communauté',
            description: 'Nous construisons des ponts entre les organisations et les communautés locales.'
        }
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Content */}
                    <div className={styles.content}>
                        <span className={styles.label}>À propos de nous</span>
                        <h2 className={styles.title}>
                            Nous <span className={styles.highlight}>connectons</span> les associations aux personnes qui peuvent faire la différence
                        </h2>
                        <p className={styles.description}>
                            Engage est la première agence de marketing face-to-face au Luxembourg.
                            Nous travaillons en porte-à-porte avec des associations pour sensibiliser,
                            recruter des donateurs et créer des liens authentiques entre les organisations
                            et le public.
                        </p>
                        <p className={styles.description}>
                            Notre approche unique combine la puissance du contact humain direct avec
                            des stratégies de marketing modernes, permettant aux associations de
                            maximiser leur impact social.
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}>✓</div>
                                <span>Campagnes personnalisées</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}>✓</div>
                                <span>Équipe formée et motivée</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}>✓</div>
                                <span>Résultats mesurables</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.featureIcon}>✓</div>
                                <span>Partenariats durables</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Values Cards */}
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
