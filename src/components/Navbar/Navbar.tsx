'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#accueil', label: 'Accueil' },
        { href: '#about', label: 'À propos' },
        { href: '#services', label: 'Services' },
        { href: '#partners', label: 'Partenaires' },
        { href: '#careers', label: 'Carrières' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#accueil" className={styles.logo}>
                    <span className={styles.logoText}>Engage</span>
                    <span className={styles.logoSlogan}>you.</span>
                </a>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#careers" className={styles.ctaButton}>
                    Rejoignez-nous
                </a>

                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={handleNavClick}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#careers" className={styles.mobileCta} onClick={handleNavClick}>
                    Rejoignez-nous
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
