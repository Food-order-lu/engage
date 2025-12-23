'use client';

import styles from './WhyJoinUs.module.css';

const WhyJoinUs = () => {
    const benefits = [
        {
            icon: '💶',
            title: 'Rémunération attractive',
            description: 'Salaire fixe + bonus basés sur vos résultats. Pas de plafond, votre travail paie.'
        },
        {
            icon: '📅',
            title: 'Horaires flexibles',
            description: 'Vous choisissez vos jours de travail. Compatible avec études ou autre activité.'
        },
        {
            icon: '🎯',
            title: 'Un travail qui a du sens',
            description: 'Vous aidez des ONG à financer leurs actions. Impact réel et mesurable.'
        },
        {
            icon: '📈',
            title: 'Évolution rapide',
            description: 'Pas de diplôme requis. Ce qui compte : motivation et résultats. Promotions internes.'
        }
    ];

    return (
        <section id="careers" className={styles.whyJoinUs}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Carrières</span>
                    <h2 className={styles.title}>
                        On recrute des <span className={styles.highlight}>vrais profils terrain</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Pas de CV parfait requis. On forme nos équipes. Ce qu&apos;on cherche :
                        de la motivation, de l&apos;énergie et l&apos;envie de bien faire.
                    </p>
                </div>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{benefit.icon}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{benefit.title}</h3>
                            <p className={styles.cardDescription}>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* What We're Looking For */}
                <div className={styles.lookingFor}>
                    <h3 className={styles.lookingForTitle}>Le profil idéal</h3>
                    <div className={styles.profileGrid}>
                        <div className={styles.profileItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>À l&apos;aise à l&apos;oral</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Motivé(e) et autonome</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Disponible au Luxembourg</span>
                        </div>
                        <div className={styles.profileItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Bonus sur performances</span>
                        </div>
                    </div>
                    <p className={styles.noExperience}>
                        <strong>Pas d&apos;expérience ?</strong> C&apos;est pas un problème. On te forme dès le premier jour.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;
