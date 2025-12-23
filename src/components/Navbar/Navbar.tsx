'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
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
        { href: '/', label: 'Accueil' },
        { href: '/about', label: 'À propos' },
        { href: '/services', label: 'Services' },
        { href: '/partners', label: 'Partenaires' },
        { href: '/careers', label: 'Carrières' },
        { href: '/contact', label: 'Contact' },
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <Logo size="small" />
                </Link>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link href="/careers" className={styles.ctaButton}>
                    Rejoignez-nous
                </Link>

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
                    <Link
                        key={link.href}
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={handleNavClick}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link href="/careers" className={styles.mobileCta} onClick={handleNavClick}>
                    Rejoignez-nous
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
