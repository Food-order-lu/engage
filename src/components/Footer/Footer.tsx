'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main Footer Content */}
                <div className={styles.top}>
                    {/* Brand & Contact Info */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoText}>Engage</span>
                        </Link>
                        <p className={styles.tagline}>
                            Agence de marketing face-to-face<br />
                            basée au Luxembourg.
                        </p>

                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <span>Luxembourg City, Luxembourg</span>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📧</span>
                                <a href="mailto:hello@engage.lu">hello@engage.lu</a>
                            </div>
                        </div>

                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Navigation</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/">Accueil</Link></li>
                                <li><Link href="/about">À propos</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Opportunités</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/careers">Carrières</Link></li>
                                <li><Link href="/partners">Partenaires</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={styles.ctaColumn}>
                        <h4 className={styles.linkTitle}>Prêt à démarrer ?</h4>
                        <p className={styles.ctaText}>
                            Discutons de votre projet ou rejoignez notre équipe.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Nous contacter
                        </Link>
                    </div>
                </div>

                {/* Bottom - Legal */}
                <div className={styles.bottom}>
                    <div className={styles.legal}>
                        <p className={styles.copyright}>
                            © {currentYear} ENGAGE S.à r.l. — Société à responsabilité limitée inscrite au Luxembourg.
                        </p>
                        <p className={styles.legalLinks}>
                            <Link href="#">Mentions légales</Link>
                            <span className={styles.separator}>•</span>
                            <Link href="#">Politique de confidentialité</Link>
                            <span className={styles.separator}>•</span>
                            <Link href="#">CGV</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
