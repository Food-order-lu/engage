'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    const marqueeText = "ENGAGE • INSPIRE • CONNECT • IMPACT • ";

    return (
        <section id="accueil" className={styles.hero}>
            {/* Background Elements */}
            <div className={styles.bgGradient}></div>
            <div className={styles.bgImage}></div>
            <div className={styles.bgOrbs}>
                <div className={styles.orbGreen}></div>
                <div className={styles.orbBlue}></div>
            </div>
            <div className={styles.gridPattern}></div>

            {/* Marquee Background */}
            <div className={styles.marqueeTop}>
                <div className={styles.marqueeTrack}>
                    <span>{marqueeText}{marqueeText}{marqueeText}{marqueeText}</span>
                </div>
            </div>
            <div className={styles.marqueeBottom}>
                <div className={styles.marqueeTrackReverse}>
                    <span>{marqueeText}{marqueeText}{marqueeText}{marqueeText}</span>
                </div>
            </div>

            {/* Hero Content */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Basé au Luxembourg
                    </div>

                    <h1 className={styles.title}>
                        Marketing terrain<br />
                        <span className={styles.gradientText}>face-to-face</span>
                    </h1>

                    <p className={styles.subtitle}>
                        ENGAGE connecte les ONG, associations et entreprises directement avec leur public
                        grâce au marketing en porte-à-porte. Une approche humaine, des résultats concrets.
                    </p>

                    <div className={styles.clientTypes}>
                        <span className={styles.clientBadge}>ONG & Associations</span>
                        <span className={styles.clientBadge}>Entreprises</span>
                        <span className={styles.clientBadge}>Institutions</span>
                    </div>

                    <div className={styles.buttons}>
                        <Link href="/contact" className={styles.btnPrimary}>
                            Discutons de votre projet
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/careers" className={styles.btnSecondary}>
                            Rejoindre l&apos;équipe
                        </Link>
                    </div>

                    <div className={styles.trustSignals}>
                        <p className={styles.trustText}>
                            <strong>Depuis 2023</strong> — Équipe locale, approche terrain, résultats mesurables
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Découvrir</span>
            </div>
        </section>
    );
};

export default Hero;
