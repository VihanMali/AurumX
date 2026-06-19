import React from 'react';
import styles from './contact.module.css';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className={styles.mainWrapper}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    Aurum<span style={{ color: '#4f46e5' }}>X</span>
                </div>
                <div className={styles.navLinks}>
                    {['Blogs', 'About', 'Contact'].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase()}`} className={styles.navLink}>
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
            <div className={styles.container}>

                <div className={styles.grid}>
                    {/* Community Section */}
                    <section className={styles.section}>
                        <h2>Community & Content</h2>
                        <div className={styles.linksGroup}>
                            <a href="https://youtube.com/@phantechofficial?si=7JSWokkTJHn-NYt-" target="_blank" rel="noopener noreferrer" className={`${styles.linkCard} ${styles.youtube}`}>
                                <span>📺</span>
                                <div>
                                    <strong>PhanTech's Official Youtube Channel</strong>
                                    <p>Explore Tech Related Content</p>
                                </div>
                            </a>

                            <a href="https://discord.gg/JcGu2TqD" target="_blank" rel="noopener noreferrer" className={`${styles.linkCard} ${styles.discord}`}>
                                <span>💬</span>
                                <div>
                                    <strong>PhanTech's Discord Community</strong>
                                    <p>Join the community for support and updates</p>
                                </div>
                            </a>
                            <a href="https://github.com/VihanMali" target="_blank" rel="noopener noreferrer" className={`${styles.linkCard} ${styles.discord}`}>
                                <span>🐈‍⬛</span>
                                <div>
                                    <strong>Vihan Mali's Github Profile</strong>
                                    <p>Join the community for support and updates</p>
                                </div>
                            </a>
                        </div>
                    </section>



                </div>
            </div>
        </div>
    );
}