'use client';

import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <span className={styles.label}>Qui sommes-nous</span>
                    <h2 className={styles.title}>
                        Une agence <span className={styles.highlight}>terrain</span>,
                        des résultats concrets
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Mission */}
                    <div className={styles.missionCard}>
                        <h3 className={styles.cardTitle}>Notre mission</h3>
                        <p className={styles.cardText}>
                            ENGAGE est une agence de marketing face-to-face basée au Luxembourg.
                            Nous aidons les ONG, associations et entreprises à atteindre leur public
                            directement, sur le terrain, grâce à des équipes de terrain formées
                            et motivées.
                        </p>
                        <p className={styles.cardText}>
                            Notre approche : aller à la rencontre des gens là où ils sont,
                            expliquer clairement votre mission et transformer les conversations
                            en engagements concrets — dons réguliers, adhésions, inscriptions.
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className={styles.servicesCard}>
                        <h3 className={styles.cardTitle}>Ce que nous faisons</h3>
                        <ul className={styles.servicesList}>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Collecte de fonds</strong>
                                    <p>Recrutement de donateurs réguliers pour ONG et associations</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Sensibilisation</strong>
                                    <p>Campagnes d&apos;information et de mobilisation citoyenne</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Acquisition clients</strong>
                                    <p>Prospection terrain pour entreprises et services</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Why It Works */}
                <div className={styles.whySection}>
                    <h3 className={styles.whyTitle}>Pourquoi le face-to-face fonctionne</h3>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyItem}>
                            <span className={styles.whyNumber}>85%</span>
                            <p>des donateurs recrutés en face-to-face restent fidèles après 1 an</p>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.whyNumber}>3x</span>
                            <p>plus efficace que le démarchage téléphonique pour les ONG</p>
                        </div>
                        <div className={styles.whyItem}>
                            <span className={styles.whyNumber}>100%</span>
                            <p>humain — pas de robot, une vraie conversation</p>
                        </div>
                    </div>
                </div>

                {/* Founder Note */}
                <div className={styles.founderSection}>
                    <div className={styles.founderContent}>
                        <blockquote className={styles.quote}>
                            &ldquo;Le marketing digital a ses limites. Rien ne remplace une vraie conversation,
                            un regard, une poignée de main. C&apos;est ce qui crée la confiance
                            et transforme un inconnu en soutien durable.&rdquo;
                        </blockquote>
                        <div className={styles.founderInfo}>
                            <div className={styles.founderAvatar}>
                                <span>TR</span>
                            </div>
                            <div>
                                <strong className={styles.founderName}>Tiago Ribeiro</strong>
                                <p className={styles.founderRole}>Fondateur, ENGAGE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
