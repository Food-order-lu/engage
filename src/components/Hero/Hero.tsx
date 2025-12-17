'use client';

import styles from './Hero.module.css';

const Hero = () => {
    const marqueeText = "WE ENGAGE TO INSPIRE • WE ENGAGE TO INSPIRE • WE ENGAGE TO INSPIRE • WE ENGAGE TO INSPIRE • WE ENGAGE TO INSPIRE • WE ENGAGE TO INSPIRE • ";

    return (
        <section id="accueil" className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.bgGradient}></div>
            <div className={styles.bgOrbs}>
                <div className={styles.orbGreen}></div>
                <div className={styles.orbBlue}></div>
            </div>
            <div className={styles.gridPattern}></div>

            {/* Marquee Top */}
            <div className={styles.marqueeTop}>
                <div className={styles.marqueeTrack}>
                    <span>{marqueeText}</span>
                    <span>{marqueeText}</span>
                </div>
            </div>

            {/* Hero Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Face-to-Face Marketing Agency
                    </div>

                    <h1 className={styles.title}>
                        Nous <span className={styles.gradientText}>engageons</span>
                        <br />
                        pour <span className={styles.outlineText}>inspirer</span>
                    </h1>

                    <p className={styles.subtitle}>
                        La plus grande agence de marketing face-to-face au Luxembourg.
                        <br />
                        Nous travaillons en porte-à-porte avec des associations pour créer un impact réel.
                    </p>

                    <div className={styles.buttons}>
                        <a href="#about" className={styles.btnPrimary}>
                            Découvrir
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#careers" className={styles.btnSecondary}>
                            Postuler maintenant
                        </a>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Campagnes</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Associations</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>200+</span>
                            <span className={styles.statLabel}>Équipe</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee Bottom */}
            <div className={styles.marqueeBottom}>
                <div className={styles.marqueeTrackReverse}>
                    <span>{marqueeText}</span>
                    <span>{marqueeText}</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
