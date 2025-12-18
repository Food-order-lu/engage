'use client';

import styles from './PageHeader.module.css';
import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb: string;
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
    return (
        <section className={styles.header}>
            <div className={styles.bgPattern}></div>
            <div className={styles.container}>
                <nav className={styles.breadcrumb}>
                    <Link href="/">Accueil</Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{breadcrumb}</span>
                </nav>
                <h1 className={styles.title}>
                    <span className={styles.gradientText}>{title}</span>
                </h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </section>
    );
};

export default PageHeader;
