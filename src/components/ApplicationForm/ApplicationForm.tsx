'use client';

import { useState, useRef } from 'react';
import styles from './ApplicationForm.module.css';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setCvFile(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const removeFile = () => {
        setCvFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');

        // Reset form after success
        setTimeout(() => {
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            setCvFile(null);
            setSubmitStatus('idle');
        }, 3000);
    };

    return (
        <section className={styles.applicationSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Candidature</span>
                    <h2 className={styles.title}>
                        <span className={styles.highlight}>Postuler</span> maintenant
                    </h2>
                    <p className={styles.subtitle}>
                        Rejoignez notre équipe dynamique et commencez une carrière qui a du sens.
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                        {/* Prénom */}
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName" className={styles.formLabel}>
                                Prénom <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="Votre prénom"
                                required
                            />
                        </div>

                        {/* Nom */}
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName" className={styles.formLabel}>
                                Nom <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="Votre nom"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Email <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="votre@email.com"
                                required
                            />
                        </div>

                        {/* Téléphone */}
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.formLabel}>
                                Téléphone <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.formInput}
                                placeholder="+352 000 000 000"
                                required
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>
                            Message / Motivation
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.formTextarea}
                            placeholder="Parlez-nous de vous et de votre motivation..."
                            rows={4}
                        />
                    </div>

                    {/* CV Upload */}
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                            CV <span className={styles.required}>*</span>
                        </label>
                        <div
                            className={`${styles.dropZone} ${cvFile ? styles.hasFile : ''}`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className={styles.fileInput}
                                required={!cvFile}
                            />
                            {cvFile ? (
                                <div className={styles.fileInfo}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                        <polyline points="10 9 9 9 8 9" />
                                    </svg>
                                    <span className={styles.fileName}>{cvFile.name}</span>
                                    <button
                                        type="button"
                                        className={styles.removeFile}
                                        onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ) : (
                                <div className={styles.dropZoneContent}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" y1="3" x2="12" y2="15" />
                                    </svg>
                                    <p className={styles.dropZoneText}>
                                        <span className={styles.dropZoneHighlight}>Cliquez pour télécharger</span>
                                        {' '}ou glissez-déposez
                                    </p>
                                    <p className={styles.dropZoneHint}>PDF, DOC, DOCX (max. 5MB)</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''} ${submitStatus === 'success' ? styles.success : ''}`}
                        disabled={isSubmitting || submitStatus === 'success'}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner}></span>
                                Envoi en cours...
                            </>
                        ) : submitStatus === 'success' ? (
                            <>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Candidature envoyée !
                            </>
                        ) : (
                            <>
                                Envoyer ma candidature
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                </svg>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ApplicationForm;
